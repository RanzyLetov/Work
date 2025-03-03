
(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(event) {
        const burgerIcon = event.target.closest('.burger-icon')
        const burgerNavLink = event.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (document.body.classList.contains('body--opened-menu')) {
            document.body.classList.remove('body--opened-menu')
        } else {
            document.body.classList.add('body--opened-menu')
        }

    }
})(); 
