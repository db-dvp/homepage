(function(){
  var box=document.createElement('div');box.className='lb';box.setAttribute('aria-hidden','true');
  box.innerHTML='<button class="lb-x" aria-label="Close"></button><button class="lb-p" aria-label="Prev"></button><button class="lb-n" aria-label="Next"></button><figure><img alt=""></figure><span class="lb-c"></span>';
  document.body.appendChild(box);
  var im=box.querySelector('img'),cnt=box.querySelector('.lb-c'),list=[],cur=0,sx=0;
  function show(i){cur=(i+list.length)%list.length;im.src=list[cur].currentSrc||list[cur].src;cnt.textContent=(cur+1)+' / '+list.length;box.classList.toggle('single',list.length<2)}
  function open(i){box.classList.add('on');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';show(i)}
  function close(){box.classList.remove('on');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  document.addEventListener('click',function(e){
    var t=e.target;if(t.tagName!=='IMG')return;
    var g=t.closest('.gallery,.lbg');if(!g)return;
    list=[].slice.call(g.querySelectorAll('img'));open(list.indexOf(t));
  });
  box.querySelector('.lb-x').onclick=close;
  box.querySelector('.lb-p').onclick=function(e){e.stopPropagation();show(cur-1)};
  box.querySelector('.lb-n').onclick=function(e){e.stopPropagation();show(cur+1)};
  box.addEventListener('click',function(e){if(e.target===box||e.target.tagName==='FIGURE')close()});
  document.addEventListener('keydown',function(e){if(!box.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  box.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  box.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
})();
