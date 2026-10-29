(function(){
  var en=window.LANG==='en',P=window.ELIUM.projects,id=new URLSearchParams(location.search).get('id'),i=0;
  P.forEach(function(p,k){if(p.id===id)i=k});
  var p=P[i],pv=P[(i+P.length-1)%P.length],nx=P[(i+1)%P.length],nm=function(x){return en?x.en:x.ko};
  document.title=nm(p)+' | '+(en?'Daebang Elium':'대방 엘리움');
  var tp={res:en?'Residential':'공동주택',off:en?'Officetel':'오피스텔',com:en?'Commercial':'상업',"off com":en?'Officetel · Retail':'오피스텔 · 상업시설'}[p.t];
  var h=p.img?'<section class="pp-hero lbg"><img src="img/'+p.img+'.jpg" alt="'+nm(p)+'"></section>':'<section class="pp-hero pn-panel '+(p.c||'p1')+'"><span class="os">'+p.blk+'</span></section>';
  h+='<section class="pp-t"><div><span class="lab">'+tp+'</span><h1>'+nm(p)+'</h1><p class="sub">'+(en?p.rg_en:p.rg_ko)+'</p></div><dl class="meta">'+(en?p.f_en:p.f_ko).map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join('')+'</dl></section>';
  h+='<div class="pp-btn">'+(p.url?'<a class="btn gd" href="'+p.url+'" target="_blank" rel="noopener">'+(en?'Sales site ↗':'분양 홈페이지 ↗')+'</a>':'<span class="note">'+(en?'Sales site to open.':'분양 홈페이지는 준비 중입니다.')+'</span>')+'</div>';
  if(p.img)h+='<p class="note-i">'+(en?'Images are for illustration and may differ from the actual construction.':'이미지는 이해를 돕기 위한 것으로 실제 시공 시 변경될 수 있습니다.')+'</p>';
  var more=P.filter(function(x){return x.id!==p.id}).slice(0,4);
  h+='<section class="more"><span class="lab">Other Projects</span><div class="mg">'+more.map(function(x){return '<a href="project.html?id='+x.id+'">'+(x.img?'<div class="ph"><img src="img/'+x.img+'.jpg" alt="" loading="lazy"></div>':'<div class="ph pn-panel '+(x.c||'p1')+'"><span class="os">'+x.blk+'</span></div>')+'<h3>'+nm(x)+'</h3><p>'+(en?x.rg_en:x.rg_ko)+'</p></a>'}).join('')+'</div></section>';
  h+='<div class="pn"><a href="project.html?id='+pv.id+'"><small>← PREV</small><strong>'+nm(pv)+'</strong></a><a href="project.html?id='+nx.id+'"><small>NEXT →</small><strong>'+nm(nx)+'</strong></a></div>';
  document.getElementById('pp').innerHTML=h;
})();
