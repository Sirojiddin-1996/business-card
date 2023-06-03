window.addEventListener('DOMContentLoaded', () => {

    //    =========SLIDER=========   //
    const slides = document.querySelectorAll('.offer_slider'),
        next = document.querySelector('.offer_slider-next'),
        prev = document.querySelector('.offer_slider-prev'),
        slidesWrapper = document.querySelector('.offer_slider-wrapper'),
        slidesField = document.querySelector('.offer_slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;



    let slidIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex'
    slidesField.style.transition = '.5s ease all'
    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = width
    })

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0
        }
        else {
            offset += +width.slice(0, width.length - 2)
        }

        slidesField.style.transform = `translateX(-${offset}px)`
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })

})
