window.addEventListener('DOMContentLoaded', () => {
    /* TABS */
    let serviceParent = document.querySelector('.service-tab'),
        serviceLink = document.querySelectorAll('.js-service-link'),
        serviceTab = document.querySelectorAll('.js-service-tab'),
        serviceNavParent = document.querySelector('.service'),
        serviceNavLink = document.querySelectorAll('.js-service-nav__link'),
        serviceNavTab = document.querySelectorAll('.js-service-nav__tab');

        if (serviceParent && serviceLink.length > 0) {
            toggleTabs(serviceLink, serviceTab, serviceParent, 'js-service-link', true, 'js-service-nav__sublink', 'js-service-subtab');
        }
        if (serviceNavParent && serviceNavLink.length > 0) {
            toggleTabs(serviceNavLink, serviceNavTab, serviceNavParent, 'js-service-nav__link');
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