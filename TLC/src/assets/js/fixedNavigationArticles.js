window.addEventListener('DOMContentLoaded', function (e) {
    let navArticleFixed = document.querySelector('.lwptoc'),
        article = document.querySelector('.project-single');

    if (navArticleFixed) {
        moveHeaderMenuToTop(article)
        document.addEventListener('scroll', (e) => {
            moveHeaderMenuToTop(article);
        });


        function moveHeaderMenuToTop(elem) {

            if (pageYOffset >= 230 && pageYOffset <= elem.clientHeight) {
                navArticleFixed.classList.add('absolute');
                navArticleFixed.style.top = pageYOffset - 230 + 'px';
            }
        }
    }

}, false);