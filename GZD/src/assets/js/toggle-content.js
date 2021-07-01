window.addEventListener('DOMContentLoaded', () => {
    /* SHOW HIDE CONTENT */

    let faqParent = document.querySelector('.faq'),
        faqLink = document.querySelectorAll('.faq-item__header'),
        faqContent = document.querySelectorAll('.faq-item__text');

    if(faqContent && faqLink && faqParent){
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
});
