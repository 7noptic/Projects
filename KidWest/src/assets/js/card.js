window.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card'),
        modalOneClickImg = document.querySelector('.modal-one-click__img img'),
        modalOneClickName = document.querySelector('.modal-one-click__name'),
        modalOneClickPrice = document.querySelector('.js-modal-one-click__price'),
        modalOneClickBtn = document.querySelectorAll('.js-one-click'),
        modalOneClickCount = document.querySelector('.js-modal-one-click__num'),
        modalOneClickColor = document.querySelector('.js-one-click-color'),

        modalInputName = document.querySelector('#js-modal-one-click-name'),
        modalInputPrice = document.querySelector('#js-modal-one-click-price'),
        modalInputUrl = document.querySelector('#js-modal-one-click-url');


    document.addEventListener('click', (e) => {
        if (e.target && (e.target.classList.contains('card__heart') || e.target.classList.contains('js-card-heart'))) {
            e.preventDefault();
        }
    })
    if (cards) {

        toggleDescription();

        function toggleDescription() {
            for (let i = 0; i < cards.length; i++) {
                let linkOne = cards[i].querySelector('.js-descr-link'),
                    contentOne = cards[i].querySelector('.js-descr-content'),
                    linkTwo = cards[i].querySelector('.js-char-link'),
                    contentTwo = cards[i].querySelector('.js-char-content');

                linkOne.onclick = function (x) {
                    return function () {
                        contentOne.classList.toggle('active');
                        linkOne.classList.toggle('active');
                    }
                }(i)
                contentOne.onclick = function (x) {
                    return function () {
                        contentOne.classList.toggle('active');
                        linkOne.classList.toggle('active');
                    }
                }(i)
                linkTwo.onclick = function (x) {
                    return function () {
                        contentTwo.classList.toggle('active');
                        linkTwo.classList.toggle('active');
                    }
                }(i)
                contentTwo.onclick = function (x) {
                    return function () {
                        contentTwo.classList.toggle('active');
                        linkTwo.classList.toggle('active');
                    }
                }(i)

            }
        }

    }
    /* modal one click */


    if (cards) {
        getCardInfoToModalOneClick(cards);
        document.addEventListener('click', (e) => {

            if (e.target && e.target.classList.contains('js-modal-one-click__minus')) {
                e.preventDefault();

                if (modalOneClickCount.value > 0) {
                    modalOneClickCount.value = +modalOneClickCount.value - 1;


                }
            }
            if (e.target && e.target.classList.contains('js-modal-one-click__plus')) {
                e.preventDefault();
                modalOneClickCount.value = +modalOneClickCount.value + 1;
            }

        });

    }


    function getCardInfoToModalOneClick(card) {
        for (let i = 0; i < card.length; i++) {
            let cardPrice = card[i].querySelector('.card-price__price'),
                cardName = card[i].querySelector('.card__name'),
                cardCount = card[i].querySelector('.card-count__num'),
                cardCountMinus = card[i].querySelector('.card-count__minus'),
                cardCountPlus = card[i].querySelector('.card-count__plus'),
                cardImg = card[i].querySelector('.card__img img'),
                cardColor = card[i].querySelectorAll('.card-color__item');


            for (let j = 0; j < cardColor.length; j++) {
                if (cardColor[j].classList.contains('active')) {
                    modalOneClickColor.style.backgroundColor = cardColor[j].style.backgroundColor;
                }
                cardColor[j].onclick = function (x) {
                    return function () {
                        for (let x = 0; x < cardColor.length; x++) {
                            if (cardColor[x] == cardColor[j]) {
                                cardColor[x].classList.add('active');
                            } else {
                                cardColor[x].classList.remove('active');

                            }
                        }
                    }
                }(i)

                modalOneClickBtn[i].onclick = function (x) {
                    return function () {
                        for (let j = 0; j < cardColor.length; j++) {
                            if (cardColor[j].classList.contains('active')) {
                                modalOneClickColor.style.backgroundColor = cardColor[j].style.backgroundColor;
                                modalOneClickColor.classList.add('active');
                            }
                        }
                        modalOneClickCount.value = Number(cardCount.innerHTML);

                        modalOneClickName.innerHTML = cardName.innerHTML;
                        modalInputName.value = cardName.innerHTML;

                        modalOneClickPrice.innerHTML = cardPrice.innerHTML;
                        modalInputPrice.value = cardPrice.innerHTML;

                        modalOneClickImg.src = cardImg.src;
                        modalInputUrl.value = cardName.href;
                    }
                }(i)
                cardCountMinus.onclick = function (x) {
                    return function () {
                        if (+cardCount.innerHTML > 0) {
                            cardCount.innerHTML = +cardCount.innerHTML - 1;
                        }

                    }
                }(i)

                cardCountPlus.onclick = function (x) {
                    return function () {
                        cardCount.innerHTML = +cardCount.innerHTML + 1;

                    }
                }(i)

            }
        }
    }
});