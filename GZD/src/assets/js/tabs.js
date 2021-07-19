window.addEventListener('DOMContentLoaded', () => {
    /* TABS */

    let tariffsParent = document.querySelector('.tariffs'),
        tariffsLink = document.querySelectorAll('.js-tariffs-link'),
        tariffsTab = document.querySelectorAll('.js-tariffs-tab'),
        articleParent = document.querySelector('.article-block'),
        articleLink = document.querySelectorAll('.js-article-link'),
        articleTab = document.querySelectorAll('.js-article-tab'),
        sitemapParent = document.querySelector('.sitemap'),
        sitemapLink = document.querySelectorAll('.js-sitemap-link'),
        sitemapTab = document.querySelectorAll('.js-sitemap-tab'),
        mailParent = document.querySelector('.mail'),
        mailLink = document.querySelectorAll('.js-mail-link'),
        mailTab = document.querySelectorAll('.js-mail-tab');

    if(tariffsLink.length > 0 && tariffsTab.length > 0 && tariffsParent){
        toggleTabs(tariffsLink, tariffsTab, tariffsParent, 'js-tariffs-link');
    }

    if(articleLink.length > 0 && articleTab.length > 0 && articleParent){
        toggleTabs(articleLink, articleTab, articleParent, 'js-article-link');
    }

    if(sitemapLink.length > 0 && sitemapTab.length > 0 && sitemapParent){
        toggleTabs(sitemapLink, sitemapTab, sitemapParent, 'js-sitemap-link');
    }
    if(mailLink.length > 0 && mailTab.length > 0 && mailParent){
        toggleTabs(mailLink, mailTab, mailParent, 'js-mail-link');
    }


    function toggleTabs(link, tabs, parent, classContains, subTabs, subLink, subContent) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs);

        let subIndex = 0;
        let trigger = false;
        if (subTabs) {
            let subLinks = tabs[subIndex].querySelectorAll(`.${subLink}`),
                subTabs = tabs[subIndex].querySelectorAll(`.${subContent}`);
            hideTabs(subLinks, subTabs);
            showTabs(0, subLinks, subTabs);
            trigger = true;
        }
        ;

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
                            let subLinks = tabs[i].querySelectorAll(`.${subLink}`),
                                subTabs = tabs[i].querySelectorAll(`.${subContent}`);
                            hideTabs(subLinks, subTabs);
                            showTabs(0, subLinks, subTabs);
                            subIndex = i;
                        }
                    }
                }
            }
            let subLinks = tabs[subIndex].querySelectorAll(`.${subLink}`),
                subTabs = tabs[subIndex].querySelectorAll(`.${subContent}`);
            if (e.target && e.target.classList.contains(subLink)) {
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
});