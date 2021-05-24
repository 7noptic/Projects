<!doctype html>
<html <?php language_attributes() ?>>

<head>
  <meta charset="<?php bloginfo('charset') ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="<?php echo DOMEO_DIR_IMG ?>/favicon/favicon.ico">
  <link rel="icon" type="image/vnd.microsoft.icon" href="<?php echo DOMEO_DIR_IMG ?>/favicon/favicon.ico">
  <link rel="icon" type="image/x-icon" href="<?php echo DOMEO_DIR_IMG ?>/favicon/favicon.ico">
  <link rel="icon" href="<?php echo DOMEO_DIR_IMG ?>/favicon/favicon.ico">
  <title><?php the_title()?></title>
  <?php wp_head(  )?>
</head>
<body>
<header class="header">
    <div class="container">
    
      <div class="row">
        <div class="col-1 d-none d-xxl-flex align-items-center">
          <a href="<?php echo get_home_url()?>" class="logo">
            <img src="<?php echo DOMEO_DIR_IMG ?>/logo.svg" alt="">
          </a>
        </div>
        <div class="col-12 col-xxl-10 d-flex justify-content-between align-items-center">
          <div class="header__left">
            <a href="#" class="header__city d-none d-lg-flex align-items-center js-region">
              <img src="<?php echo DOMEO_DIR_IMG ?>/map.svg" alt="map" class="js-region">
              <span class="js-region js-region-city">
                Москва
              </span>
            </a>

            <div class="header__search">

              <div class="btn header__search-img js-search">
                <img src="<?php echo DOMEO_DIR_IMG ?>/search.svg" class="js-search" alt="">
              </div>
              <?php get_search_form(); ?>
            </div>
          </div>
          <nav data-da=".adaptive-menu__check,767,1">
          
          <?php wp_nav_menu([
            'theme_location' => 'header',
            'container' => false,
            'menu_class' => 'header__menu',
          ]) ?> 

        </nav>
          <!-- 
          <ul class="header__menu" >
            <li><a href="#">Стротельство и ремонт</a></li>
            <li><a href="#">Компании</a>
              <ul>
                <li><a href="#">Новокосино</a> </li>
                <li><a href="#">Новокосино</a> </li>
                <li><a href="#">Новокосино</a> </li>
                <li><a href="#">Перово</a> </li>
                <li><a href="#">Перово</a> </li>
                <li><a href="#">Перово</a> </li>
                <li><a href="#">Измайлово</a> </li>
                <li><a href="#">Измайлово</a> </li>
                <li><a href="#">Измайлово</a> </li>
                <li><a href="#">Сокольники</a> </li>
                <li><a href="#">Сокольники</a> </li>
                <li><a href="#">Сокольники</a> </li>
                <li><a href="#">Соколиная гора</a> </li>
                <li><a href="#">Соколиная гора</a> </li>
                <li><a href="#">Соколиная гора</a> </li>
                <li><a href="#">Шоссе Энтузиастов</a> </li>
                <li><a href="#">Шоссе Энтузиастов</a> </li>
                <li><a href="#">Шоссе Энтузиастов</a> </li>
                <li><a href="#">Щелковская</a> </li>
                <li><a href="#">Щелковская</a> </li>
                <li><a href="#">Щелковская</a> </li>
                <li><a href="#">Щелковская</a> </li>
                <li><a href="#">Щелковская</a> </li>
              </ul>
            </li>
            <li><a href="#">Все отзывы</a></li>
            <li><a href="#">О проекте</a></li>
          </ul>
-->
          <a href="#" class="btn header__btn js-reviews">
            ОСТАВИТЬ ОТЗЫВ
          </a>

          <div class="header__burger js-modal-header">
            <img src="<?php echo DOMEO_DIR_IMG ?>/bur.svg" alt="" class="js-modal-header">
          </div>

        </div>
        <div class="col-1 d-none d-xxl-flex align-items-center">
          <a href="#" class="btn btn-border header__btn-reviews js-personal-data">ДОБАВИТЬ КОМПАНИЮ</a>
        </div>
      </div>
    </div>
</header>