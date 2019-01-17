
$(document).ready(function($) {
   

    $('.login_li').mouseenter(function(e){
        $(this).find('.login_a').stop().slideDown();
    });
    $('.login_li').mouseleave(function(e){
        $(this).find('.login_a').stop().slideUp();
    });

    $('.top .wrap .nav>ul>li').mouseenter(function(event) {
        $(this).find('ol').stop(true).slideDown();
        $(this).siblings('li').find('ol').stop(true).slideUp();
    });
    $('.top .wrap .nav>ul>li').mouseleave(function(event) {
       $(this).find('ol').stop(true).slideUp();
    });


    $('.logo').click(function () {
        window.location.href = 'index.html';
    })
  
    
});
function isHasHttp(str) {
    if(str){
        var str2 = str.substring(0,7);
        if(str2 == 'http://'){
            return true;
        }
        else{
            return false;
        }
    }
}
var base_url = 'http://mtest.wannengxiaoge.com'
var ajax_url =  base_url+'/index/';
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1262393445'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1262393445%26show%3Dpic 'type='text/javascript'%3E%3C/script%3E"));
    $('#cnzz_stat_icon_1262393445').hide();



