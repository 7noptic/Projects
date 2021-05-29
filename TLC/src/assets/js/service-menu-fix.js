import cookie from './cookie';
window.addEventListener('DOMContentLoaded', function () {
    function setCookie(cname, cvalue) {
        let d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    let serviceMenu = document.querySelector('.js-service-nav');
    if(getCookie('service-list-id') == ''){
        setCookie('service-list-id', 0)
    }
    if (serviceMenu) {
        let serviceMenuLink = serviceMenu.querySelectorAll('.js-service-nav__link');
        if (serviceMenuLink) {
            serviceMenuLink[getCookie('service-list-id')].classList.add('active');
        }
        serviceMenu.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains('js-service-nav__link')) {
                for (let i = 0; i < serviceMenuLink.length; i++) {
                    serviceMenuLink[i].classList.remove('active');
                    if (e.target == serviceMenuLink[i]) {
                        serviceMenuLink[i].classList.add('active');
                        setCookie('service-list-id', [i])
                    }
                }

            }

        });
    }

});