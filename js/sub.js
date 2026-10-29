(function(){
  var D=window.PAGES,q=new URLSearchParams(location.search).get('p')||'company/overview';
  var pg=D.pages[q]||D.pages['company/overview'];if(!D.pages[q])q='company/overview';
  var g=q.split('/')[0];
  document.title=pg.title+' | 대방산업개발';
  document.getElementById('ttl').textContent=pg.title;
  document.getElementById('crumb').textContent='HOME  ›  '+pg.group;
  var grp=D.groups.filter(function(x){return x.id===g})[0];
  document.getElementById('tabs').firstElementChild.innerHTML=grp.items.map(function(i){
    return '<a href="sub.html?p='+g+'/'+i.id+'"'+(g+'/'+i.id===q?' class="on"':'')+'>'+i.name+'</a>'}).join('');
  document.getElementById('body').innerHTML=pg.html;
  var rv=[].slice.call(document.querySelectorAll('.blk'));
  rv.forEach(function(e){e.classList.add('reveal')});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});rv.forEach(function(r){io.observe(r)})}else rv.forEach(function(r){r.classList.add('in')});
  window.scrollTo(0,0);
})();