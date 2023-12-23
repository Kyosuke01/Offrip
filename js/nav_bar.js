$.easing.easeInOutQuad = function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

$(document).ready(function () {
    var isNavVisible = false;
    var isAnimating = false;

    $("#nav_burger").click(function () {
        if (isAnimating) {
            return;
        }

        var $navLinks = $(".nav_link");
        var $this = $(this);

        if (!isNavVisible) {
            isAnimating = true;
            $.when(
                $navLinks.css("display", "flex").animate({ marginTop: "0" }, {
                    duration: 500,
                    easing: "easeInOutQuad"
                }),
                $this.toggleClass("active")
            ).done(function () {
                isAnimating = false;
            });
        } else {
            isAnimating = true;
            $.when(
                $navLinks.animate({ marginTop: "-10vh" }, {
                    duration: 500,
                    easing: "easeInOutQuad"
                }),
                $this.toggleClass("active")
            ).done(function () {
                $navLinks.css("display", "none");
                isAnimating = false;
            });
        }

        isNavVisible = !isNavVisible;
    });

    // ADDED

    // Gestionnaire d'événements pour le clic sur l'ensemble du document
    $(document).click(function (event) {
        var $navContainer = $("header");
        var $navBurger = $("#nav_burger");

        // Vérifier si la cible du clic n'est pas dans la barre de navigation
        // ET que la barre de navigation est visible
        // ET que la cible du clic n'est pas un élément de la barre de navigation
        if (
            !$(event.target).closest($navContainer).length &&
            isNavVisible &&
            !$(event.target).closest($navBurger).length
        ) {
            $navBurger.click(); // Simuler un clic sur #nav_burger
        }
    });

    // Gestionnaire d'événements pour le clic sur la barre de navigation
    $("header").click(function (event) {
        // Empêcher la propagation du clic si la barre de navigation est visible
        if (isNavVisible) {
            event.stopPropagation();
        }
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
