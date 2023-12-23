$(document).ready(function () {
    $(".div_chevron").click(function () {
        var targetHeight = $(window).height() * 1.2; // 1.2 représente la hauteur en unités de vue (vh)
        $("html, body").animate({
            scrollTop: targetHeight
        }, {
            duration: 1200,
            easing: "easeInOutQuad" // Ajout de l'option easing
        });
    });
});