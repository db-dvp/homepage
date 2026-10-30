/* 메뉴 구조 (아티팩트 레이아웃 기준 5개 메뉴 · 13페이지)
   src: 이 페이지에 합쳐지는 기존 페이지(pages.js 키). 글·사진은 기존 그대로 사용 */
window.IA={
  groups:[
    {id:'company',name:'COMPANY',ko:'회사소개',items:[
      {id:'about',name:'소개',en:'About',src:['company/overview','company/philosophy','company/contact'],stats:true},
      {id:'ceo',name:'CEO 인사말',en:'CEO Message',src:['company/ceo']},
      {id:'history',name:'연혁',en:'History',src:['company/history_a']}]},
    {id:'pr',name:'PR/ESG',ko:'홍보 · ESG',items:[
      {id:'news',name:'뉴스',en:'News',src:['pr/news','pr/media']},
      {id:'esg',name:'ESG 경영',en:'ESG Management',src:['op/quality','op/ethics','op/social','op/winwin','op/safe']}]},
    {id:'brand',name:'BRAND',ko:'브랜드',items:[
      {id:'story',name:'브랜드 스토리',en:'Brand Story',src:['brand/story']},
      {id:'projects',name:'프로젝트',en:'Projects',src:['business/calendar','business/sell','business/order','business/development','business/etc']},
      {id:'daebang',name:'대방 [ ]장',en:'DAEBANG [ ] JANG',src:['business/fnb']},
      {id:'ci',name:'BI/CI',en:'BI / CI',src:['company/ci']}]},
    {id:'career',name:'CAREER',ko:'인재채용',items:[
      {id:'jobs',name:'채용공고',en:'Careers',src:['recruit/recruit','recruit/process','recruit/apply']},
      {id:'benefits',name:'복리후생',en:'HR & Benefits',src:['recruit/system']}]},
    {id:'cs',name:'CUSTOMER',ko:'고객지원',items:[
      {id:'faq',name:'FAQ',en:'FAQ',src:['cs/guide','cs/faq']},
      {id:'as',name:'A/S 문의',en:'A/S & Inquiries',src:['cs/flaw','cs/customer','cs/wish']}]}
  ],
  /* 새로 추가되는 페이지 본문 (기존 홈페이지에 없던 페이지) */
  extra:{
    'brand/story':{title:'브랜드 스토리',en:'Brand Story',hero:'a3',html:
      '<section class="blk"><p class="eb">BRAND STORY</p><h2>집에서 시작해<br>무한한 가능성의 공간으로</h2><p>修身齊家治國平天下</p><p>몸을 닦고 집안을 다스린 뒤에야 나라와 천하를 평안하게 할 수 있다는 옛말처럼, 대방산업개발의 모든 이야기는 한 채의 집에서 시작됩니다. 집은 무한한 가능성을 품고 있기 때문입니다.</p></section>'+
      '<section class="blk"><p class="eb">BRAND VALUE</p><h3>최고의 주거미학과 무한의 가치를 제공하여 고객의 삶을 빛나게 만듭니다.</h3></section>'+
      '<section class="blk"><p class="eb">OUR STORY</p><ol class="tl">'+
        '<li><b>01 집</b><ul><li><i>修身</i><span>한 채의 집에서 시작했습니다. 바른 집 한 채가 바른 삶의 시작이라 믿습니다.</span></li><li><i>2002</i><span>주식회사 세건 설립</span></li><li><i>2011</i><span>대방산업개발(주)로 상호변경</span></li></ul></li>'+
        '<li><b>02 마을</b><ul><li><i>齊家</i><span>집과 집이 이웃이 되고, 이웃이 모여 함께 사는 마을을 이룹니다.</span></li><li><i>2013</i><span>광주 수완 대방노블랜드 6차 준공 (659세대)</span></li><li><i>2014</i><span>양산신도시 대방노블랜드 1차 준공 (1,414세대)</span></li></ul></li>'+
        '<li><b>03 도시</b><ul><li><i>治國</i><span>마을과 마을을 잇는 생활의 풍경이 모여 도시의 얼굴을 만듭니다.</span></li><li><i>2018</i><span>광주전남혁신도시 대방엘리움 1,2차 준공 (765세대)</span></li><li><i>2019</i><span>마곡지구 대방디엠시티 2차 준공 (714세대)</span></li><li><i>2024</i><span>포항 펜타시티 1차, 2차 준공</span></li></ul></li>'+
        '<li><b>04 무한</b><ul><li><i>平天下</i><span>정해진 경계 없이 스스로 만들어 가는 무한의 가치와 가능성. 대방산업개발이 향하는 곳입니다.</span></li><li><i>2024</i><span>국토교통부 발표 시공능력평가 77위 달성</span></li></ul></li>'+
      '</ol></section>'+
      '<section class="blk"><p class="eb">BRAND IDENTITY · 대방 엘리움</p><h2>My Own Elysium</h2><p>엘리시움 혹은 엘리시온 평야(Elysion pedion)는 고대 그리스에서 모두가 머물고 싶은 공간인 영원히 행복한 삶을 누리는 들판을 뜻합니다.</p><p>고대 그리스의 엘리시움에서 유래한 엘리움(elium)은 “My Own Elysium”을 의미합니다. 나만의 공간, 대방 엘리움에서 내가 살고 싶은 삶을 만나보세요.</p></section>'}
  },
  /* 메인에서 옮겨 온 숫자 (소개 페이지) */
  stats:[['설립 2002년부터 현재까지','24','주년'],['사업 영역','5','개'],['대표 브랜드','2','개'],['분양 정보 단지','4','개']],
  statsEn:[['Founded 2002, to date','24','yrs'],['Business areas','5',''],['Key brands','2',''],['Sales info sites','4','']]
};
/* 기존 주소 → 새 페이지 (외부 링크가 끊기지 않도록) */
(function(){
  var m={};
  IA.groups.forEach(function(g){g.items.forEach(function(it){it.src.forEach(function(s){m[s]=g.id+'/'+it.id})})});
  IA.legacy=m;
})();
