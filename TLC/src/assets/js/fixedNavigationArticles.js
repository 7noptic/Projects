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

    let navAboutParent = document.querySelector('.page-template.page-template-about.page-template-about-php'),
        navAboutMenu = document.querySelector('.description__list'),
        aboutItem = document.querySelector('.description__content'),
        descr = document.querySelector('.description'),
        header = document.querySelector('.header'),
        banner = document.querySelector('.banner'),
        breadcrumbs = document.querySelector('.breadcrumbs');
    if (descr) {
        let title = descr.querySelector('.title');

        if (navAboutParent && navAboutMenu && aboutItem && header && banner && descr && title && breadcrumbs) {
            let height = getHeightElement(header) + getHeightElement(banner) + getHeightElement(title) + getHeightElement(breadcrumbs);
            moveHeaderMenuToTop2(descr);
            document.addEventListener('scroll', (e) => {
                moveHeaderMenuToTop2(descr);
            });


            function moveHeaderMenuToTop2(elem) {
                if (pageYOffset >= height && pageYOffset <= (elem.clientHeight + height - navAboutMenu.offsetHeight)) {

                    navAboutMenu.classList.add('absolute');
                    navAboutMenu.style.top = pageYOffset - height + 'px';
                }
            }
        }
    }

    function getHeightElement(el) {
        // Get the DOM Node if you pass in a string
        el = (typeof el === 'string') ? document.querySelector(el) : el;

        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles['marginTop']) +
            parseFloat(styles['marginBottom']);

        return Math.ceil(el.offsetHeight + margin);
    }

}, false);