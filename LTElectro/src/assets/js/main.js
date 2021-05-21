'use script';
import Swiper, {Autoplay, Navigation, Pagination, Thumbs} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);


window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    /* HAMBURGER MENU IN HEADER*/
    let header = document.querySelector('.header'),
        html = document.querySelector('html'),
        body = document.querySelector('body'),
        main = document.querySelector('main'),
        footer = document.querySelector('.footer'),
        searchForm = header.querySelector('.form-wrapper-header'),
        hamburgerBtn = header.querySelector('.js-burger'),
        hamburgerMenu = header.querySelector('.hamburger-menu');


    header.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('js-burger')) {
            hamburgerMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        }
        if (e.target && e.target.classList.contains('js-search')) {
            searchForm.classList.toggle('active');
        }
    });
    /*BUTTON READMORE
    new Readmore('.category-tags', {
        speed: 150,
        collapsedHeight: 192,
        moreLink: '<a href="#" class="btn btn-blueborder category-tags__btn">Показать еще</a>',
        lessLink: '<a href="#" class="btn btn-blueborder category-tags__btn">Скрыть</a>',
    });*/
    /* MODAL */
    let modalBlock = document.querySelector('.js-sidebars'),
        allModal = document.querySelectorAll('.js-sidebars > section'),
        modalCall = document.querySelector('.modal-call'),
        modalFaq = document.querySelector('.modal-faq'),
        modalQuest = document.querySelector('.modal-quest'),
        modalRegion = document.querySelector('.modal-region'),
        modalOneClick = document.querySelector('.modal-one-click'),
        modalAssortment = document.querySelector('.modal-assortment'),
        modalJob = document.querySelector('.modal-job'),
        modalPersonal = document.querySelector('.modal-personal'),
        modalResetPass = document.querySelector('.modal-reset-pass'),
        modalSubscribe = document.querySelector('.modal-subscribe'),
        modalReviews = document.querySelector('.modal-reviews'),
        modalBasket = document.querySelector('.modal-basket'),
        regionSelect = document.querySelectorAll('.modal-region__link'),
        regionBtn = document.querySelector('.js-region-city'),
        burgerMenu = document.querySelector('.adaptive-menu');

    if (localStorage.getItem('city') != null) {
        regionBtn.innerHTML = localStorage.getItem('city');
    } else {
        regionBtn.innerHTML = 'Москва';
    }
    document.addEventListener('click', e => {

        let target = e.target;

        if (target && (target.classList.contains('js-call') || target.classList.contains('modal-call__exit'))) {
            openCloseModal(e, modalCall);
        }
        if (target && (target.classList.contains('js-faq') || target.classList.contains('modal-faq__exit'))) {
            openCloseModal(e, modalFaq);
        }
        if (target && (target.classList.contains('js-reviews') || target.classList.contains('modal-reviews__exit'))) {
            openCloseModal(e, modalReviews);
        }
        if (target && (target.classList.contains('js-basket') || target.classList.contains('modal-basket__exit'))) {
            openCloseModal(e, modalBasket);


        }
        if (target && (target.classList.contains('js-modal-header') || target.classList.contains('adaptive-menu__exit'))) {
            openCloseModal(e, burgerMenu);
        }
        if (target && (target.classList.contains('js-one-click') || target.classList.contains('modal-one-click__exit') || target.classList.contains('js-product-one-click'))) {
            openCloseModal(e, modalOneClick);
        }

        if (target && (target.classList.contains('js-job') || target.classList.contains('modal-job__exit'))) {
            openCloseModal(e, modalJob);
        }
        if (target && (target.classList.contains('js-subscribe') || target.classList.contains('modal-subscribe__exit'))) {
            openCloseModal(e, modalSubscribe);
        }
        if (target && (target.classList.contains('js-assortment') || target.classList.contains('modal-assortment__exit'))) {
            openCloseModal(e, modalAssortment);
        }
        if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
            openCloseModal(e, modalRegion);
        }
        if (target && (target.classList.contains('js-quest') || target.classList.contains('modal-quest__exit'))) {
            openCloseModal(e, modalQuest);
        }
        if (target && (target.classList.contains('js-personal-data') || target.classList.contains('modal-personal__exit'))) {
            openCloseModal(e, modalPersonal);
        }
        if (target && (target.classList.contains('js-reset-pass') || target.classList.contains('modal-reset-pass__exit'))) {
            openCloseModal(e, modalResetPass);
        }
        if (target.classList.contains('modal-region__link')) {
            for (let i = 0; i < regionSelect.length; i++) {
                if (regionSelect[i] == target) {
                    let citiValue = regionSelect[i].innerHTML;
                    localStorage.setItem('city', citiValue)
                    let testValue = localStorage.getItem('city')
                    if (testValue == 'undifiend') {
                        regionBtn.innerHTML = 'Москва';
                    } else {
                        regionBtn.innerHTML = testValue.innerHTML;
                        regionBtn.innerHTML = testValue;
                    }

                }
            }

            openCloseModal(e, modalRegion);
        } else if (target.classList.contains('js-region-close')) {
            let city = document.querySelector('.js-select-city');
            localStorage.setItem('city', city.innerHTML);
            let testValue = localStorage.getItem('city');
            regionBtn.innerHTML = testValue;
            openCloseModal(e, modalRegion);
        }


        /* ЗАКРЫТИЕ ПО КЛИКУ НА САЙДБАР */
        if (target && target.classList.contains('sidebar-bg')) {
            e.preventDefault();
            html.classList.toggle('lock');
            body.classList.toggle('lock');
            modalBlock.classList.toggle('sidebar-bg');
            for (let i = 0; i < allModal.length; i++) {
                if (allModal[i].classList.toggle('active')) {
                    allModal[i].classList.remove('active');
                }
            }
            header.classList.toggle('blur');
            main.classList.toggle('blur');
            footer.classList.toggle('blur');

        }

    });

    function openCloseModal(e, modal) {
        e.preventDefault();
        html.classList.toggle('lock');
        body.classList.toggle('lock');
        modalBlock.classList.toggle('sidebar-bg');
        modal.classList.toggle('active');
        header.classList.toggle('blur');
        main.classList.toggle('blur');
        footer.classList.toggle('blur');
    }

    /* TABS */
    let storeParent = document.querySelector('.store'),
        storeLink = document.querySelectorAll('.js-store-link'),
        storeTab = document.querySelectorAll('.js-store-tab'),
        reviewParent = document.querySelector('.review-block'),
        reviewLink = document.querySelectorAll('.js-review-link'),
        reviewTab = document.querySelectorAll('.js-review-tab'),
        articleParent = document.querySelector('.article-block'),
        articleLink = document.querySelectorAll('.js-article-link'),
        articleTab = document.querySelectorAll('.js-article-tab');

    if (storeParent && storeLink.length > 0) {
        toggleTabs(storeLink, storeTab, storeParent, 'js-store-link', true, '.js-store-sublink', '.js-store-subtab');
    }
    if (reviewParent && reviewLink.length > 0) {
        toggleTabs(reviewLink, reviewTab, reviewParent, 'js-review-link');
    }
    if (articleParent && articleLink.length > 0) {
        toggleTabs(articleLink, articleTab, articleParent, 'js-article-link');
    }


    function toggleTabs(link, tabs, parent, classContains, subTabs, subLink, subContent) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);

        let subIndex = 0;
        let trigger = false;
        if (subTabs) {
            let subLinks = tabs[subIndex].querySelectorAll(subLink),
                subTabs = tabs[subIndex].querySelectorAll(subContent);
            hideTabs(subLinks, subTabs);
            showTabs(0, subLinks, subTabs);
            trigger = true;
        }
        parent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(classContains)) {
                e.preventDefault();
                if (trigger) {
                    subTabs = true;
                }

                for (let i = 0; i < link.length; i++) {
                    if (link[i] === e.target) {
                        hideTabs(link, tabs);
                        showTabs(i, link, tabs);
                        if (subTabs) {
                            let subLinks = tabs[i].querySelectorAll(subLink),
                                subTabs = tabs[i].querySelectorAll(subContent);
                            hideTabs(subLinks, subTabs);
                            showTabs(0, subLinks, subTabs);
                            subIndex = i;
                        }
                    }
                }
            }
            let subLinks = tabs[subIndex].querySelectorAll(subLink),
                subTabs = tabs[subIndex].querySelectorAll(subContent);
            if (e.target && e.target.classList.contains('js-store-sublink')) {
                e.preventDefault();
                for (let i = 0; i < subLinks.length; i++) {
                    if (subLinks[i] === e.target) {
                        hideTabs(subLinks, subTabs);
                        showTabs(i, subLinks, subTabs);
                    }
                }
            }
        });
    }

    function showTabs(i = 0, link, content) {
        link[i].classList.add('active');
        content[i].classList.add('active');
    }

    function hideTabs(link, content) {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('active');
        }
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
        }
    }


    /* SHOW HIDE CONTENT */

    let filterItem = document.querySelectorAll('.category-filter'),
        filterLink = document.querySelectorAll('.category-filter__header'),
        filterContent = document.querySelectorAll('.category-filter__content'),
        categoryBtn = document.querySelectorAll('.category-filter__btn'),
        categoryContent = document.querySelectorAll('.category-filter__wrapper');
    if (filterLink.length > 0) {

        toggleContent(filterLink, filterContent, 'category-filter__header');
    }

    if (categoryBtn.length > 0) {
        toggleContent(categoryBtn, categoryContent, 'category-filter__btn');
    }

    function toggleContent(link, content, linkClass) {

        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();

                for (let i = 0; i < link.length; i++) {
                    if (e.target == link[i]) {
                        link[i].classList.toggle('active');
                        content[i].classList.toggle('active');
                    }
                }
            }
        });
    }

    /* MORE BTN */
    let brandsLink = document.querySelector('.js-brands-more'),
        brandsItems = document.querySelectorAll('.brands-item.hidden'),
        trigger = true;

    if (brandsItems.length > 0) {
        showMore(brandsItems, brandsLink, 'js-brands-more');
    }

    function showMore(items, link, linkClass, text) {

        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.toggle('active');
                    items[i].classList.toggle('animation-r-to-l');
                    if (trigger) {
                        link.innerHTML = 'Скрыть';
                        trigger = false;
                    } else {
                        link.innerHTML = 'Показать ещё';
                        trigger = true;
                    }
                }
            }
        });
    }

    /* SWIPER */
    let sliderBanner = new Swiper('.swiper-banner', {
        slidesPerView: 1,
        spaceBetween: 0,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


    });

    let sliderArticle = new Swiper('.swiper-article', {
        slidesPerView: 2,
        spaceBetween: 120,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination: {
            el: '.article-nav',
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
    let sliderCategoryType = new Swiper('.swiper-category-type', {
        slidesPerView: 8,
        spaceBetween: 40,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.category-type__next',
            prevEl: '.category-type__prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
            1400: {
                slidesPerView: 8,
            },
        }
    });

    let sliderNews = new Swiper('.swiper-news', {
        slidesPerView: 2,
        spaceBetween: 120,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination: {
            el: '.article-nav-news',
            clickable: true,
        },


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
    let sliderTags2 = new Swiper('.swiper-tags-2', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

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
    let sliderTags3 = new Swiper('.swiper-tags-3', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,

        navigation: {
            nextEl: '.tags__next-3',
            prevEl: '.tags__prev-3'
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

    let cards = document.querySelectorAll('.card'),
        oldPrice = document.querySelectorAll('.card__price'),
        newPrice = document.querySelectorAll('.card__price-b'),
        cardLike = document.querySelectorAll('.card__heart');
    document.addEventListener('click', (e) => {
        if (e.target && (e.target.classList.contains('card__heart') || e.target.classList.contains('js-card-heart'))) {
            e.preventDefault();
        }
    })
    if (cards) {

        toggleCardLike(cardLike);

        function toggleCardLike(like) {
            for (let i = 0; i < like.length; i++) {
                let trigger = false;
                if (like[i]) {
                    let heartColor = like[i].querySelector('.js-card-heart');
                    like[i].onclick = function (x) {
                        return function () {
                            if (heartColor) {
                                if (trigger) {
                                    heartColor.style.fill = "#fff";
                                    trigger = false;
                                } else {
                                    heartColor.style.fill = "#467BB9";
                                    trigger = true;
                                }
                            }

                        }
                    }(i)
                }
            }
        }


    }
    /*modal basket */
    if (modalBasket) {
        let modalBasketItem = modalBasket.querySelectorAll('.modal-one-click__item');
        if (modalBasketItem) {
            changeCountBasket(modalBasketItem);
        }

        function changeCountBasket(item) {
            for (let i = 0; i < item.length; i++) {
                let plus = item[i].querySelector('.js-basket-count-plus'),
                    number = item[i].querySelector('.js-basket-count-num'),
                    minus = item[i].querySelector('.js-basket-count-minus');
                if (plus) {
                    plus.onclick = function (x) {
                        return function () {
                            number.value = +number.value + 1;
                        }
                    }(i)
                }
                if (minus) {
                    minus.onclick = function (x) {
                        return function () {
                            if (number.value > 0) {
                                number.value = +number.value - 1;
                            }
                        }
                    }(i)
                }
            }
        }
    }
    /* modal one click */
    let card = document.querySelectorAll('.card'),
        cardPrice = document.querySelectorAll('.card-price__new'),
        cardName = document.querySelectorAll('.card__name'),
        cardImg = document.querySelectorAll('.card__img img'),

        modalOneClickImg = document.querySelector('.modal-one-click__img img'),
        modalOneClickName = document.querySelector('.modal-one-click__name'),
        modalOneClickPrice = document.querySelector('.js-modal-one-click__price'),
        modalOneClickBtn = document.querySelectorAll('.js-one-click'),
        modalOneClickCount = document.querySelector('.js-modal-one-click__num'),

        modalInputName = document.querySelector('#js-modal-one-click-name'),
        modalInputPrice = document.querySelector('#js-modal-one-click-price'),
        modalInputUrl = document.querySelector('#js-modal-one-click-url'),
        oneCardParent = document.querySelector('.product__info'),
        oneCardName = document.querySelector('.product__title'),
        oneCardPrice = document.querySelector('.product-price__new'),
        oneCardImg = document.querySelector('.product__img img');


    if (card || oneCardParent) {
        getCardInfoToModalOneClick(card);
        document.addEventListener('click', (e) => {

            if (e.target && e.target.classList.contains('js-modal-one-click__minus')) {
                e.preventDefault();
                if (modalOneClickCount.value > 0) {
                    console.log()
                    modalOneClickCount.value = +modalOneClickCount.value - 1;
                }
            }
            if (e.target && e.target.classList.contains('js-modal-one-click__plus')) {
                e.preventDefault();
                modalOneClickCount.value = +modalOneClickCount.value + 1;
            }
        })

    }
    if (oneCardParent) {
        oneCardParent.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target && e.target.classList.contains('js-product-one-click')) {
                modalOneClickName.innerHTML = oneCardName.innerHTML;
                modalInputName.value = oneCardName.innerHTML

                modalOneClickPrice.innerHTML = oneCardPrice.innerHTML;
                modalInputPrice.value = oneCardPrice.innerHTML;


                modalOneClickImg.src = oneCardImg.src;
                modalInputUrl.value = window.location;
            }
        });
    }

    function getCardInfoToModalOneClick(card) {
        for (let i = 0; i < card.length; i++) {
            modalOneClickBtn[i].onclick = function (x) {
                return function () {

                    modalOneClickName.innerHTML = cardName[i].innerHTML;
                    modalInputName.value = cardName[i].innerHTML

                    modalOneClickPrice.innerHTML = cardPrice[i].innerHTML;
                    modalInputPrice.value = cardPrice[i].innerHTML;

                    console.log(cardImg[i]);
                    console.log(cardImg[i].childNodes[1]);
                    modalOneClickImg.src = cardImg[i].src;
                    modalInputUrl.value = cardName[i].href;
                }
            }(i)
        }
    }

    /* RATING
    let ratingParent = document.querySelector('.js-rating'),
        ratingInput = document.querySelector('#js-rating'),
        ratingStar = document.querySelectorAll('.js-rating > li');

    if (ratingParent) {
        ratingParent.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target && target.tagName == 'LI') {
                for (let i = 0; i < ratingStar.length; i++) {
                    ratingStar[i].classList.remove('active')
                }
                for (let i = 0; i => ratingStar.length; i++) {
                    if (ratingStar[i] == target) {
                        ratingStar[i].classList.add('active');
                        ratingInput.value = ++i;
                        return
                    } else {
                        ratingStar[i].classList.add('active');
                    }
                }
            }

        });
    }

    let modalRatingParent = document.querySelector('.modal-reviews'),
        modalRatingInput = document.querySelector('#js-rating-modal'),
        modalRatingStar = document.querySelectorAll('.js-rating-modal > li');

    if (modalRatingParent) {
        modalRatingParent.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target && target.tagName == 'LI') {
                for (let i = 0; i < modalRatingStar.length; i++) {
                    modalRatingStar[i].classList.remove('active')
                }
                for (let i = 0; i => ratingStar.length; i++) {
                    if (modalRatingStar[i] == target) {
                        modalRatingStar[i].classList.add('active');
                        modalRatingInput.value = ++i;
                        return
                    } else {
                        modalRatingStar[i].classList.add('active');
                    }
                }
            }

        });
    }

*/
    /* reset filter */
    let btnFilterReset = document.querySelector('.js-filter-reset');
    let allLinkFilter = document.querySelectorAll('.category-filter__link'),
        btnFilterHidden = document.querySelector('.js-filer-hidden');

    if (btnFilterReset) {
        btnFilterReset.addEventListener('click', () => {

            if (allLinkFilter) {
                for (let i = 0; i < allLinkFilter.length; i++) {
                    if (allLinkFilter[i].classList.contains('active')) {
                        allLinkFilter[i].classList.remove('active');
                    }
                }
            }
        });
    }
    if (btnFilterHidden) {
        btnFilterHidden.addEventListener('click', (e) => {
            e.preventDefault();
            if (filterContent) {
                for (let i = 0; i < filterContent.length; i++) {
                    let trigger = true;

                    let link = filterContent[i].querySelectorAll('.category-filter__link');
                        for (let j = 0; j < link.length; j++) {
                            if (link[j].classList.contains('active')) {
                                trigger = false;
                            }
                        }
                    if (trigger) {
                        filterItem[i].style.display = 'none';
                    }
                }
            }
        });
    }


    /* sort in category */

    function setCookie(cname, cvalue) {
        let d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let sortBtn = document.querySelectorAll('.category-pagecount a'),
        sortSelect = document.querySelector('.select.wppp-select'),
        categorySortLink = document.querySelectorAll('.category-sort a');

    if (categorySortLink) {
        if (getCookie('woocommerce_products_sort') == 'По возрастанию цены') {
            fixcategory(categorySortLink[0]);
        } else if (getCookie('woocommerce_products_sort') == 'По убыванию популярности') {
            fixcategory(categorySortLink[1]);
        }

        if (categorySortLink[0]) {
            categorySortLink[0].addEventListener('click', (e) => {
                addCookiesSort('По возрастанию цены');
            });
        }
        if (categorySortLink[1]) {
            categorySortLink[1].addEventListener('click', (e) => {
                addCookiesSort('По убыванию популярности');
            });
        }


        function addCookiesSort(value) {
            setCookie('woocommerce_products_sort', value)
        }
    }

    function fixcategory(item) {
        for (let i = 0; i < categorySortLink.length; i++) {
            categorySortLink[i].classList.remove('active');
            if (categorySortLink[i] == item) {
                item.classList.add('active');
            }
        }
    }

    if (sortBtn && sortSelect) {
        if (getCookie('woocommerce_products_per_page') == '') {
            setCookie('woocommerce_products_per_page', 48);
            fixSort(sortBtn[1], 48)
        } else if (getCookie('woocommerce_products_per_page') == 24) {
            fixSort(sortBtn[0], 24)
        } else if (getCookie('woocommerce_products_per_page') == 48) {
            fixSort(sortBtn[1], 48)
        } else {
            fixSort(sortBtn[2], 96)
        }

        function fixSort(item, value) {
            for (let i = 0; i <= sortBtn.length; i++) {
                sortBtn[i].classList.remove('active');
                if (i = sortBtn.length) {
                    item.classList.add('active');
                    sortSelect.value = value;
                    break;
                }
            }
        }
    }

    /* VIDEO */
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
});


/* АДАПТИВНОЕ ПЕРЕМЕЩЕНИЕ БЛОКОВ */
function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();