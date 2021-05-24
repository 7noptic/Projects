<?php
/*
Template Name: Страница компании
//Template Post Type: post, page, product, company
*/
?>
<?php get_header()?>
<main>

    <?php get_template_part('template-parts/sections/headcrumbs'); ?>

    <section class="reviews-company">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10">
            <div class="row">
              <div class="col-12">
                <h1 class="title title-left">Отзывы о компании <?php echo get_field('company-name')?></h1>
                <nav class="tab-nav"><a href="#" class="tab-nav__link js-reviews-company-link">Отзывы клиентов</a> <a href="#" class="tab-nav__link js-reviews-company-link">Отзывы сотрудников</a> <a href="#" class="tab-nav__link js-reviews-company-link">Отзывы работодателей</a></nav>
              </div>
              <div class="col-12 col-xl-8">
                <div class="reviews-company__data">
                  <div class="reviews-company__img">
                      <?php $image = get_field('company-img');
                            $image_url = $image['sizes']['company'];

                            if( !empty($image) ): ?>

                            <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                            <?php endif; ?>
                  </div>
                  <div class="reviews-company__rating"><span>Рейтинг <b><?php echo get_field('company-rating') ?></b></span>
                    <ul class="rating-star">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                    </ul>
                    <div class="reviews-company__list reviews-company__list-1"><?php echo get_field('company-count-review') ?> отзывов</div>
                    <div class="reviews-company__list reviews-company__list-2"> <?php the_views ();?></div><a href="#" class="btn reviews-company__btn js-reviews">ОСТАВИТЬ ОТЗЫВ</a>
                   
                   
                  </div>
                  <div class="reviews-company__info">
                    <div class="reviews-company__row">
                      <div class="reviews-company__left">Сайт:</div>
                      <div class="reviews-company__right"><a href="https://<?php echo get_field('company-site') ?>" target="_blank"><?php echo get_field('company-site') ?></a></div>
                    </div>
                    <div class="reviews-company__row">
                      <div class="reviews-company__left">Телефон:</div>
                      <div class="reviews-company__right"> <a href="tel:<?php echo get_field('company-tel') ?>"><?php echo get_field('company-tel') ?></a></div>
                    </div>
                    <div class="reviews-company__row">
                      <div class="reviews-company__left">Адрес:</div>
                      <div class="reviews-company__right"><?php echo get_field('company-addres')?></div>
                    </div>
                    <div class="reviews-company__row">
                      <div class="reviews-company__left">Метро:</div>
                      <div class="reviews-company__right"><?php echo get_field('company-metro')?></div>
                    </div>
                    <div class="reviews-company__row">
                      <div class="reviews-company__left">Район:</div>
                      <div class="reviews-company__right"><?php echo get_field('company-district')?></div>
                    </div>
                  </div>
                </div>
                <div class="tab js-reviews-company-tab">
                <?php 
                  $reviews = get_field('reviews');
                  foreach($reviews as $review) : ?>
                  <?php if ($review['reviews-select-author'] == 'Клиент') :?>
                    <div class="reviews-card">
                  
                  <header class="reviews-card__header">
                    <div class="reviews-card__img reviews-card__img-big">
                    <?php  $image = $review['reviews-ava'];
                                                    $image_url = $image['sizes']['ava'];

                                                    if( !empty($image) ): ?>

                                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                                    <?php endif; ?>
                    </div>
                    <div class="reviews-card__info reviews-card__info-big">
                      <div class="reviews-card__name"><?= $review['reviews-name']?></div>
                      <div class="reviews-card__biginfo">
                        <div class="reviews-card__biginfo-l">
                          <div class="reviews-card__num">Договор: <?= $review['reviews-contract-num']?></div>
                          <div class="reviews-card__rating">
                          <input type='hidden' value='<?= $review['reviews-rating']?>' class="reviews-card__rating-input">
                            <ul class="rating-star">
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div class="reviews-card__biginfo-r">
                          <div class="reviews-card__list reviews-card__list-1"><?= $review['reviews-city']?></div>
                          <div class="reviews-card__list reviews-card__list-2"><?= $review['reviews-type']?></div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div class="reviews-card__text"><?= $review['reviews-text']?></div>
                  
                  <?php 
                    $images = $review['reviews-img'];
                    $size = 'full'; // (thumbnail, medium, large, full или произвольный размер)

                    if( $images ): ?>
                    <div class="reviews-card__images">
                          <?php foreach( $images as $image ): ?>
                                  <a href="<?php echo $image['url']; ?> "class="glightbox" data-gallery="<?= $review['reviews-contract-num']?>">
                                       <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
                                  </a>
                          <?php endforeach; ?>
                  </div>

                  <?php endif; ?>
                    
                </div>
                <?php endif; ?>
                <?php endforeach; ?>

                 
                </div>
                <div class="tab js-reviews-company-tab">
                <?php 
                  $reviews = get_field('reviews');
                  foreach($reviews as $review) : ?>
                  <?php if ($review['reviews-select-author'] == 'Сотрудник') :?>
                    <div class="reviews-card">
                  
                  <header class="reviews-card__header">
                    <div class="reviews-card__img reviews-card__img-big">
                    <?php  $image = $review['reviews-ava'];
                                                    $image_url = $image['sizes']['ava'];

                                                    if( !empty($image) ): ?>

                                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                                    <?php endif; ?>
                    </div>
                    <div class="reviews-card__info reviews-card__info-big">
                      <div class="reviews-card__name"><?= $review['reviews-name']?></div>
                      <div class="reviews-card__biginfo">
                        <div class="reviews-card__biginfo-l">
                          <div class="reviews-card__num">Договор: <?= $review['reviews-contract-num']?></div>
                          <div class="reviews-card__rating">
                          <input type='hidden' value='<?= $review['reviews-rating']?>' class="reviews-card__rating-input">
                            <ul class="rating-star">
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div class="reviews-card__biginfo-r">
                          <div class="reviews-card__list reviews-card__list-1"><?= $review['reviews-city']?></div>
                          <div class="reviews-card__list reviews-card__list-2"><?= $review['reviews-type']?></div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div class="reviews-card__text"><?= $review['reviews-text']?></div>
                  
                  <?php 
                    $images = $review['reviews-img'];
                    $size = 'full'; // (thumbnail, medium, large, full или произвольный размер)

                    if( $images ): ?>
                    <div class="reviews-card__images">
                          <?php foreach( $images as $image ): ?>
                            <a href="<?php echo $image['url']; ?> "class="glightbox" data-gallery="<?= $review['reviews-contract-num']?>">
                                       <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
                                  </a>
                          <?php endforeach; ?>
                  </div>

                  <?php endif; ?>
                   
                </div>
                <?php endif; ?>
                <?php endforeach; ?>
                </div>
                <div class="tab js-reviews-company-tab">
                <?php 
                  $reviews = get_field('reviews');
                  foreach($reviews as $review) : ?>
                  <?php if ($review['reviews-select-author'] == 'Работодатель') :?>
                    <div class="reviews-card">
                  
                  <header class="reviews-card__header">
                    <div class="reviews-card__img reviews-card__img-big">
                    <?php  $image = $review['reviews-ava'];
                                                    $image_url = $image['sizes']['ava'];

                                                    if( !empty($image) ): ?>

                                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                                    <?php endif; ?>
                    </div>
                    <div class="reviews-card__info reviews-card__info-big">
                      <div class="reviews-card__name"><?= $review['reviews-name']?></div>
                      <div class="reviews-card__biginfo">
                        <div class="reviews-card__biginfo-l">
                          <div class="reviews-card__num">Договор: <?= $review['reviews-contract-num']?></div>
                          <div class="reviews-card__rating">
                          <input type='hidden' value='<?= $review['reviews-rating']?>' class="reviews-card__rating-input">
                            <ul class="rating-star">
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li class="active"></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div class="reviews-card__biginfo-r">
                          <div class="reviews-card__list reviews-card__list-1"><?= $review['reviews-city']?></div>
                          <div class="reviews-card__list reviews-card__list-2"><?= $review['reviews-type']?></div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div class="reviews-card__text"><?= $review['reviews-text']?></div>
                  
                  <?php 
                    $images = $review['reviews-img'];
                    $size = 'full'; // (thumbnail, medium, large, full или произвольный размер)

                    if( $images ): ?>
                    <div class="reviews-card__images">
                          <?php foreach( $images as $image ): ?>
                            <?php $image = get_field('company-img');
                            $image_url_full = $image['sizes']['full'];
                            $image_url = $image['sizes']['reviewimg'];
                            if( !empty($image) ): ?>

                            <a href="<?php echo $image['url']; ?> "class="glightbox" data-gallery="<?= $review['reviews-contract-num']?>">
                                       <img src="<?php echo $image['sizes']['reviewimg']; ?>" alt="<?php echo $image['alt']; ?>" />
                                  </a>
                            <?php endif; ?>
                          <?php endforeach; ?>
                  </div>
                  <?php endif; ?>
                </div>
                <?php endif; ?>
                <?php endforeach; ?>
                
                </div>
              </div>
              <div class="col-12 col-xl-4">
              
                <div class="map more-block__map">
                <?php wp_reset_query()?>
                  
                  <?php echo get_field('company-map');?>
                  </div>

                  <?php get_template_part('template-parts/blocks/more-interes'); ?>

                  <?php get_template_part('template-parts/blocks/more-last-review'); ?>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <?php get_template_part('template-parts/sections/tags'); ?>

    <?php get_template_part('template-parts/sections/region'); ?>

    <?php get_template_part('template-parts/sections/banner'); ?>
  </main>
<?php get_footer()?>