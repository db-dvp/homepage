(function(){
  var en=window.LANG==='en',D=window.PAGES,E=window.PAGES_EN;
  var X=[{t:'채용사이트 (대방산업개발)',g:'외부 링크',h:'https://daebang.recruiter.co.kr',x:'채용 지원 입사 recruit careers'},{t:'대방건설',g:'외부 링크',h:'https://www.dbcons.co.kr/',x:'dbcons 대방그룹 E&C'}];
  var XE=[{t:'Careers site (Daebang)',g:'External link',h:'https://daebang.recruiter.co.kr',x:'recruit apply jobs'},{t:'Daebang E&C',g:'External link',h:'https://www.dbcons.co.kr/',x:'dbcons group'}];
  var idx=null;
  function txt(h){var d=document.createElement('div');d.innerHTML=h.replace(/<\/(p|li|dd|dt|h\d|div|span|summary|strong|em|b)>/g,'$& ');return (d.textContent||'').replace(/\s+/g,' ').trim()}
  function build(){
    idx=[];
    Object.keys(D.pages).forEach(function(k){
      var p=D.pages[k],s=k.split('/'),use=en&&E.pages[k],gg=G(s[0]);
      idx.push({t:en?E.groups[s[0]][1][s[1]]:p.title,g:en?E.groups[s[0]][0]:p.group,h:'sub.html?p='+k,x:txt(use?E.pages[k]:p.html)});
    });
    (en?XE:X).forEach(function(o){idx.push({t:o.t,g:o.g,h:o.h,x:o.x,ext:1})});
  }
  function G(){}
  function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
  var el=document.createElement('div');el.className='srch';el.setAttribute('aria-hidden','true');
  el.innerHTML='<button class="srch-x" aria-label="'+(en?'Close':'닫기')+'"></button><div class="srch-in"><div class="srch-box"><input type="text" autocomplete="off" placeholder="'+(en?'Search this site':'검색어를 입력하세요')+'"></div><div class="srch-tags"></div><p class="srch-cnt"></p><div class="srch-res"></div></div>';
  document.body.appendChild(el);
  var inp=el.querySelector('input'),res=el.querySelector('.srch-res'),cnt=el.querySelector('.srch-cnt'),tags=el.querySelector('.srch-tags');
  (en?['sales','careers','defect','location','safety','Elium']:['분양','채용','하자','오시는 길','안전','엘리움']).forEach(function(k){
    var b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=function(){inp.value=k;run()};tags.appendChild(b)});
  function run(){
    if(!idx)build();
    var q=inp.value.trim().toLowerCase();
    if(!q){res.innerHTML='';cnt.textContent='';return}
    var tk=q.split(/\s+/),out=[];
    idx.forEach(function(it){
      var tl=it.t.toLowerCase(),xl=it.x.toLowerCase(),sc=0;
      for(var i=0;i<tk.length;i++){var a=tl.indexOf(tk[i])>-1,b=xl.indexOf(tk[i])>-1;if(!a&&!b&&it.g.toLowerCase().indexOf(tk[i])<0)return;sc+=a?20:0;if(b)sc+=Math.min(10,xl.split(tk[i]).length-1)}
      var pos=xl.indexOf(tk[0]),sn=pos>-1?it.x.slice(Math.max(0,pos-40),pos+90):it.x.slice(0,100);
      out.push({it:it,sc:sc,sn:(pos>40?'…':'')+sn});
    });
    out.sort(function(a,b){return b.sc-a.sc});
    cnt.textContent=en?out.length+' result(s)':'검색결과 '+out.length+'건';
    var re=new RegExp('('+tk.map(rx).join('|')+')','ig');
    res.innerHTML=out.slice(0,30).map(function(o){
      return '<a href="'+o.it.h+'"'+(o.it.ext?' target="_blank" rel="noopener"':'')+'><small>'+esc(o.it.g)+'</small><b>'+esc(o.it.t).replace(re,'<mark>$1</mark>')+'</b><p>'+esc(o.sn).replace(re,'<mark>$1</mark>')+'</p></a>'}).join('');
  }
  function open(o){el.classList.toggle('on',o);el.setAttribute('aria-hidden',String(!o));document.body.style.overflow=o?'hidden':'';if(o){setTimeout(function(){inp.focus()},50)}}
  inp.addEventListener('input',run);
  inp.addEventListener('keydown',function(e){if(e.key==='Enter'){var a=res.querySelector('a');if(a)location.href=a.href}});
  el.querySelector('.srch-x').onclick=function(){open(false)};
  document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
  var b=document.getElementById('srchBtn');if(b)b.addEventListener('click',function(){open(true)});
  res.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&!a.target)open(false)});
})();
