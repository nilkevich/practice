const btnUp = {
    element: document.querySelector('.go-top'),
    show() {
        this.element.classList.remove('go-top-hide');
    },

    hide() {
        this.element.classList.add('go-top-hide');
    },

    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            scrollY > 400 ? this.show() : this.hide();
        });

        document.querySelector('.go-top').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}

btnUp.addEventListener();