window.addEventListener('DOMContentLoaded', function () {
    let orderNum = document.querySelectorAll('.js-order-num');
    if (orderNum) {
        for (let i = 0; i < orderNum.length; i++) {
            orderNum[i].innerHTML = i + 1;
        }
    }
});