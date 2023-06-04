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


    //========= ANIMATION =========//
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeigth = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if (revealTop < windowHeigth - revealPoint) {
                reveals[i].classList.add('active')
            } else {
                reveals[i].classList.remove('active')
            }
        }
    }
    // ======== DROPDOWN MENU ===========//
    const toggleBtn = document.querySelector('.toggle-btn'),
        toggleBtnIcon = document.querySelector('.toggle-btn i'),
        dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');

        var isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars-staggered'
    }



})

