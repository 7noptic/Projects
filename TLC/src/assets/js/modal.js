window.addEventListener('DOMContentLoaded', () => {
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

    if (regionBtn) {
        if (localStorage.getItem('city') != null) {
            regionBtn.innerHTML = localStorage.getItem('city');
        } else {
            regionBtn.innerHTML = 'Москва';
        }
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
            document.querySelector('html').classList.toggle('lock');
            document.querySelector('body').classList.toggle('lock');
            modalBlock.classList.toggle('sidebar-bg');
            for (let i = 0; i < allModal.length; i++) {
                if (allModal[i].classList.toggle('active')) {
                    allModal[i].classList.remove('active');
                }
            }
            document.querySelector('.header').classList.toggle('blur');
            document.querySelector('main').classList.toggle('blur');
            document.querySelector('.footer').classList.toggle('blur');

        }

    });

    function openCloseModal(e, modal) {
        e.preventDefault();
        document.querySelector('html').classList.toggle('lock');
        document.querySelector('body').classList.toggle('lock');
        modalBlock.classList.toggle('sidebar-bg');
        modal.classList.toggle('active');
        document.querySelector('.header').classList.toggle('blur');
        document.querySelector('main').classList.toggle('blur');
        document.querySelector('.footer').classList.toggle('blur');
    }
});