$(document).ready(function () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var businessCon = $("#businessCon");
        businessCon.ready(function () {
            var width = businessCon.width();
            businessCon.height(width * 53 / 185);
        });
    }
    var innovateCon_img = $(".innovateCon-img");
    var innovateCon_span = $(".innovateCon span");
    innovateCon_img.load(function () {
        var height = innovateCon_img.height();
        innovateCon_span.height(height / 2.6);
    });
    if (isIE()) {
        $('.header-banner').css('margin-top', "20px");
        $('.header-banner').css('margin-bottom', "20px");
        $('.logo').css('margin-top', "-75px");
        $('.content').css('margin-top', "90px");
    }
});

function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}
$(function () {
    $('li').click(function () {
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active');

    })

    $('.spanRight .show').hover(function () {
        $('.spanRight h5').css('text-align', 'left');
        $('.spanRight').css('background', "rgba(24,44,82,0.5)");
        $('.spanRight h5').css('background', "rgba(24,44,82,0)").animate({'margin-top': '0px'}, 500);
        $('.spanRight .showText').css("display", "block");
    })
    $('.spanRight').mouseleave(function () {
        $('.spanRight h5').css('text-align', 'center');
        $('.spanRight').css('background', "rgba(24,44,82,0)");
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var divh = $("#business").height();
            $('.spanRight h5').animate({'margin-top': divh * 0.431 + 'px'}).css('background', "rgba(24,44,82,0.5)");
        } else {
            $('.spanRight h5').animate({'margin-top':'220px'}).css('background',"rgba(24,44,82,0.5)");
        }
        $('.spanRight .showText').css("display", "none");
    })

    $('.spanLeft .show').hover(function () {
        $('.spanLeft h5').css('text-align', 'left');
        $('.spanLeft').css('background', "rgba(24,44,82,0.5)");
        $('.spanLeft h5').css('background', "rgba(24,44,82,0)").animate({'margin-top': '0px'}, 500);
        $('.spanLeft .showText').css("display", "block");
    })
    $('.spanLeft').mouseleave(function () {
        $('.spanLeft h5').css('text-align', 'center');
        $('.spanLeft').css('background', "rgba(24,44,82,0)");
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var divh = $("#business").height();
            $('.spanLeft h5').animate({'margin-top': divh * 0.431 + 'px'}).css('background', "rgba(24,44,82,0.5)");
        } else {
            $('.spanLeft h5').animate({'margin-top':'220px'}).css('background',"rgba(24,44,82,0.5)");
        }
        $('.spanLeft .showText').css("display", "none");
    })
})
