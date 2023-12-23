$.easing.easeInOutQuad = function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

$(document).ready(function () {
    var isNavVisible = false;
    var isAnimating = false; // Ajout de la variable de verrouillage

    $("#nav_burger").click(function () {
        // Vérifier si l'animation est en cours
        if (isAnimating) {
            return;
        }

        var $navLinks = $(".nav_link");
        var $this = $(this); // Stocker la référence à $(this)

        if (!isNavVisible) {
            // Si la barre de navigation n'est pas visible, l'animer vers le haut
            isAnimating = true; // Verrouiller l'animation
            $.when(
                $navLinks.css("display", "flex").animate({ marginTop: "0" }, {
                    duration: 500,
                    easing: "easeInOutQuad"
                }),
                $this.toggleClass("active") // Ajouter ou supprimer la classe "active"
            ).done(function () {
                isAnimating = false; // Déverrouiller l'animation après la fin
            });
        } else {
            // Si la barre de navigation est visible, l'animer vers le bas
            isAnimating = true; // Verrouiller l'animation
            $.when(
                $navLinks.animate({ marginTop: "-10vh" }, {
                    duration: 500,
                    easing: "easeInOutQuad"
                }),
                $this.toggleClass("active") // Ajouter ou supprimer la classe "active"
            ).done(function () {
                $navLinks.css("display", "none");
                isAnimating = false; // Déverrouiller l'animation après la fin
            });
        }

        // Inverser l'état de visibilité
        isNavVisible = !isNavVisible;
    });
});

$(document).ready(function () {
    $(".nav_link a").mouseover(function () {
        var currentOpacity = $(this).css("opacity");
        $(".nav_link a").not(this).css("opacity", currentOpacity * 0.5);
    });

    $(".nav_link a").mouseout(function () {
        $(".nav_link a").css("opacity", 1);
    });
});
