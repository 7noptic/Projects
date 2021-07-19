window.addEventListener('DOMContentLoaded', () => {
    /* SHOW HIDE CONTENT */

    let faqParent = document.querySelector('.faq'),
        faqLink = document.querySelectorAll('.faq-item__header'),
        faqContent = document.querySelectorAll('.faq-item__text'),
        stocksParent = document.querySelector('.stocks'),
        stocksLink = document.querySelectorAll('.js-stocks-more'),
        stocksContent = document.querySelectorAll('.stocks-item__text');

    if (faqContent && faqLink && faqParent) {
        toggleContent(faqLink, faqContent, 'faq-item__header');
    }
    if (stocksContent && stocksLink && stocksParent) {
        toggleContent(stocksLink, stocksContent, 'js-stocks-more', true, 'РАЗВЕРНУТЬ', 'СВЕРНУТЬ');
    }

    function toggleContent(link, content, linkClass, trigger, textin, textout) {
        let clicked = false;
        document.addEventListener('click', (e) => {

            if (e.target && e.target.classList.contains(linkClass)) {
                e.preventDefault();

                for (let i = 0; i < link.length; i++) {
                    if (e.target == link[i]) {
                        link[i].classList.toggle('active');
                        content[i].classList.toggle('active');
                        if (trigger) {
                            if (clicked) {
                                link[i].innerHTML = textin;
                                clicked = false;
                            } else {
                                link[i].innerHTML = textout;
                                clicked = true;
                            }
                        }
                    }
                }
            }
        });
    }
});
