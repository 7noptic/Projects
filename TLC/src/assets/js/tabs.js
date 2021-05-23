window.addEventListener('DOMContentLoaded', () => {
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
});