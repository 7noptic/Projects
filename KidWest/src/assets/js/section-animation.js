import JQuery from 'jquery';
import $ from 'jquery';
window.addEventListener('DOMContentLoaded', function () {

    let sections = document.querySelectorAll('section');
    for (let i = 1; i < sections.length; i++) {
        let section = sections[i],
            position = section.getBoundingClientRect().top;
        let info;
        $(section).mousemove(function(e){
            section.classList.add('sectionAnimation');
        });
        window.addEventListener('scroll', function onScroll() {

            if (window.pageYOffset > position - window.innerHeight) {
                this.removeEventListener('scroll', onScroll);
               section.classList.add('sectionAnimation');
            }
        });
    }



}, true);


