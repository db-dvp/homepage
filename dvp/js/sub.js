(function(){
  var D=window.PAGES,E=window.PAGES_EN,en=window.LANG==='en',q=new URLSearchParams(location.search).get('p')||'company/overview';
  if(!D.pages[q])q='company/overview';
  var pg=D.pages[q],s=q.split('/'),g=s[0],id=s[1];
  var grp=D.groups.filter(function(x){return x.id===g})[0];
  var gname=en?E.groups[g][0]:pg.group,title=en?E.groups[g][1][id]:pg.title;
  var HERO={company:'a1',business:'a4',op:'u5',pr:'a5',recruit:'u1',cs:'u2'};
  var HP={'company/ceo':'a2','company/philosophy':'u3','company/history_a':'a3','company/ci':'u4','company/contact':'a6','business/calendar':'a5','business/sell':'a7','business/order':'c4','business/development':'dev','business/fnb':'f1','business/etc':'c1','op/quality':'u7','op/safe':'s1','op/social':'u8','recruit/process':'u3','recruit/apply':'u6','cs/wish':'a2','cs/flaw':'u8'};
  var PH={'company/overview':['a2','a3','a7'],'company/ceo':['ceo'],'company/philosophy':['u3','u4'],'company/history_a':['a1'],'company/contact':['a6'],
   'business/calendar':['a5'],'business/sell':['m1','m2','m3'],'business/order':['sign','c3'],'business/development':['dev','c2'],'business/fnb':['f1','f2','f3'],'business/etc':['c1','c4'],
   'op/quality':['u7','u1'],'op/ethics':['u4'],'op/social':['u8','u2'],'op/winwin':['sign'],'op/safe':['s1','s2','s3'],
   'pr/media':['a5'],'recruit/recruit':['u1','u6'],'recruit/system':['c2','u5'],'recruit/process':['u3'],'recruit/apply':['a4'],'cs/guide':['u2'],'cs/wish':['a1'],'cs/customer':['a6'],'cs/flaw':['u8']};
  var GAL={'business/sell':['g1','g2','g4','g5','g6','g7','g8','a5','a6'],'cs/wish':['g1','g4','g5','g7','a3','a6']};
  document.title=title+' | '+(en?'Daebang Industrial Development':'대방산업개발');
  document.getElementById('ttl').textContent=title;
  document.getElementById('crumb').textContent='HOME  ›  '+gname;
  var h1=document.getElementById('ttl');
  if(!en){var sp=document.createElement('span');sp.className='sub-en';sp.textContent=E.groups[g][1][id];h1.parentNode.appendChild(sp)}
  document.getElementById('svbg').style.backgroundImage='url(assets/ph/'+(HP[q]||HERO[g])+'.jpg)';
  document.getElementById('tabs').firstElementChild.innerHTML=grp.items.map(function(i){
    return '<a href="sub.html?p='+g+'/'+i.id+'"'+(g+'/'+i.id===q?' class="on"':'')+'>'+(en?E.groups[g][1][i.id]:i.name)+'</a>'}).join('');
  var html;
  if(en&&E.pages[q]){
    html=E.pages[q];
    var t=document.createElement('div');t.innerHTML=pg.html;
    [].forEach.call(t.querySelectorAll('.btns'),function(b){[].forEach.call(b.querySelectorAll('a'),function(a){if(E.btn[a.textContent])a.textContent=E.btn[a.textContent]});html+='<section class="blk">'+b.outerHTML+'</section>'});
  }else if(en){
    html='<section class="blk"><div class="lang-note">An English version of this page is not available yet. The original Korean content is shown below.</div></section>'+pg.html;
  }else html=pg.html;
  // photo block after first section
  var ph=PH[q];
  if(ph){
    var cls=ph.length===1?'ph-wide':ph.length===2?'ph-two':'ph-three';
    var blk='<section class="blk ph"><div class="'+cls+'">'+ph.map(function(k){return '<figure><img src="assets/ph/'+k+'.jpg" alt="" loading="lazy"></figure>'}).join('')+'</div></section>';
    if(cls==='ph-wide')blk=blk.replace('<div class="ph-wide"><figure>','<figure class="ph-wide">').replace('</figure></div>','</figure>');
    var i=html.indexOf('</section>')+10;html=html.slice(0,i)+blk+html.slice(i);
  }
  if(GAL[q])html+='<section class="blk"><h3>'+(en?'Gallery':'갤러리')+'</h3><div class="gallery">'+GAL[q].map(function(k){return '<img src="assets/ph/'+k+'.jpg" alt="" loading="lazy">'}).join('')+'</div></section>';
  document.getElementById('body').innerHTML=html;
  var rv=[].slice.call(document.querySelectorAll('.blk'));
  rv.forEach(function(e){e.classList.add('reveal')});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.05});rv.forEach(function(r){io.observe(r)})}else rv.forEach(function(r){r.classList.add('in')});
  window.scrollTo(0,0);
})();
