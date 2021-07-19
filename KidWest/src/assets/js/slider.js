import Swiper, {Autoplay, Navigation, Pagination, Thumbs} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);
window.addEventListener('DOMContentLoaded', function () {

    let card = document.querySelectorAll('.card');
    if(card){
        for(let i = 0; i < card.length; i++){

            let galleryThumbs = new Swiper(`.gallery-thumbs-${[i]}`, {
                spaceBetween: 10,
                direction: "vertical",
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 4,
                    }
                }
            });
            let galleryTop = new Swiper(`.gallery-top-${[i]}`, {
                spaceBetween: 0,
                navigation: {
                    nextEl: `.card__next-${[i]}`,
                    prevEl: `.card__prev-${[i]}`,
                },
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        }
    }
    /* SWIPER */


    let sliderCert = new Swiper('.swiper-cert', {
        slidesPerView: 3,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,


        navigation: {
            prevEl: '.cert__prev',
            nextEl: '.cert__next'
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            992:{
                slidesPerView: 2,
            },
            1200:{
                slidesPerView: 3,
            }
        }
    });
    let sliderReviews = new Swiper('.swiper-reviews', {
        slidesPerView: 3,
        spaceBetween: 60,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,


        pagination:{
            el: '.reviews-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 2,
            },
            1200:{
                slidesPerView: 3,
            }
        }
    });


    let sliderTags = new Swiper('.swiper-tags', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.tags__next',
            prevEl: '.tags__prev'
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            767: {
                spaceBetween: 15,
            },
            991: {
                spaceBetween: 20,
            }
        }
    });

});