(function(){
  var en=window.LANG==='en',P=window.ELIUM.projects;
  var base=(document.documentElement.getAttribute('data-base')||'');
  var idx=[];
  P.forEach(function(p){idx.push({t:en?p.en:p.ko,g:en?'Projects':'프로젝트',s:(en?p.rg_en:p.rg_ko)+' '+(en?p.sub_en:p.sub_ko),h:base+'project.html?id='+p.id,x:p.ko+' '+p.en+' '+p.rg_ko+' '+p.sub_ko})});
  [{t:'Brand',tk:'브랜드',g:'Elysium',h:'index.html#brand',x:'엘리시온 elysion elysium 당신만의 공간 your own'},
   {t:'Identity',tk:'브랜드 아이덴티티',g:'BI',h:'identity.html',x:'색상 로고 deep blue gold beige pink color logo bi 다운로드 download'},
   {t:en?'Contact':'문의',tk:'문의',g:en?'Contact':'문의',h:'index.html#contact',x:'대방산업개발 daebang industrial development 서울 문의 contact'}].forEach(function(o){idx.push({t:en?o.t:o.tk,g:o.g,s:'',h:base+o.h,x:o.x})});
  var el=document.createElement('div');el.className='srch';el.setAttribute('aria-hidden','true');
  el.innerHTML='<button class="srch-x" aria-label="Close"></button><div class="srch-in"><input type="text" autocomplete="off" placeholder="'+(en?'Search':'검색어를 입력하세요')+'"><div class="srch-tags"></div><p class="srch-cnt"></p><div class="srch-res"></div></div>';
  document.body.appendChild(el);
  var inp=el.querySelector('input'),res=el.querySelector('.srch-res'),cnt=el.querySelector('.srch-cnt'),tags=el.querySelector('.srch-tags');
  (en?['Busan','Dongtan','Pohang','Naepo','Officetel','Logo']:['부산','동탄','포항','내포','오피스텔','로고']).forEach(function(k){var b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=function(){inp.value=k;run()};tags.appendChild(b)});
  function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function run(){
    var q=inp.value.trim().toLowerCase();if(!q){res.innerHTML='';cnt.textContent='';return}
    var tk=q.split(/\s+/),out=[];
    idx.forEach(function(it){var tl=it.t.toLowerCase(),xl=(it.x+' '+it.s+' '+it.g).toLowerCase(),sc=0;
      for(var i=0;i<tk.length;i++){var a=tl.indexOf(tk[i])>-1,b=xl.indexOf(tk[i])>-1;if(!a&&!b){sc=0;break}sc+=a?3:1}
      if(sc)out.push([sc,it])});
    out.sort(function(a,b){return b[0]-a[0]});
    cnt.textContent=out.length?(en?out.length+' results':out.length+'건'):(en?'No results':'검색 결과가 없습니다');
    res.innerHTML=out.map(function(o){var it=o[1];return '<a href="'+it.h+'"><em>'+esc(it.g)+'</em><strong>'+esc(it.t)+'</strong><span>'+esc(it.s)+'</span></a>'}).join('');
  }
  function open(){el.classList.add('on');el.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(function(){inp.focus()},50)}
  function close(){el.classList.remove('on');el.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  inp.addEventListener('input',run);el.querySelector('.srch-x').onclick=close;
  el.addEventListener('click',function(e){if(e.target===el)close();if(e.target.closest&&e.target.closest('.srch-res a'))close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  var sb=document.getElementById('srchBtn');if(sb)sb.onclick=open;
})();
