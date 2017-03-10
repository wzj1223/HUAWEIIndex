/**
 * Created by Administrator on 2016/9/2.
 */
$("#logo-box .weichat").hover(function(){
    console.log(12);
    $(this).find(".weichat-code").show(500);
},function(){
    $(this).find(".weichat-code").hide(500);
});
$("#nav .navlist li").hover(function(){
   var num=$(this).index();
    $("#nav .nav-cont-wrap li").slideUp();
    $("#nav .nav-cont-wrap li").eq(num).slideDown();
    $(this).find("a").css("cursor","text");
},function(){
    //var num=$(this).index();
    //$("#nav .nav-cont-wrap li").eq(num).slideDown();
});
$("#nav").mouseleave(function(){
    $("#nav .nav-cont-wrap li").slideUp();
})

//new1新闻轮播
var newsTimer=null;
var newPage=0;
var totalnewPage=8;
function clock(){
    newPage++;
    //(newPage>totalnewPage) && (newPage=0);
    if(newPage>totalnewPage){
        newPage=1;
        $("#main ul.swiper-wrapper").css({'transform':'translateY('+(-1)*60*newPage+'px)','transition-duration':'0s'});
    }else{
    $("#main ul.swiper-wrapper").css({'transform':'translateY('+(-1)*60*newPage+'px)','transition-duration':'0.8s'})
    };
}
newsTimer=setInterval(clock,2600);
$("#main ul.swiper-wrapper li").hover(function(){
    clearInterval(newsTimer);
    newsTimer=null;
},function(){
    newsTimer=setInterval(clock,2600);
});

$("#main .mt2 a").click(function(){
  console.log($(this).index());
    if($(this).index()==0){
        newPage--;
        (newPage<0) && (newPage=totalnewPage);
        $("#main ul.swiper-wrapper").css('transform','translateY('+(-1)*60*newPage+'px)');
    }
    if($(this).index()==1){
        newPage++;
        (newPage>totalnewPage) && (newPage=0);
        $("#main ul.swiper-wrapper").css('transform','translateY('+(-1)*60*newPage+'px)');
    }
});




