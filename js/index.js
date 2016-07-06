
/*alert($(window).height()); //浏览器时下窗口可视区域高度
alert($(document).height()); //浏览器时下窗口文档的高度
alert($(document.body).height());//浏览器时下窗口文档body的高度
alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin
alert($(window).width()); //浏览器时下窗口可视区域宽度
alert($(document).width());//浏览器时下窗口文档对于象宽度
alert($(document.body).width());//浏览器时下窗口文档body的高度
alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin

alert($(document).scrollTop()); //获取滚动条到顶部的垂直高度
alert($(document).scrollLeft()); //获取滚动条到左边的垂直宽度*/
    var section_header_h=$(window).height()-50;
    $(".section-header").css("height",section_header_h+"px");

$(window).scroll(function () {
    //if($(document).scrollTop()>=($(window).height()-50)){
    //    $(".navbar-fixed-top").css({
    //        "background":"#f8f8f8;",
    //        "border-bottom":"1px solid #e7e7e7"
    //    });
    //}else {
    //    $(".navbar-fixed-top").css({
    //        "background":"transparent",
    //        "border-bottom":"1px solid #e7e7e7"
    //    });
    //}
    //console.log($(document).scrollTop()>=($(window).height()-50))
});
