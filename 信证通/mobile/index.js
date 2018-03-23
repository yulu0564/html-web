$(document).ready(function () {
    var businessCon = $("#businessCon");
    businessCon.ready(function () {
        var width = businessCon.width();
        businessCon.height(width * 53 / 185);
    });
    var innovateCon_img = $(".innovateCon-img");
    var innovateCon_span = $(".innovateCon span");
    innovateCon_img.load(function () {
        var height = innovateCon_img.height();
        innovateCon_span.height(height / 2.8);
    });
});

$(function () {
    $('li').click(function () {
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active');

    })

    $('.show').hover(function () {
        $('.spanRight').css('background', "rgba(24,44,82,0.5)");
        $('.spanRight h5').css('background', "rgba(24,44,82,0)").animate({'margin-top': '0px'}, 500);
        $('.showText').css("display", "block");
    })
    $('.spanRight').mouseleave(function () {
        $('.spanRight').css('background', "rgba(24,44,82,0)");
        var divh = $("#business").height();
        $('.spanRight h5').animate({'margin-top': divh * 0.461 + 'px'}).css('background', "rgba(24,44,82,0.5)");
        $('.showText').css("display", "none");
    })
})
