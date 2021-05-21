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


    /* rating */
    let ratingOnPage = document.querySelector('.reviews-company__rating b'),
        ratingOnPageStar = document.querySelectorAll('.reviews-company__data .reviews-company__rating .rating-star li'),
        reviewOnPage = document.querySelectorAll('.reviews-card'),
        reviewMoreParent = document.querySelector('.js-all-company'),
        reviewMoreItem = document.querySelectorAll('.js-all-company .reviews-card'),
        reviewMoreItemActive = document.getElementsByClassName('.js-all-company .reviews-card.active');

    if(reviewMoreParent){
        for(let i = 0; i < reviewMoreItem.length; i++){
            if(i > 9){
                reviewMoreItem[i].classList.add('hidden');
            }
        }
        document.querySelector('.reviews__more').addEventListener('click', (e) => {
            let trigger = 1;
            for(let i = 0; i < reviewMoreItem.length; i++){

                if(reviewMoreItem[i].classList.contains('hidden') && trigger < 10){
                    reviewMoreItem[i].classList.remove('hidden');
                    trigger++;
                }
            }
        })

    }

    if (ratingOnPage) {
        let rating = ratingOnPage.innerHTML;
        rating = Math.round(rating / 2);

        for (let i = 0; i < ratingOnPageStar.length; i++) {
            ratingOnPageStar[i].classList.remove('active');
        }
        for (let i = 0; i <= rating; i++) {
            if (rating == 1) {
                ratingOnPageStar[i].classList.add('active');
                break;
            } else if (i == 4) {
                ratingOnPageStar[i].classList.add('active');
                break;
            } else {
                console.log(ratingOnPageStar[i])
                ratingOnPageStar[i].classList.add('active');
            }
        }

    }
    if (reviewOnPage) {
        for (let i = 0; i < reviewOnPage.length; i++) {
            let ratingValue = reviewOnPage[i].querySelector('.reviews-card__rating input'),
                ratingReview = reviewOnPage[i].querySelectorAll('.reviews-card__rating ul li');

            for (let i = 0; i < ratingReview.length; i++) {
                ratingReview[i].classList.remove('active');
            }
            if (ratingValue) {
                ratingValue = ratingValue.value;
                for (let i = 0; i < ratingValue; i++) {
                    ratingReview[i].classList.add('active');
                }
            }
        }
    }
    let reviewOnSlider = document.querySelectorAll('.card ');
    if (reviewOnSlider) {
        for (let i = 0; i < reviewOnSlider.length; i++) {
            let ratingValue = reviewOnSlider[i].querySelector('.card__rating input'),
                ratingReview = reviewOnSlider[i].querySelectorAll('.card__rating ul li');

            for (let i = 0; i < ratingReview.length; i++) {
                ratingReview[i].classList.remove('active');
            }
            if (ratingValue) {
                ratingValue = ratingValue.value;
                for (let i = 0; i < ratingValue; i++) {
                    ratingReview[i].classList.add('active');
                }
            }
        }
    }

    /* more in header */
    let ratingBlockParent = document.querySelector('.rating-block');
    let ratingBlockItem = document.querySelectorAll('.col-12 .rating-item'),
        ratingBlockMore = document.querySelector('.rating-block__btn');
    if (ratingBlockParent) {

        if (ratingBlockItem) {
            for (let i = 0; i < ratingBlockItem.length; i++) {
                if (i < 4) {
                    ratingBlockItem[i].classList.add('active');
                }
            }
            ratingBlockMore.addEventListener('click', (e) => {
                e.preventDefault();
                for (let i = 0; i < ratingBlockItem.length; i++) {

                    ratingBlockItem[i].classList.add('active');

                }

            });

        }
    }else{
        if (ratingBlockItem) {
            for (let i = 0; i < ratingBlockItem.length; i++) {
                    ratingBlockItem[i].classList.add('active');
            }


        }
    }


    /* HAMBURGER MENU IN HEADER*/
    let html = document.querySelector('html'),
        body = document.querySelector('body'),
        header = document.querySelector('.header'),
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
        if (e.target && (e.target.classList.contains('js-search') || e.target.classList.contains('modal-search__exit') || e.target.classList.contains('form-wrapper-header__exit'))) {
            searchForm.classList.toggle('active');
        }
    });

    /* MODAL */
    let modalBlock = document.querySelector('.js-sidebars'),
        allModal = document.querySelectorAll('.js-sidebars > section'),
        modalRegion = document.querySelector('.modal-region'),
        modalPersonal = document.querySelector('.modal-personal'),
        modalReviews = document.querySelector('.modal-reviews'),
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

        if (target && (target.classList.contains('js-reviews') || target.classList.contains('modal-reviews__exit'))) {
            openCloseModal(e, modalReviews);
        }

        if (target && (target.classList.contains('js-modal-header') || target.classList.contains('adaptive-menu__exit'))) {
            openCloseModal(e, burgerMenu);
        }



        if (target && (target.classList.contains('js-region') || target.classList.contains('modal-region__exit'))) {
            openCloseModal(e, modalRegion);
        }

        if (target && (target.classList.contains('js-personal-data') || target.classList.contains('modal-personal__exit'))) {
            openCloseModal(e, modalPersonal);
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
        function closeAllModal(){
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
        }
        closeAllModal();

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
    /* fix modal */
    let push = document.querySelector('.push-item');
    document.addEventListener('click', (e) => {

        if(e.target && e.target.classList.contains('js-push')){
            e.preventDefault();
            push.classList.add('active');
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
            function showPush() {
                push.classList.remove('active');
            }

            setTimeout(showPush, 5000);
        }
    })
    /* TABS */


    let regionParent = document.querySelector('.region'),
        regionLink = document.querySelectorAll('.js-region-link'),
        regionTabs = document.querySelectorAll('.js-region-tabs'),
        regionSubLinks = document.querySelectorAll('.js-subregion-link'),
        regionSubTabs = document.querySelectorAll('.subregion__content'),
        reviewsCompanyParent = document.querySelector('.reviews-company'),
        reviewsCompanyLink = document.querySelectorAll('.js-reviews-company-link'),
        reviewsCompanyTabs = document.querySelectorAll('.js-reviews-company-tab'),
        faqTabParent = document.querySelector('.faq'),
        faqTabLink = document.querySelectorAll('.js-faq-link'),
        faqTabTabs = document.querySelectorAll('.js-faq-content');


    if (regionParent && regionLink.length > 0) {
        toggleTabs(regionLink, regionTabs, regionParent, 'js-region-link', true, '.js-subregion-link', '.subregion__content');
    }
    if (reviewsCompanyParent && reviewsCompanyLink.length > 0 && reviewsCompanyLink.length == reviewsCompanyTabs.length) {
        toggleTabs(reviewsCompanyLink, reviewsCompanyTabs, reviewsCompanyParent, 'js-reviews-company-link');
    }
    if (faqTabParent && faqTabLink.length > 0 && faqTabLink.length == faqTabTabs.length) {
        toggleTabs(faqTabLink, faqTabTabs, faqTabParent, 'js-faq-link');
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
            if (e.target && e.target.classList.contains('js-subregion-link')) {
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
    let faqLink = document.querySelectorAll('.faq-item__header'),
        faqContent = document.querySelectorAll('.faq-item__content');

    if (faqLink.length > 0 && faqLink.length == faqContent.length) {
        toggleContent(faqLink, faqContent, 'faq-item__header');
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

    /* more btn */

    function toggleMoreBtn(link, content, linkClass) {

        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();

                for (let i = 0; i < content.length; i++) {
                    content[i].classList.toggle('active');
                }
                link.innerHTML == "ПОКАЗАТЬ ЕЩЁ" ? link.innerHTML = "СКРЫТЬ" : link.innerHTML = "ПОКАЗАТЬ ЕЩЁ";
            }
        });
    }

    /* SWIPER */
    let SwiperBanner = new Swiper('.swiper-banner', {
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
            el: '.swiper-pagination-banner',
            clickable: true,
        },
    });

    let SwiperCard = new Swiper('.swiper-card', {
        slidesPerView: 4,
        spaceBetween: 10,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.card__next',
            prevEl: '.card__prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },

            1199: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4,
            },
        }
    });

    let sliderTags = new Swiper('.swiper-tags', {
        slidesPerView: "auto",
        spaceBetween: 20,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            prevEl: '.tags__prev',
            nextEl: '.tags__next',
        },


    });
    let sliderRegion = new Swiper('.swiper-region', {
        slidesPerView: 2,
        spaceBetween: 100,
        observeParents: true,
        observer: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            prevEl: '.region__prev',
            nextEl: '.region__next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                spaceBetween: 20,
                slidesPerView: 2,
            },


            1920: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        }

    });

    let ratingItem = document.querySelectorAll('.rating-item');

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('rating-item__plus')) {
            e.preventDefault();
        }
    })
    if (ratingItem) {

        for (let i = 0; i < ratingItem.length; i++) {
            let num = ratingItem[i].querySelector('.rating-item__num');
            num.innerHTML = i + 1;
        }
        ratingLike();
        ratingDisLike();

        function ratingLike() {
            for (let i = 0; i < ratingItem.length; i++) {
                let trigger = true;
                let ratingLike = ratingItem[i].querySelector('.rating-item__plus'),
                    ratingLikeCount = ratingLike.querySelector('span');

                if (ratingLike) {
                    ratingLike.onclick = function (x) {
                        return function () {
                            if (trigger) {
                                ratingLikeCount.innerHTML = +ratingLikeCount.innerHTML + 1;
                                trigger = false;
                            } else {
                                ratingLikeCount.innerHTML = +ratingLikeCount.innerHTML - 1;
                                trigger = true;
                            }

                        }
                    }(i)
                }
            }
        }

        function ratingDisLike() {
            for (let i = 0; i < ratingItem.length; i++) {
                let trigger = true;
                let ratingLike = ratingItem[i].querySelector('.rating-item__minus'),
                    ratingLikeCount = ratingLike.querySelector('span');

                if (ratingLike) {
                    ratingLike.onclick = function (x) {
                        return function () {
                            if (trigger && +ratingLikeCount.innerHTML >= 0) {
                                ratingLikeCount.innerHTML = +ratingLikeCount.innerHTML + 1;
                                trigger = false;
                            } else if (trigger == false && +ratingLikeCount.innerHTML >= 0) {
                                ratingLikeCount.innerHTML = +ratingLikeCount.innerHTML - 1;
                                trigger = true;
                            }

                        }
                    }(i)
                }
            }
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
*/
    let modalRatingParent = document.querySelector('.modal-reviews .rating-star'),
        modalRatingInput = document.querySelector('#js-rating-modal'),
        modalRatingStar = document.querySelectorAll('.js-rating-modal > li');

    if (modalRatingParent) {
        modalRatingParent.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            modalRatingInput.value = 0;
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