document.addEventListener('DOMContentLoaded',function(){

  $('nav a').click(function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });
});