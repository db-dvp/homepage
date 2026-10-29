(function(){
  var L='ko';
  try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='ko')localStorage.setItem('lang',q);L=localStorage.getItem('lang')||'ko'}catch(e){}
  if(L!=='en')L='ko';
  window.LANG=L;document.documentElement.lang=L;
  var btn=document.getElementById('langBtn');
  if(btn){btn.textContent=L==='en'?'KO':'EN';btn.title=L==='en'?'한국어':'English';
    btn.addEventListener('click',function(){try{localStorage.setItem('lang',L==='en'?'ko':'en')}catch(e){}location.reload()})}
  if(L==='en'){
    [].forEach.call(document.querySelectorAll('[data-en]'),function(e){e.innerHTML=e.getAttribute('data-en')});
    [].forEach.call(document.querySelectorAll('[data-en-ph]'),function(e){e.setAttribute('placeholder',e.getAttribute('data-en-ph'))});
  }
  window.T=function(ko,en){return L==='en'?en:ko};
})();
