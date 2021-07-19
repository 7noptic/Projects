window.addEventListener('DOMContentLoaded', () => {
    /* TABS */
    let faqParent = document.querySelector('.faq-item__wrapper'),
        faqLink = document.querySelectorAll('.faq-item__quest'),
        faqTab = document.querySelectorAll('.faq-item__answ');

    if (faqParent && faqLink && faqTab) {
        toggleTabs(faqLink, faqTab, faqParent, 'faq-item__quest');
    }

    function toggleTabs(link, tabs, parent, classContains, subTabs, subLink, subContent) {
        hideTabs(link, tabs);
        showTabs(0, link, tabs, parent);

        let subIndex = 0;
        let trigger = false;
        if (subTabs) {
            let subLinks = tabs[subIndex].querySelectorAll(`.${subLink}`),
                subTabs = tabs[subIndex].querySelectorAll(`.${subContent}`);
            hideTabs(subLinks, subTabs);
            showTabs(0, subLinks, subTabs, parent);
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
                        showTabs(i, link, tabs,parent);
                        if (subTabs) {
                            let subLinks = tabs[i].querySelectorAll(`.${subLink}`),
                                subTabs = tabs[i].querySelectorAll(`.${subContent}`);
                            hideTabs(subLinks, subTabs);
                            showTabs(0, subLinks, subTabs, parent);
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

    function showTabs(i = 0, link, content, parent) {
        link[i].classList.add('active');
        content[i].classList.add('active');

        parent.style.minHeight = content[i].offsetHeight + 'px';
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