(function(){
  var hd=document.getElementById('header');
  var toTop=document.getElementById('toTop');
  var mq=window.matchMedia('(min-width:1001px)');

  function onScroll(){
    var y=window.scrollY;
    hd.classList.toggle('is-solid',y>80);
    toTop.classList.toggle('on',y>700);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  hd.addEventListener('mouseenter',function(){if(mq.matches)hd.classList.add('is-hover')});
  hd.addEventListener('mouseleave',function(){hd.classList.remove('is-hover')});

  // visual slider
  var slides=[].slice.call(document.querySelectorAll('.slide'));
  var cur=0;
  setInterval(function(){
    slides[cur].classList.remove('on');
    cur=(cur+1)%slides.length;
    slides[cur].classList.add('on');
  },7000);

  // full menu
  var full=document.getElementById('full');
  function menu(o){full.classList.toggle('is-open',o);full.setAttribute('aria-hidden',String(!o));document.body.style.overflow=o?'hidden':''}
  document.getElementById('menuBtn').addEventListener('click',function(){menu(true)});
  document.getElementById('fullX').addEventListener('click',function(){menu(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});

  // counters + reveal
  var nums=[].slice.call(document.querySelectorAll('.count-warp strong'));
  function count(el){
    var to=+el.dataset.to,t0=null,dur=1500;
    function step(t){
      if(!t0)t0=t;
      var p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(to*e);
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var rv=[].slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        e.target.classList.add('in');
        var n=e.target.querySelectorAll?e.target.querySelectorAll('.count-warp strong'):[];
        [].forEach.call(n,count);
        io.unobserve(e.target);
      });
    },{threshold:.15});
    rv.forEach(function(r){io.observe(r)});
  }else{
    rv.forEach(function(r){r.classList.add('in')});
    nums.forEach(function(n){n.textContent=n.dataset.to});
  }
})();
