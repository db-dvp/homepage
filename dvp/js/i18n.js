(function(){
  var L='ko';
  try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='ko')localStorage.setItem('lang',q);L=localStorage.getItem('lang')||'ko'}catch(e){}
  if(L!=='en')L='ko';
  window.LANG=L;document.documentElement.lang=L;if(L==='en')document.documentElement.classList.add('en');
  var btn=document.getElementById('langBtn');
  if(btn){btn.textContent=L==='en'?'KO':'EN';btn.title=L==='en'?'한국어':'English';
    btn.addEventListener('click',function(){try{localStorage.setItem('lang',L==='en'?'ko':'en')}catch(e){}location.reload()})}
  if(L!=='en')return;
  var G=window.PAGES_EN.groups,order=['company','business','op','pr','recruit','cs'];
  var T={'본문으로 건너뛰기':'Skip to content','설립':'Founded','2002년부터':'Since 2002','현재까지':'to date','사업':'Business','영역':'areas','대표':'Key','브랜드':'brands','분양':'Sales','정보':'info','단지':'sites','주년':'yrs','개':'',
   '개인정보처리방침':'Privacy Policy','이용약관':'Terms of Use','이메일무단수집거부':'No Email Harvesting','고객문의':'Contact','인재채용':'Careers','개인정보 처리방침':'Privacy Policy','바로가기':'Go','CI / BI 소개':'CI / BI','분양 캘린더':'Sales Calendar','채용 공고':'Job Openings','TOP':'TOP'};
  // menus
  [].forEach.call(document.querySelectorAll('a[href^="sub.html?p="]'),function(a){
    var m=a.getAttribute('href').split('p=')[1]; if(!m)return; var s=m.split('/'),g=G[s[0]];if(!g)return;
    var inSub=a.closest('.sub')||a.closest('.full dd')||a.closest('.sub-tab');
    if(a.children.length)return;
    if(inSub&&g[1][s[1]])a.textContent=g[1][s[1]]; else if(!inSub&&a.parentNode.tagName==='LI'&&a.nextElementSibling&&a.nextElementSibling.classList.contains('sub'))a.textContent=g[0];
    else if(a.closest('.f-links')){a.textContent=T[a.textContent.trim()]||a.textContent}
  });
  [].forEach.call(document.querySelectorAll('.full dt'),function(d,i){if(order[i])d.textContent=G[order[i]][0]});
  // data-en overrides
  [].forEach.call(document.querySelectorAll('[data-en]'),function(e){e.innerHTML=e.getAttribute('data-en')});
  [].forEach.call(document.querySelectorAll('[data-en-aria]'),function(e){e.setAttribute('aria-label',e.getAttribute('data-en-aria'))});
  // text nodes
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,list=[];
  while(n=w.nextNode())list.push(n);
  list.forEach(function(n){
    if(n.parentNode.closest&&n.parentNode.closest('#body,.news-cards,.srch'))return;
    var t=n.nodeValue.trim();if(t&&T[t]!==undefined)n.nodeValue=n.nodeValue.replace(t,T[t]);
  });
  var lg=document.querySelector('.f-logo');if(lg)lg.alt='Daebang Industrial Development';
})();
