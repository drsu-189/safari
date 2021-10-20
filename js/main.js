$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    $('.foto__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ],
        arrows: true,
        rows: 2,
        prevArrow: $('.foto__prev'),
        nextArrow: $('.foto__next')
      });
});

let inputs = document.querySelectorAll('.form__input');

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        if (input.value == '' || input.value == ' ') {
            input.style.border = '1px solid red';
            input.placeholder = 'Введите корректные данные';
        }
    });
});

let button = document.querySelector('.button');
let form = document.querySelector('.promo__form');

button.addEventListener('click', () => {
    form.classList.add('visible');
});

let remove = document.querySelector('.close');

remove.addEventListener('click', () => {
    form.classList.remove('visible');
});
