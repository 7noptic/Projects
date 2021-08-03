import Swiper, {Autoplay, Navigation, Pagination, Thumbs} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);
window.addEventListener('DOMContentLoaded', () => {
    /* SWIPER */

    let sliderBanner = new Swiper('.swiper-banner', {
        slidesPerView: 1,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        autoplay:{
            delay:4000,
        },

        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
    });
    let sliderProject = new Swiper('.swiper-project', {
        slidesPerView: 2,
        initialSlide: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        pagination: {
            el: '.project-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.project-next',
            prevEl: '.project-prev',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 1.5,
            },
            992:{
                slidesPerView: 1.6,
            },
            1400:{
                slidesPerView: 1.7,
            },
            1600:{
                slidesPerView: 2,
            }
        }

    });
    let sliderProcess = new Swiper('.swiper-process', {
        slidesPerView: 4,
        initialSlide: 1,
        spaceBetween: 30,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        navigation: {
            nextEl: '.process-next',
            prevEl: '.process-prev',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
                centeredSlides:true,

            },
            480:{
                centeredSlides:false,
                slidesPerView: 1.5,
            },
            768:{
                slidesPerView: 2,
            },
            992:{
                slidesPerView: 3
            },
            1600:{
                slidesPerView: 4,
            }
        }

    });
    let sliderLetter = new Swiper('.swiper-letter', {
        slidesPerView: 2,
        initialSlide: 1,
        centeredSlides: true,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        pagination: {
            el: '.letter-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.letter-next',
            prevEl: '.letter-prev',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 1.5,
            },
            992:{
                slidesPerView: 1.6,
            },
            1400:{
                slidesPerView: 1.7,
            },
            1600:{
                slidesPerView: 2,
            }
        }

    });
    let sliderClient = new Swiper('.swiper-client', {
        slidesPerView: 4,
        initialSlide: 1,
        spaceBetween: 40,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        pagination: {
            el: '.client-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.client-next',
            prevEl: '.client-prev',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            480:{
                slidesPerView: 2,
            },
            767:{
                slidesPerView: 3,
            },

            1199:{
                slidesPerView: 4,
            }
        }
    });

    let sliderNews = new Swiper('.swiper-article-news', {
        slidesPerView: 2,
        spaceBetween: 120,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination: {
            el: '.article-nav-2',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 120,
            },

        }
    });
    let sliderDesign = new Swiper('.swiper-article-design', {
        slidesPerView: 2,
        spaceBetween: 120,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        pagination: {
            el: '.article-nav-3',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 120,
            },

        }
    });
    let sliderTalk = new Swiper('.swiper-article-talk', {
        slidesPerView: 2,
        spaceBetween: 120,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        pagination: {
            el: '.article-nav-4',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 120,
            },

        }
    });


    let sliderTags = new Swiper('.swiper-tags', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
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
    let sliderTags2 = new Swiper('.swiper-tags-2', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: true,
        navigation: {
            nextEl: '.tags__next-2',
            prevEl: '.tags__prev-2'
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
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        autoplay: true,
        slidesPerView: 4,
        freeMode: true,
        loop: true,
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
    let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});