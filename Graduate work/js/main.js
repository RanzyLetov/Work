(function () {

    // burger

    document.addEventListener('click', burgerInit)

    function burgerInit(event) {
        const burgerIcon = event.target.closest('.burger-icon')
        const burgerNavLink = event.target.closest('.nav__link')
        const burgerNavMenuLink = event.target.closest('.nav-menu__list')

        if (!burgerIcon && !burgerNavLink && !burgerNavMenuLink) return
        if (document.documentElement.clientWidth > 900) return

        if (document.body.classList.contains('body--opened-menu')) {
            document.body.classList.remove('body--opened-menu')
        } else {
            document.body.classList.add('body--opened-menu')
        }

    }


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.hero-slider__next',
            prevEl: '.hero-slider__prev',
        },
    });



})();