(function(){
  var h=document.querySelector('.hd');
  function sc(){if(h)h.classList.toggle('solid',scrollY>40);var hero=document.querySelector('.hero-img');if(hero&&scrollY<innerHeight*1.2){hero.style.transform='scale('+(1+scrollY/innerHeight*0.12)+') translateY('+(scrollY*0.15)+'px)'}}
  addEventListener('scroll',sc,{passive:true});sc();
  var mb=document.getElementById('menuBtn');if(mb)mb.onclick=function(){document.body.classList.toggle('menu-on')};
  [].forEach.call(document.querySelectorAll('.nav a'),function(a){a.addEventListener('click',function(){document.body.classList.remove('menu-on')})});
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  [].forEach.call(document.querySelectorAll('.rv'),function(e){io?io.observe(e):e.classList.add('in')});
  // projects grid
  var g=document.getElementById('grid');
  if(g){
    var P=window.ELIUM.projects,en=window.LANG==='en';
    g.innerHTML=P.map(function(p,i){
      return '<a class="card c'+(i%4)+' rv" data-t="'+p.t+'" href="project.html?id='+p.id+'">'+(p.img?'<div class="ph"><img src="img/'+p.img+'.jpg" alt="'+(en?p.en:p.ko)+'" loading="lazy"></div>':'<div class="ph pn-panel '+p.c+'"><span class="os">'+p.blk+'</span></div>')+'<div class="cap"><span class="n">'+String(i+1).padStart(2,'0')+'</span><h3>'+(en?p.en:p.ko)+'</h3><p>'+(en?p.rg_en:p.rg_ko)+'</p></div></a>'}).join('');
    [].forEach.call(g.querySelectorAll('.rv'),function(e){io?io.observe(e):e.classList.add('in')});
    var fs=document.querySelectorAll('.flt button');
    [].forEach.call(fs,function(b){b.onclick=function(){
      [].forEach.call(fs,function(x){x.classList.remove('on')});b.classList.add('on');var f=b.getAttribute('data-f');
      [].forEach.call(g.children,function(c){c.classList.toggle('hide',f!=='all'&&(' '+c.getAttribute('data-t')+' ').indexOf(' '+f+' ')<0)})}});
  }
})();
