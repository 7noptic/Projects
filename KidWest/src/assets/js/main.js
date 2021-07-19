'use script';
/*
import cookie from './cookie';
import orderNum from './order-num';
import Readmore from "readmore-js";




import hamburger from './hamburger-menu';
import video from './video';
import toggleContent from './toggle-content';

import serviceMenuFix from './service-menu-fix';

*/
import sliderswiper from './slider';
import lightbox from './lightbox';
import card from './card';
import tabs from './tabs';
import adaptive from './adaptive-move-block';
import modal from './modal';
import animation from './section-animation';
window.addEventListener('DOMContentLoaded', function () {

    let reviews = document.querySelectorAll('.wpmtst-testimonial-inner.testimonial-inner');
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            let newText = document.createElement("p"),
                oldText = reviews[i].querySelector('.wpmtst-testimonial-content.testimonial-content p');
            newText.classList.add('reviews-item__text');
            reviews[i].appendChild(newText);
            newText.innerHTML = oldText.innerHTML;
            oldText.remove();

        }
    }

}, true);