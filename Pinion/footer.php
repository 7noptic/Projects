<footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xxl-10">
          <div class="row align-items-center">
            <div class="col-12 col-sm-6 col-lg-2 order-1">
              <a href="index.html" class="logo">
                <img src="<?php echo DOMEO_DIR_IMG ?>/logo.svg" alt="">
              </a>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center order-4 order-lg-2">
              <nav>
              <?php wp_nav_menu([
              'theme_location' => 'footer',
              'container' => false,
              'menu_class' => 'footer__menu',
              ])
              ?>
               
              </nav>
            </div>
            <div class="col-6 col-sm-3 col-lg-2 order-2">
              <a href="#" class="btn footer__btn js-reviews">ОСТАВИТЬ ОТЗЫВ</a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2 order-3">
              <a href="#" class="btn btn-border footer__btn js-personal-data">ДОБАВИТЬ КОМПАНИЮ</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </footer>



  <!-- MODAL -->
  <aside class="js-sidebars">
    <section class="modal adaptive-menu">
      <div class="modal__wrapper adaptive-menu__check">
        <a href="#" class="modal__exit-2">
          <img src="<?php echo DOMEO_DIR_IMG ?>/mex.svg" alt="" class="adaptive-menu__exit">
        </a>
      </div>

    </section>
    <section class="modal modal-region">
      <div class="modal__wrapper modal-region__wrapper">
        <h2 class="modal__title modal-region__title">Выбрать район</h2>
        <div class="modal-region__row">
          <p class="modal-region__city">
            Ваш город: <span class="js-select-city">Москва</span>?
          </p>
          <a href="#" class="btn modal-region__btn js-region-close">
            да
          </a>

        </div>

        <ul class="modal-region__list">
          <li><a href="#" class="modal-region__link">Москва</a></li>
          <li><a href="#" class="modal-region__link">Домодедово</a></li>
          <li><a href="#" class="modal-region__link">Химки</a></li>
          <li><a href="#" class="modal-region__link">Мытищи</a></li>
          <li><a href="#" class="modal-region__link">Люберцы</a></li>
          <li><a href="#" class="modal-region__link">Коломна</a></li>
          <li><a href="#" class="modal-region__link">Серпухов</a></li>
          <li><a href="#" class="modal-region__link">Подольск</a></li>
          <li><a href="#" class="modal-region__link">Балашиха</a></li>
          <li><a href="#" class="modal-region__link">Пушкино</a></li>
          <li><a href="#" class="modal-region__link">Раменское</a></li>
          <li><a href="#" class="modal-region__link">Королев</a></li>
          <li><a href="#" class="modal-region__link">Ногинск</a></li>
          <li><a href="#" class="modal-region__link">Щелково</a></li>
          <li><a href="#" class="modal-region__link">Электросталь</a></li>
          <li><a href="#" class="modal-region__link">Орехово-Зуево</a></li>
          <li><a href="#" class="modal-region__link">Сергиев Посад</a></li>
         
        </ul>

        <a href="#" class="modal__exit">

          <img src="<?php echo DOMEO_DIR_IMG ?>/mex.svg" alt="" class="modal-region__exit">
        </a>
      </div>
    </section>

   

    <section class="modal modal-reviews">
      <div class="modal__wrapper modal-reviews__wrapper">
        <a href="#" class="modal__exit">
          <img src="<?php echo DOMEO_DIR_IMG ?>/mex.svg" alt="" class="modal-reviews__exit">
        </a>

        <h3 class="modal__title">
          Оставить отзыв
        </h3>
        <div class="modal-form">
          <form action="POST">
            <div class="modal-form__wrapper">

              <span>
                <input type="text" class="form-control form__input" placeholder="Имя">
              </span>

              <span>
                <input type="email" placeholder="Email" class="form-control form__input">
              </span>
              <span>
                <input type="text" class="form-control form__input" placeholder="Наименование услуги">
              </span>
              <span>
                <input type="number" placeholder="№ договора" class="form-control form__input">
              </span>
              <span>
                <textarea name="your-reviews-2" cols="30" rows="10" class="form-control form__input form__textarea-long" placeholder="Отзыв"></textarea>
              </span>
              <span>
                <label for="your-logo-2" class="form__upload">Загрузить фото</label>
                <input type="file" id="your-logo-2" class="form-control d-none">
              </span>


              <div class="modal-form__star">
                Ваша оценка
                <ul class="rating-star rating-star__star js-rating js-rating-modal">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <input type="hidden" class="form-control" value="0" name="rating" id="js-rating-modal">
              </div>
              <span>
                <button type="submit" class="btn modal-form__btn js-push">ОТПРАВИТЬ</button>
              </span>
            </div>
            <div class="modal-form__agreement">
              Я согласен условиями предоставления
              услуг и обработкой моих персональных
              данных при нажатии “Отправить”
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="modal modal-personal">
      <div class="modal__wrapper modal-personal__wrapper">
        <a href="#" class="modal__exit">
          <img src="<?php echo DOMEO_DIR_IMG ?>/mex.svg" alt="" class="modal-personal__exit">
        </a>
        <h3 class="modal__title">
          Добавить компанию
        </h3>
        <div class="modal-form">
          <form action="POST">
            <div class="modal-form__wrapper">
              <span>
                <input type="text" class="form-control form__input" placeholder="Название компании">
              </span>
              <span>
                <input type="text" class="form-control form__input" placeholder="Сайт">
              </span>
              <span>
                <input type="tel" class="form-control form__input" placeholder="Телефон">
              </span>
              <span>
                <input type="email" class="form-control form__input" placeholder="Email">
              </span>
              <span>
                <input type="text" class="form-control form__input" placeholder="Адрес">
              </span>
              <span>
                <input type="text" class="form-control form__input" placeholder="Метро">
              </span>
              <span>
                <input type="text" class="form-control form__input" placeholder="Район">
              </span>

              <span>
                <label for="your-logo" class="form__upload">Загрузить лого</label>
                <input type="file" id="your-logo" class="form-control d-none">
              </span>


              <span>
                <button type="submit" class="btn modal-form__btn js-push">ОТПРАВИТЬ</button>
              </span>
              <div class="modal-form__agreement">
                Я согласен условиями предоставления
                услуг и обработкой моих персональных
                данных при нажатии “Отправить”
              </div>

            </div>

          </form>
        </div>
      </div>
    </section>


  </aside>
  <aside class="push">
    <div class="push-item">
        Ваша заявка успешна принята и находится в обработке!
    </div>
</aside>
  <!-- !MODAL -->
  <?php wp_footer() ?>
</body>

</html>