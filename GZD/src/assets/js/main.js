'use script';
import cookie from './cookie';
//import Readmore from "readmore-js";
import sliderswiper from './slider';
import tabs from './tabs';
import modal from './modal';
import lightbox from './lightbox';
import hamburger from './hamburger-menu';
import video from './video';
import toggleContent from './toggle-content';
import adaptive from './adaptive-move-block';


window.addEventListener('DOMContentLoaded', function () {
    let indexBanner = document.querySelector('#index-banner'),
        indexBannerFront = document.querySelector('#index-banner-front'),
        header = document.querySelector('.header'),
        main = document.querySelector('main');
        
    if (indexBanner && indexBannerFront) {
        header.classList.add('active');
        let trigger = true;
        document.addEventListener('scroll', function (e) {
            if (scrollY > 100 && trigger) {
                trigger = false;
                main.classList.add('gotop2');
                header.classList.add('scroll');
                //setTimeout(indexBannerFront.style.opacity = '0', 600);
                //setTimeout(indexBannerFront.style.zIndex = '-1000', 600);

                 //indexBannerFront.classList.remove('gobot');
                 //indexBanner.classList.remove('gobot2');
                 indexBannerFront.classList.add('gotop2');
                 //indexBanner.classList.add('gotop2');


            }
            if(scrollY <= 10 && !trigger){
                trigger = true;
                /*
                indexBannerFront.classList.remove('gotop');
                indexBanner.classList.remove('gotop2');
                indexBannerFront.style.display = 'block';

                indexBannerFront.classList.add('gobot');
                indexBanner.classList.add('gobot2');
                header.classList.add('active');

                 */
            }
        }, false);
    }
    let tableTariffs = document.querySelectorAll('.js-tariffs-tab > table');
    if (tableTariffs) {
        for (let i = 0; i < tableTariffs.length; i++) {
            let items = tableTariffs[i].querySelectorAll('tbody > tr');
            for (let j = 0; j < items.length; j++) {
                if (j > 9) {
                    items[j].classList.add('hidden');
                }
            }
        }
    }
    let whyParent = document.querySelector('.why'),
        whyItem = document.querySelectorAll('.why-item__num');
    if (whyParent && whyItem) {
        for (let i = 0; i < whyItem.length; i++) {
            whyItem[i].innerHTML = i + 1;
        }
    }

    document.addEventListener('click', function (e) {

        if (e.target && e.target.classList.contains('js-tariffs-more')) {
            e.preventDefault();
            let tableTariffsActive = document.querySelector('.js-tariffs-tab.active > table')
            if (tableTariffsActive) {
                let tableTariffsItems = tableTariffsActive.querySelectorAll('tbody > tr');
                if (tableTariffsItems && tableTariffsItems.length > 9) {
                    for (let i = 10; i < tableTariffsItems.length; i++) {
                        tableTariffsItems[i].classList.toggle('hidden');
                    }
                }
            }
        }
    });

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

}, false);
