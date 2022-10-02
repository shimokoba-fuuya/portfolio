jQuery(window).on('scroll', function() {
    if (100 < jQuery(this).scrollTop()) {
        jQuery('.menuback').addClass('.change-color');
    } else {
        jQuery('.menuBack').removeClass('.change-color');
    }
});
$(".line").animate({ "width": "100%" }, 3500, function() {
    $(".line").css("right", 0);
    $(".line").animate({ "width": "0%" }, function() {
        $(".up").animate({ "height": "0%" });
    });
});
$(".Yline").animate({ "height": "100%" }, 3300, function() {
    $(".Yline").css("bottom", 0);
    $(".Yline").animate({ "height": "0%" });
});
$(".").animate({ "height": "100%" }, 3300, function() {
    $(".Xline").css("bottom", 0);
    $(".Xline").animate({ "height": "0%" });
});
$(function() {
    setTimeout(function() {
        $('.fadeIn ').fadeIn(1600);
    }, 2500);
    setTimeout(function() {
        $('.fadeout').fadeOut(1500);
    }, 2500);
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    dots: true,
    arrows: true,
    infinite: true,
    pauseOnHover: true,
});

$(function() {
    var $header = $("header"),
        animationClass = "is-animation";

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 100) {
            $header.addclass(animationClass);
        } else {
            $header.removeClass(animationClass);
        }
    });
});