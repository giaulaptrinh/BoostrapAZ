$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })
    $("#icon-main-menu").click(function() {
        $("ul#menu-respon").slideToggle();
        $("#wp-content").toggleClass("open-menu");
        $("#footer").toggleClass("open-menu-footer");
        $("#copyright").toggleClass("open-menu-copyright");
        return false;
    })
    $(window).resize(function() {
        $("ul.sub-menu").removeClass("open-submenu");
        $("ul#menu-respon").css('display', 'none');
        return false;
    });
    $("i.icon-angle-down").click(function() {
        $("ul.sub-menu").toggleClass("open-submenu");
        $("ul.sub-menu-respon").slideToggle();
        return false;
    })
})