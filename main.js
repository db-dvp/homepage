(function(){
  var hd=document.getElementById('hd');
  var top=document.getElementById('top');
  function onScroll(){
    var y=window.scrollY;
    hd.classList.toggle('is-solid',y>60);
    top.classList.toggle('is-on',y>600);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var mq=window.matchMedia('(min-width:1101px)');
  hd.addEventListener('mouseenter',function(){if(mq.matches)hd.classList.add('is-hover')});
  hd.addEventListener('mouseleave',function(){hd.classList.remove('is-hover')});

  // hero slider
  var slides=[].slice.call(document.querySelectorAll('.hero__slide'));
  var dots=[].slice.call(document.querySelectorAll('.hero__dot'));
  var cur=0,timer;
  function go(n){
    slides[cur].classList.remove('is-on');dots[cur].classList.remove('is-on');
    cur=(n+slides.length)%slides.length;
    slides[cur].classList.add('is-on');dots[cur].classList.add('is-on');
  }
  function play(){clearInterval(timer);timer=setInterval(function(){go(cur+1)},6000)}
  dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);play()})});
  play();

  // full menu
  var full=document.getElementById('full');
  function menu(o){full.classList.toggle('is-open',o);full.setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''}
  document.getElementById('menuBtn').addEventListener('click',function(){menu(true)});
  document.getElementById('fullX').addEventListener('click',function(){menu(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});

  // counters
  var nums=[].slice.call(document.querySelectorAll('.stats__num b'));
  function count(el){
    var to=+el.dataset.to,t0=null,dur=1400;
    function step(t){
      if(!t0)t0=t;
      var p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(to*e);
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){count(e.target);io.unobserve(e.target)}});
    },{threshold:.6});
    nums.forEach(function(n){io.observe(n)});
  }else{nums.forEach(function(n){n.textContent=n.dataset.to})}
})();
