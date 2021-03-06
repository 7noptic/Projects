import Swiper, {Autoplay, Navigation, Pagination, Thumbs} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);
window.addEventListener('DOMContentLoaded', () => {
    /* SWIPER */

    let sliderLetter = new Swiper('.swiper-letter', {
        slidesPerView: 4,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.letter__next',
            prevEl: '.letter__prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

    let sliderPartners = new Swiper('.swiper-partners', {
        slidesPerView: 2,
        spaceBetween: 30,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });


    let sliderArticle = new Swiper('.swiper-article', {
        slidesPerView: 2,
        spaceBetween: 30,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.article__next-1',
            prevEl: '.article__prev-1'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            }
        }
    });

    let sliderArticle2 = new Swiper('.swiper-article-2', {
        slidesPerView: 2,
        spaceBetween: 30,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.article__next-2',
            prevEl: '.article__prev-2'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            }
        }
    });

    let sliderArticle3 = new Swiper('.swiper-article-3', {
        slidesPerView: 2,
        spaceBetween: 30,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.article__next-3',
            prevEl: '.article__prev-3'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
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
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        autoplay: true,
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
    let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        autoplay: true,
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});