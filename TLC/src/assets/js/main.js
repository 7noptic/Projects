'use script';

window.addEventListener('DOMContentLoaded', function () {
    let projectItem = document.querySelectorAll('.project-item');
    if (projectItem) {
        for (let i = 0; i < projectItem.length; i++) {
            let img = projectItem[i].querySelector('.project__img img'),
                text = projectItem[i].querySelector('.project__content'),
                imgBlock = projectItem[i].querySelector('.project__img')

            if (imgBlock && text) {
                let title = text.querySelector('.project-item__title');
                if(title){
                    let height = title.offsetHeight;
                    imgBlock.style.marginTop = height + 'px';
                }
            }
        }
    }


    let submenu = document.querySelectorAll('.header-submenu > li > div > ul');
    if (submenu) {
        for (let i = 0; i < submenu.length; i++) {
            let height = submenu[i].offsetHeight,
                submenuLevel2 = submenu[i].querySelectorAll('ul'),
                img = submenu[i].querySelectorAll('img');
            for (let j = 0; j < submenuLevel2.length; j++) {
                if (submenuLevel2) {
                    submenuLevel2[j].style.minHeight = height + 'px';
                }
                if (img) {
                    img[j].style.minHeight = height + 'px';
                }
            }
        }
    }

}, false);



