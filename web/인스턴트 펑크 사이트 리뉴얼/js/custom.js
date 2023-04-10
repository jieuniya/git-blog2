$(document).ready(function(){

    //popup
    $('div.nav2 h2').click(function(){
        $('div#popup').fadeIn();
    })
    $('div.close').click(function(){
        $('div#popup').fadeOut();
    })

});