(function(){
  var D=window.PAGES,E=window.PAGES_EN,I=window.IA,en=window.LANG==='en';
  var q=new URLSearchParams(location.search).get('p')||'company/about';
  // 새 페이지 찾기 (기존 주소는 합쳐진 새 페이지의 해당 위치로 연결)
  function find(k){var s=k.split('/'),g=I.groups.filter(function(x){return x.id===s[0]})[0],it=g&&g.items.filter(function(x){return x.id===s[1]})[0];return it?{g:g,it:it}:null}
  var hit=find(q),anchor='';
  if(!hit&&I.legacy[q]){anchor='s-'+q.replace('/','-');hit=find(I.legacy[q]);history.replaceState(null,'','sub.html?p='+I.legacy[q]+'#'+anchor)}
  if(!hit)hit=find('company/about');
  var g=hit.g,it=hit.it,key=g.id+'/'+it.id;

  var HERO={company:'a1',business:'a4',op:'u5',pr:'a5',recruit:'u1',cs:'u2'};
  var HP={'company/ceo':'a2','company/philosophy':'u3','company/history_a':'a3','company/ci':'u4','company/contact':'a6','business/calendar':'a5','business/sell':'a7','business/order':'c4','business/development':'dev','business/fnb':'f1','business/etc':'c1','op/quality':'u7','op/safe':'s1','op/social':'u8','recruit/process':'u3','recruit/apply':'u6','cs/wish':'a2','cs/flaw':'u8'};
  var PH={'company/overview':['a2','a3','a7'],'company/ceo':['ceo'],'company/philosophy':['u3','u4'],'company/history_a':['a1'],'company/contact':['a6'],
   'business/calendar':['a5'],'business/sell':['m1','m2','m3'],'business/order':['sign','c3'],'business/development':['dev','c2'],'business/fnb':['f1','f2','f3'],'business/etc':['c1','c4'],
   'op/quality':['u7','u1'],'op/ethics':['u4'],'op/social':['u8','u2'],'op/winwin':['sign'],'op/safe':['s1','s2','s3'],
   'pr/media':['a5'],'recruit/recruit':['u1','u6'],'recruit/system':['c2','u5'],'recruit/process':['u3'],'recruit/apply':['a4'],'cs/guide':['u2'],'cs/wish':['a1'],'cs/customer':['a6'],'cs/flaw':['u8']};
  var GAL={'business/sell':['g1','g2','g4','g5','g6','g7','g8','a5','a6'],'cs/wish':['g1','g4','g5','g7','a3','a6']};

  function srcTitle(k){var x=I.extra[k];if(x)return en?x.en:x.title;var s=k.split('/');return en?E.groups[s[0]][1][s[1]]:D.pages[k].title}
  function srcHtml(k){
    var x=I.extra[k];if(x)return (en?'<section class="blk"><div class="lang-note">An English version of this page is not available yet. The original Korean content is shown below.</div></section>':'')+x.html;
    var pg=D.pages[k],html;
    if(en&&E.pages[k]){
      html=E.pages[k];
      var t=document.createElement('div');t.innerHTML=pg.html;
      [].forEach.call(t.querySelectorAll('.btns'),function(b){[].forEach.call(b.querySelectorAll('a'),function(a){if(E.btn[a.textContent])a.textContent=E.btn[a.textContent]});html+='<section class="blk">'+b.outerHTML+'</section>'});
    }else if(en){
      html='<section class="blk"><div class="lang-note">An English version of this page is not available yet. The original Korean content is shown below.</div></section>'+pg.html;
    }else html=pg.html;
    var ph=PH[k];
    if(ph){
      var cls=ph.length===1?'ph-wide':ph.length===2?'ph-two':'ph-three';
      var blk='<section class="blk ph"><div class="'+cls+'">'+ph.map(function(p){return '<figure><img src="assets/ph/'+p+'.jpg" alt="" loading="lazy"></figure>'}).join('')+'</div></section>';
      if(cls==='ph-wide')blk=blk.replace('<div class="ph-wide"><figure>','<figure class="ph-wide">').replace('</figure></div>','</figure>');
      var i=html.indexOf('</section>')+10;html=html.slice(0,i)+blk+html.slice(i);
    }
    if(GAL[k])html+='<section class="blk"><h3>'+(en?'Gallery':'갤러리')+'</h3><div class="gallery">'+GAL[k].map(function(p){return '<img src="assets/ph/'+p+'.jpg" alt="" loading="lazy">'}).join('')+'</div></section>';
    return html;
  }

  var title=en?it.en:it.name;
  document.title=title+' | '+(en?'Daebang Industrial Development':'대방산업개발');
  document.getElementById('ttl').textContent=title;
  document.getElementById('crumb').textContent='HOME  ›  '+g.name;
  if(!en){var sp=document.createElement('span');sp.className='sub-en';sp.textContent=it.en;document.getElementById('ttl').parentNode.appendChild(sp)}
  var s0=it.src[0],hero=(I.extra[s0]&&I.extra[s0].hero)||HP[s0]||HERO[s0.split('/')[0]];
  document.getElementById('svbg').style.backgroundImage='url(assets/ph/'+hero+'.jpg)';
  document.getElementById('tabs').firstElementChild.innerHTML=g.items.map(function(x){
    return '<a href="sub.html?p='+g.id+'/'+x.id+'"'+(x.id===it.id?' class="on" aria-current="page"':'')+'>'+(en?x.en:x.name)+'</a>'}).join('');

  // 본문: 합쳐진 기존 페이지를 순서대로, 2개 이상이면 페이지 안 바로가기 + 구획 제목
  var multi=it.src.length>1,out='';
  if(multi)out+='<nav class="pnav" aria-label="'+(en?'On this page':'이 페이지 목차')+'">'+it.src.map(function(k){return '<a href="#s-'+k.replace('/','-')+'">'+srcTitle(k)+'</a>'}).join('')+'</nav>';
  it.src.forEach(function(k,n){
    if(multi)out+='<div class="part-h" id="s-'+k.replace('/','-')+'"><span>'+(n<9?'0':'')+(n+1)+'</span><h2>'+srcTitle(k)+'</h2></div>';
    else out+='<span id="s-'+k.replace('/','-')+'"></span>';
    out+=srcHtml(k);
  });
  if(it.stats){
    var S=en?I.statsEn:I.stats;
    out+='<section class="blk"><p class="eb">DAEBANG IN NUMBERS</p><dl class="stats">'+S.map(function(s){return '<div><dt>'+s[0]+'</dt><dd><strong>'+s[1]+'</strong>'+(s[2]?'<span>'+s[2]+'</span>':'')+'</dd></div>'}).join('')+'</dl></section>';
  }
  var body=document.getElementById('body');body.innerHTML=out;
  // 옛 주소 링크(sub.html?p=old)도 새 페이지로
  [].forEach.call(document.querySelectorAll('a[href^="sub.html?p="]'),function(a){var o=a.getAttribute('href').split('p=')[1];if(I.legacy[o]&&!find(o))a.setAttribute('href','sub.html?p='+I.legacy[o]+'#s-'+o.replace('/','-'))});

  var rv=[].slice.call(document.querySelectorAll('.blk'));
  rv.forEach(function(e){e.classList.add('reveal')});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.05});rv.forEach(function(r){io.observe(r)})}else rv.forEach(function(r){r.classList.add('in')});
  var h=anchor||location.hash.slice(1),tg=h&&document.getElementById(h);
  if(tg){rv.forEach(function(r){r.classList.add('in')});setTimeout(function(){tg.scrollIntoView()},50)}else window.scrollTo(0,0);
})();
