(function(){
  var p=location.pathname,cur=p.indexOf('/elium/')>-1?'eli':(/business\/fnb/.test(location.search)?'jang':'dvp'),L='ko';
  try{L=localStorage.getItem('lang')==='en'?'en':'ko'}catch(e){}
  var T={ko:{home:'첫 화면',dvp:'대방산업개발',eli:'대방 엘리움',jang:'대방장'},en:{home:'Home',dvp:'Daebang Industrial Dev.',eli:'Daebang Elium',jang:'Daebangjang'}}[L];
  var sub=/sub\.html/.test(p),th=cur==='eli'?{bg:'#191d47',fg:'rgba(255,255,255,.7)',on:'#fff',ln:'rgba(255,255,255,.16)',ac:'#D5A67D'}
   :sub?(cur==='jang'?{bg:'#f6f1e9',fg:'rgba(42,32,24,.62)',on:'#2a2018',ln:'rgba(42,32,24,.14)',ac:'#B08A5B'}:{bg:'#f1f4f9',fg:'rgba(12,33,70,.6)',on:'#0c2146',ln:'rgba(12,33,70,.14)',ac:'#2b8fd0'})
   :{bg:'#0c2146',fg:'rgba(255,255,255,.7)',on:'#fff',ln:'rgba(255,255,255,.16)',ac:'#2b8fd0'};
  var s=document.createElement('style');
  s.textContent='.gnav{position:fixed;top:0;left:0;right:0;z-index:250;height:30px;display:flex;align-items:stretch;background:'+th.bg+';font:400 12px/30px "Noto Sans KR",sans-serif;letter-spacing:-.02em'+(sub?';border-bottom:1px solid '+th.ln:'')+'}'
   +'.gnav a{color:'+th.fg+';padding:0 14px;text-decoration:none;white-space:nowrap}'
   +'.gnav a+a{border-left:1px solid '+th.ln+'}'
   +'.gnav a.on{color:'+th.on+';font-weight:500;box-shadow:inset 0 -2px 0 '+th.ac+'}'
   +'.gnav a.home{padding:0 12px}.header,.hd{top:30px!important}'
   +'@media(max-width:560px){.gnav{font-size:11px}.gnav a{padding:0 9px}}';
  document.head.appendChild(s);
  var base=p.replace(/\/(dvp|elium)\/.*$/,'/').replace(/\/[^\/]*$/,function(m){return m.indexOf('.')>-1?'/':m});
  var n=document.createElement('nav');n.className='gnav';n.setAttribute('aria-label','site switcher');
  n.innerHTML='<a class="home" href="'+base+'">← '+T.home+'</a><a class="'+(cur==='dvp'?'on':'')+'" href="'+base+'dvp/">'+T.dvp+'</a><a class="'+(cur==='eli'?'on':'')+'" href="'+base+'elium/">'+T.eli+'</a><a class="'+(cur==='jang'?'on':'')+'" href="'+base+'dvp/sub.html?p=business/fnb">'+T.jang+'</a>';
  document.body.appendChild(n);
})();
