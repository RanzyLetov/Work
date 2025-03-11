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

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button') 

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(event) {
        event.preventDefault()
        document.body.classList.toggle('body__modal-open')
    }
    function closeModal(event) {
        event.preventDefault()

        const target = event.target

        if (target.closest('.modal__cansel') || target.classList.contains('modal')) {
            document.body.classList.remove('body__modal-open')
        }
    }
})(); 

