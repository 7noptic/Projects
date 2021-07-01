'use script';

window.addEventListener('DOMContentLoaded', function () {
    let projectItem = document.querySelectorAll('.project-item');
    if (projectItem) {
        for (let i = 0; i < projectItem.length; i++) {
            let img = projectItem[i].querySelector('.project__img img'),
                text = projectItem[i].querySelector('.project__content'),
                imgBlock = projectItem[i].querySelector('.project__img')

            if (!img || img == null) {
                console.log(text);
                imgBlock.remove();
                text.classList.add('full');
            }
        }
    }


}, false);



