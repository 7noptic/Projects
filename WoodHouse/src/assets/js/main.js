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
        workParent = document.querySelector('.work'),
        workLink = document.querySelectorAll('.js-work-link'),
        workTab = document.querySelectorAll('.js-work-tab'),
        reviewParent = document.querySelector('.review-block'),
        reviewLink = document.querySelectorAll('.js-review-link'),
        reviewTab = document.querySelectorAll('.js-review-tab'),
        articleParent = document.querySelector('.article-block'),
        articleLink = document.querySelectorAll('.js-article-link'),
        articleTab = document.querySelectorAll('.js-article-tab');

    if (storeParent && storeLink.length > 0) {
        toggleTabs(storeLink, storeTab, storeParent, 'js-store-link');
    }
    if (workParent && workLink.length > 0) {
        toggleTabs(workLink, workTab, workParent, 'js-work-link');
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
    let faqParent = document.querySelector('.faq'),
        faqLink = document.querySelectorAll('.faq-item__header'),
        faqContent = document.querySelectorAll('.faq-item__content');

    if(faqParent && faqLink.length > 0){
        toggleContent(faqLink,faqContent, 'faq-item__header');
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

        pagination: {
            el: '.banner-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        },


    });
    let sliderArticles = new Swiper('.swiper-article-articles', {
        slidesPerView: 2,
        spaceBetween: 35,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        pagination: {
            el: '.article-nav-1',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },


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