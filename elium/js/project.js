(function(){
  var en=window.LANG==='en',E=window.ELIUM,P=E.projects,id=new URLSearchParams(location.search).get('id'),i=0;
  P.forEach(function(p,k){if(p.id===id)i=k});
  var p=P[i],pv=P[(i+P.length-1)%P.length],nx=P[(i+1)%P.length];
  document.title=(en?p.en:p.ko)+' | '+(en?'Daebang Elium':'대방 엘리움');
  var g=E.pool.filter(function(x){return x!==p.cover}),pick=[];
  for(var k=0;k<5;k++)pick.push(g[(i*3+k*2)%g.length]);
  pick=pick.filter(function(x,k,a){return a.indexOf(x)===k});for(var k=0;pick.length<5;k++)if(pick.indexOf(g[k])<0)pick.push(g[k]);
  var tp={res:en?'Residential':'공동주택',off:en?'Officetel':'오피스텔',com:en?'Commercial':'상업',"off com":en?'Officetel · Retail':'오피스텔 · 상업시설'}[p.t];
  var h='<section class="pp-hero"><img src="img/'+p.cover+'.jpg" alt=""></section>';
  h+='<section class="pp-t"><div><span class="lab">Project '+String(i+1).padStart(2,'0')+'</span><h1>'+(en?p.en:p.ko)+'</h1><p class="sub">'+(en?p.sub_en:p.sub_ko)+'</p></div>';
  h+='<dl class="meta"><dt>Location</dt><dd>'+(en?p.rg_en:p.rg_ko)+'</dd><dt>Type</dt><dd>'+tp+'</dd><dt>Developer</dt><dd>'+(en?'Daebang Industrial Development':'대방산업개발')+'</dd></dl></section>';
  if(p.url)h+='<div class="pp-btn"><a class="btn gd" href="'+p.url+'" target="_blank" rel="noopener">'+(en?'Visit Sales Site ↗':'분양 홈페이지 ↗')+'</a></div>';
  h+='<div class="gallery">'+pick.map(function(x,k){return '<figure class="g'+k+' rv"><img src="img/'+x+'.jpg" alt="" loading="lazy"></figure>'}).join('')+'</div>';
  h+='<div class="pn"><a href="project.html?id='+pv.id+'"><small>← PREV</small><strong>'+(en?pv.en:pv.ko)+'</strong></a><a href="project.html?id='+nx.id+'"><small>NEXT →</small><strong>'+(en?nx.en:nx.ko)+'</strong></a></div>';
  document.getElementById('pp').innerHTML=h;
  [].forEach.call(document.querySelectorAll('.rv'),function(e){setTimeout(function(){e.classList.add('in')},60)});
})();
