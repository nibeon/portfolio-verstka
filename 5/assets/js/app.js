$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if (scroll > 100) {
        $("#mobile").css("display", "block");
    } else {
        $("#mobile").css("display", "none");
    }
});

$("a.left-menu").click(function (event){
    $("ul.mobile-menu").toggle();
});