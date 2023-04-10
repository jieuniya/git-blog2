$(document).ready(function(){

  //주 메뉴 클릭시 자동으로 해당 section으로 이동
  $('ul.gnb li').click(function(e){
    e.preventDefault();

    //ht에 window 높이값 저장
    let ht = $(window).height();
    //변수 i에 현재 클릭한 li 순서 값을 저장
    let i = $(this).index();
    // console.log(i);
    //브라우저의 높이값 * 순서값 = 현재 박스의 위치값
    let nowTop = i*ht;
    // console.log(nowTop);
    //해당 스크롤의 위치 값으로 문서를 이동
    $('html,body').stop().animate({scrollTop:nowTop},1400);
  });

  //스크롤 될 때마다 해당 메뉴 활성화
  $(window).scroll(function(){
    //ht에 window 높이값 저장
    let ht = $(window).height();
    //scroll에 현재 문서가 스크롤된 거리 저장
    let scroll = $(window).scrollTop();

    for (let i=0; i<5; i++) {
      if (scroll >= ht*i && scroll < ht*(i+1)) {
        $('ul.gnb li').removeClass();
        $('ul.gnb li').eq(i).addClass('on');
      }
    }
  });

  $('ul.gnb li').click(function(e){
    let idx = $('ul.gnb li').index(this);
    $('div#fp-nav ul li').children('a').removeClass();
    $('div#fp-nav ul li').stop().children('a').eq(idx).addClass('active');
  });

// 팝업창
  $('div.maincont1').click(function(){
    $('div#popup').fadeIn();
  })
  $('div#popup').click(function(){
    $('div#popup').fadeOut();
  })

  $('div.maincont2').click(function(){
    $('div#popup2').fadeIn();
  })
  $('div#popup2').click(function(){
    $('div#popup2').fadeOut();
  })


});