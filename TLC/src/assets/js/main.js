'use script';

window.addEventListener('DOMContentLoaded', function () {
    let projectItem = document.querySelectorAll('.project-item');
    if (projectItem) {
        for (let i = 0; i < projectItem.length; i++) {
            let img = projectItem[i].querySelector('.project__img img'),
                text = projectItem[i].querySelector('.project__content'),
                imgBlock = projectItem[i].querySelector('.project__img'),

                columns = projectItem[i].querySelectorAll('.project__content.project-item__content.column');


            if(columns){
                for(let j = 0; j < columns.length; j++){
                    let titleOne = columns[0].querySelector('.project-item__title'),
                        titleTwo = columns[1].querySelector('.project-item__title');
                    if(titleOne && titleTwo){
                        if(titleOne.offsetHeight > titleTwo.offsetHeight){
                            titleTwo.style.height = titleOne.offsetHeight + `px`;
                        }else{
                            titleOne.style.height = titleTwo.offsetHeight + `px`;
                        }
                    }
                }


            }

            if (imgBlock && text) {
                let title = text.querySelector('.project-item__title');
                if(title){
                    let height = title.offsetHeight + 3;
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



