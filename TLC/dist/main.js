!function(e){function t(t){for(var n,s,l=t[0],o=t[1],c=t[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var o=r[l];0!==i[o]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={0:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;a.push([126,1]),r()}({126:function(e,t,r){r(127),e.exports=r(327)},313:function(e,t,r){},316:function(e,t){},317:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-order-num");if(e)for(var t=0;t<e.length;t++)e[t].innerHTML=t+1}))},319:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".service-tab"),t=document.querySelectorAll(".js-service-link"),r=document.querySelectorAll(".js-service-tab"),n=document.querySelector(".service"),i=document.querySelectorAll(".js-service-nav__link"),a=document.querySelectorAll(".js-service-nav__tab");function s(e,t,r,n,i,a,s){o(e,t),l(0,e,t);var c=0,d=!1;if(i){var u=t[c].querySelectorAll(".".concat(a)),p=t[c].querySelectorAll(".".concat(s));o(u,p),l(0,u,p),d=!0}r.addEventListener("click",(function(r){if(r.target&&r.target.classList.contains(n)){r.preventDefault(),d&&(w=!0);for(var i=0;i<e.length;i++)if(e[i]===r.target&&(o(e,t),l(i,e,t),w)){var u=t[i].querySelectorAll(".".concat(a)),p=t[i].querySelectorAll(".".concat(s));o(u,p),l(0,u,p),c=i}}var v=t[c].querySelectorAll(".".concat(a)),w=t[c].querySelectorAll(".".concat(s));if(r.target&&r.target.classList.contains(a)){r.preventDefault();for(var f=0;f<v.length;f++)v[f]===r.target&&(o(v,w),l(f,v,w))}}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;t[e].classList.add("active"),r[e].classList.add("active")}function o(e,t){for(var r=0;r<e.length;r++)e[r].classList.remove("active");for(var n=0;n<t.length;n++)t[n].classList.remove("active")}e&&t.length>0&&s(t,r,e,"js-service-link",!0,"js-service-nav__sublink","js-service-subtab"),n&&i.length>0&&s(i,a,n,"js-service-nav__link")}))},320:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-sidebars"),t=document.querySelectorAll(".js-sidebars > section"),r=document.querySelector(".modal-call"),n=document.querySelector(".modal-query"),i=document.querySelector(".modal-region"),a=document.querySelector(".modal-subscribe"),s=document.querySelector(".modal-delivery"),l=document.querySelectorAll(".modal-region__link"),o=document.querySelector(".js-region-city"),c=document.querySelector(".adaptive-menu");function d(t,r){t.preventDefault(),document.querySelector("html").classList.toggle("lock"),document.querySelector("body").classList.toggle("lock"),e.classList.toggle("sidebar-bg"),r.classList.toggle("active"),document.querySelector(".header").classList.toggle("blur"),document.querySelector("main").classList.toggle("blur"),document.querySelector(".footer").classList.toggle("blur")}o&&(null!=localStorage.getItem("city")?o.innerHTML=localStorage.getItem("city"):o.innerHTML="Москва"),document.addEventListener("click",(function(u){var p=u.target;if(p&&(p.classList.contains("js-call")||p.classList.contains("modal-call__exit"))&&d(u,r),p&&(p.classList.contains("js-query")||p.classList.contains("modal-query__exit"))&&d(u,n),p&&(p.classList.contains("js-modal-header")||p.classList.contains("adaptive-menu__exit"))&&d(u,c),p&&(p.classList.contains("js-subscribe")||p.classList.contains("modal-subscribe__exit"))&&d(u,a),p&&(p.classList.contains("js-delivery")||p.classList.contains("modal-delivery__exit"))&&d(u,s),p&&(p.classList.contains("js-region")||p.classList.contains("modal-region__exit"))&&d(u,i),p.classList.contains("modal-region__link")){for(var v=0;v<l.length;v++)if(l[v]==p){var w=l[v].innerHTML;localStorage.setItem("city",w);var f=localStorage.getItem("city");"undifiend"==f?o.innerHTML="Москва":(o.innerHTML=f.innerHTML,o.innerHTML=f)}d(u,i)}else if(p.classList.contains("js-region-close")){var g=document.querySelector(".js-select-city");localStorage.setItem("city",g.innerHTML);var m=localStorage.getItem("city");o.innerHTML=m,d(u,i)}if(p&&(p.classList.contains("sidebar-bg")||p.classList.contains("sidebar-bg"))){u.preventDefault(),document.querySelector("html").classList.toggle("lock"),document.querySelector("body").classList.toggle("lock"),e.classList.toggle("sidebar-bg");for(var y=0;y<t.length;y++)t[y].classList.toggle("active")&&t[y].classList.remove("active");document.querySelector(".header").classList.toggle("blur"),document.querySelector("main").classList.toggle("blur"),document.querySelector(".footer").classList.toggle("blur")}}))}))},321:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");e&&e.addEventListener("click",(function(e){e.target&&e.target.classList.contains("js-burger")&&(e.preventDefault(),document.querySelector(".hamburger-menu").classList.toggle("active"),document.querySelector(".js-burger").classList.toggle("active")),e.target&&e.target.classList.contains("js-search")&&(e.preventDefault(),document.querySelector(".form-wrapper-header").classList.toggle("active"))}))}))},322:function(e,t){window.addEventListener("DOMContentLoaded",(function(){function e(e){var t=e.querySelector(".video__link"),r=e.querySelector(".video__media"),n=e.querySelector(".video__button"),i=function(e){var t=/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;return e.src.match(t)[1]}(r);e.addEventListener("click",(function(){var r=function(e){var t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",function(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}(e)),t.classList.add("video__media"),t}(i);t.remove(),n.remove(),e.appendChild(r)})),t.removeAttribute("href"),e.classList.add("video--enabled")}!function(){for(var t=document.querySelectorAll(".video"),r=0;r<t.length;r++)e(t[r])}()}))},323:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e,t,r,n=document.querySelector(".faq"),i=document.querySelectorAll(".faq-item__header"),a=document.querySelectorAll(".faq-item__content");n&&i.length>0&&(e=i,t=a,r="faq-item__header",document.addEventListener("click",(function(n){if(n.target&&n.target.classList.contains(r)){n.preventDefault();for(var i=0;i<e.length;i++)n.target==e[i]&&(e[i].classList.toggle("active"),t[i].classList.toggle("active"))}})))}))},324:function(e,t){window.addEventListener("DOMContentLoaded",(function(){function e(e){this.type=e}e.prototype.init=function(){var e=this,t=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r],i=n.dataset.da.trim().split(","),a={};a.element=n,a.parent=n.parentNode,a.destination=document.querySelector(i[0].trim()),a.breakpoint=i[1]?i[1].trim():"767",a.place=i[2]?i[2].trim():"last",a.index=this.indexInParent(a.parent,a.element),this.оbjects.push(a)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,r){return Array.prototype.indexOf.call(r,e)===t}));for(var s=function(r){var n=e.mediaQueries[r],i=String.prototype.split.call(n,","),a=window.matchMedia(i[0]),s=i[1],l=Array.prototype.filter.call(e.оbjects,(function(e){return e.breakpoint===s}));a.addListener((function(){t.mediaHandler(a,l)})),e.mediaHandler(a,l)},l=0;l<this.mediaQueries.length;l++)s(l)},e.prototype.mediaHandler=function(e,t){if(e.matches)for(var r=0;r<t.length;r++){var n=t[r];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(var i=0;i<t.length;i++){var a=t[i];a.element.classList.contains(this.daClassname)&&this.moveBack(a.parent,a.element,a.index)}},e.prototype.moveTo=function(e,t,r){t.classList.add(this.daClassname),"last"===e||e>=r.children.length?r.insertAdjacentElement("beforeend",t):"first"!==e?r.children[e].insertAdjacentElement("beforebegin",t):r.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,r){t.classList.remove(this.daClassname),void 0!==e.children[r]?e.children[r].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){var r=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(r,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()}))},325:function(e,t){},327:function(e,t,r){"use strict";r.r(t);r(313),r(314),r(315),r(316),r(317),r(318);var n=r(334),i=r(330),a=r(331),s=r(332),l=r(333);n.a.use([i.a,a.a,s.a,l.a]),window.addEventListener("DOMContentLoaded",(function(){new n.a(".swiper-banner",{slidesPerView:1,spaceBetween:0,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,autoplay:{delay:4e3},pagination:{el:".banner-pagination",clickable:!0}}),new n.a(".swiper-project",{slidesPerView:2,initialSlide:1,centeredSlides:!0,spaceBetween:0,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".project-pagination",type:"fraction"},navigation:{nextEl:".project-next",prevEl:".project-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1.5},992:{slidesPerView:1.6},1400:{slidesPerView:1.7},1600:{slidesPerView:2}}}),new n.a(".swiper-process",{slidesPerView:4,initialSlide:1,spaceBetween:30,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".process-next",prevEl:".process-prev"},breakpoints:{0:{slidesPerView:1,centeredSlides:!0},480:{centeredSlides:!1,slidesPerView:1.5},768:{slidesPerView:2},992:{slidesPerView:3},1600:{slidesPerView:4}}}),new n.a(".swiper-letter",{slidesPerView:2,initialSlide:1,centeredSlides:!0,spaceBetween:0,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".letter-pagination",type:"fraction"},navigation:{nextEl:".letter-next",prevEl:".letter-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1.5},992:{slidesPerView:1.6},1400:{slidesPerView:1.7},1600:{slidesPerView:2}}}),new n.a(".swiper-client",{slidesPerView:4,initialSlide:1,spaceBetween:40,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".client-pagination",type:"fraction"},navigation:{nextEl:".client-next",prevEl:".client-prev"},breakpoints:{0:{slidesPerView:1},480:{slidesPerView:2},767:{slidesPerView:3},1199:{slidesPerView:4}}}),new n.a(".swiper-article-news",{slidesPerView:2,spaceBetween:120,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".article-nav-2",clickable:!0},breakpoints:{0:{slidesPerView:1,spaceBetween:40},992:{slidesPerView:2,spaceBetween:120}}}),new n.a(".swiper-article-design",{slidesPerView:2,spaceBetween:120,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".article-nav-3",clickable:!0},breakpoints:{0:{slidesPerView:1,spaceBetween:40},992:{slidesPerView:2,spaceBetween:120}}}),new n.a(".swiper-article-talk",{slidesPerView:2,spaceBetween:120,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,pagination:{el:".article-nav-4",clickable:!0},breakpoints:{0:{slidesPerView:1,spaceBetween:40},992:{slidesPerView:2,spaceBetween:120}}}),new n.a(".swiper-tags",{slidesPerView:"auto",spaceBetween:20,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next",prevEl:".tags__prev"},breakpoints:{0:{spaceBetween:10},767:{spaceBetween:15},991:{spaceBetween:20}}}),new n.a(".swiper-tags-2",{slidesPerView:"auto",spaceBetween:20,observeParents:!0,observer:!0,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next-2",prevEl:".tags__prev-2"},breakpoints:{0:{spaceBetween:10},767:{spaceBetween:15},991:{spaceBetween:20}}});var e=new n.a(".gallery-thumbs",{spaceBetween:10,autoplay:!0,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{0:{slidesPerView:2},575:{slidesPerView:4}}});new n.a(".gallery-top",{spaceBetween:0,autoplay:!0,navigation:{nextEl:".product__next",prevEl:".product__prev"},thumbs:{swiper:e}})}));r(319),r(320);var o=r(91),c=r.n(o);window.addEventListener("DOMContentLoaded",(function(){c()({touchNavigation:!0,loop:!0,autoplayVideos:!0})}));r(321),r(322),r(323),r(324),r(325),r(326)}});