<?php
/*
Template Name: Страница отзывов по типу ремонта
//Template Post Type: post, page, product, company
*/
?>
<?php get_header()?>

<main>

<?php get_template_part('template-parts/sections/headcrumbs'); ?>
    <section class="banner">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-xxl-10">
            <div class="row">
              <div class="col-12 col-lg-6 d-flex align-items-center">
                <div class="banner__info">
                  <h2 class="banner__subtitle">МОСКВА</h2>
                  <h1 class="banner__title"><?php the_title(); ?></h1>
                  <div class="banner-btns"><a href="#" class="btn header__btn banner__btn-2 js-reviews">ОСТАВИТЬ ОТЗЫВ </a><a href="#" class="btn btn-border banner__btn js-personal-data">ДОБАВИТЬ КОМПАНИЮ</a></div>
                </div>
              </div>
              <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div class="banner__img"><?php the_post_thumbnail(); ?>
                <div class="banner__img-1">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-2">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-3">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-4">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-4">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-5">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-6">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b1.svg" alt="">
                  </div>
                  <div class="banner__img-7">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b2.svg" alt="">
                  </div>
                  <div class="banner__img-8">
                    <img src="<?php echo DOMEO_DIR_IMG ?>/b2.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="reviews">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10">
            <div class="row justify-content-center">
              <div class="col-12">
                <h2 class="title"><?= get_field('title-remont');?></h2>
              </div>
              
              <?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 0 ) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
            
            <?php 
                  $reviews = get_field('reviews');
                  foreach($reviews as $review) : ?>
                  
                  <?php wp_reset_query();?>
                    
                  <?php if($review['reviews-type'] == get_field('page-remont-type')) : ?>
                    
                  <div class="col-12 col-md-6 col-xxl-4">
                <div class="reviews-card">
                  <header class="reviews-card__header">
                    <div class="reviews-card__img"> <?php  $image = $review['reviews-ava'];
                                                    $image_url = $image['sizes']['ava'];

                                                    if( !empty($image) ): ?>

                                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                                    <?php endif; ?></div>
                    <div class="reviews-card__info">
                      <div class="reviews-card__name"><?= $review['reviews-name']?></div>
                      <div class="reviews-card__pzdc reviews-card__pzdc-1"><?= $review['reviews-city']?></div>
                      <div class="reviews-card__pzdc reviews-card__pzdc-2"><?= $review['reviews-type']?></div>

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
                  </header>
                  <div class="reviews-card__text"><?= $review['reviews-text']?></div>
                </div>
              </div>
                <?php endif; ?>
                <?php endforeach; ?>

            <?php endwhile; ?>
            <?php wp_reset_query(  );
                            wp_reset_postdata(  );?>
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="reviews-btn">
                <a href="#" class="btn reviews-btn__btn js-reviews">ОСТАВИТЬ ОТЗЫВ </a>
                <a href="<?php echo get_field('all-reviews', 84, get_queried_object() ) ?>" class="btn btn-border reviews-btn__btn">
                                    ВСЕ ОТЗЫВЫ
                                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-xxl-10">
            <div class="row">
              <div class="col-12">
                <h2 class="title"><?= get_field('remont-title', 67); ?></h2>
              </div>
              <div class="col-12">
                <nav class="faq-nav"><a href="#" class="js-faq-link">Черновой</a> <a href="#" class="js-faq-link">Косметический</a> <a href="#" class="js-faq-link">Капитальный</a> <a href="#" class="js-faq-link">Элитный</a></nav>
              </div>
              <div class="col-12">
              <?php ?>
                <div class="tab js-faq-content">
                <?php if ( have_rows( 'remont-data', 67, get_queried_object() ) ): ?>
                  
                
								<?php while ( have_rows( 'remont-data', 67, get_queried_object() ) ): the_row();

									// переменные
									$remont_type_name = get_sub_field( 'remont-type-name', 67 );
									$remont_tab   = get_sub_field( 'remont-tab', 67 );

									?>
                  <?php if ( $remont_tab == 'Черновой') : ?>
                <div class="faq-item">
                    <div class="faq-item__header faq-item__header-arr"><?= $remont_type_name; ?></div>
                    <div class="faq-item__content tab">
                      
                      <?php if ( have_rows( 'remont-types', 67, get_queried_object() ) ): ?>
                      <?php while ( have_rows( 'remont-types', 67, get_queried_object() ) ): the_row();
                      $remont_name = get_sub_field( 'remont-name', 67 );
                      $remont_price  = get_sub_field( 'remont-price', 67 );

                      ?>
                      <div class="faq-item__row">
                        <div class="faq-item__text"><?= $remont_name; ?></div>
                        <div class="faq-item__text-b"><?= $remont_price; ?> ₽/м2</div>
                        </div>
                        <?php endwhile; ?>
							<?php endif; ?>
                      
                      
                    </div>
                  </div>
                                 

                  <?php endif; ?>
								<?php endwhile; ?>
                
							<?php endif; ?>
                 
                  
                </div>
                <div class="tab js-faq-content">
                <?php if ( have_rows( 'remont-data', 67, get_queried_object() ) ): ?>
                  
                
								<?php while ( have_rows( 'remont-data', 67, get_queried_object() ) ): the_row();

									// переменные
									$remont_type_name = get_sub_field( 'remont-type-name', 67 );
									$remont_tab   = get_sub_field( 'remont-tab', 67 );

									?>
                  <?php if ( $remont_tab == 'Косметический') : ?>
                <div class="faq-item">
                    <div class="faq-item__header faq-item__header-arr"><?= $remont_type_name; ?></div>
                    <div class="faq-item__content tab">
                      
                      <?php if ( have_rows( 'remont-types', 67, get_queried_object() ) ): ?>
                      <?php while ( have_rows( 'remont-types', 67, get_queried_object() ) ): the_row();
                      $remont_name = get_sub_field( 'remont-name' , 67);
                      $remont_price  = get_sub_field( 'remont-price', 67 );

                      ?>
                      <div class="faq-item__row">
                        <div class="faq-item__text"><?= $remont_name; ?></div>
                        <div class="faq-item__text-b"><?= $remont_price; ?> ₽/м2</div>
                        </div>
                        <?php endwhile; ?>
							<?php endif; ?>
                      
                      
                    </div>
                  </div>
                                 

                  <?php endif; ?>
								<?php endwhile; ?>
                
							<?php endif; ?>
                 
                  
                </div>
                <div class="tab js-faq-content">
                <?php if ( have_rows( 'remont-data', 67, get_queried_object() ) ): ?>
                  
                
								<?php while ( have_rows( 'remont-data', 67, get_queried_object() ) ): the_row();

									// переменные
									$remont_type_name = get_sub_field( 'remont-type-name', 67 );
									$remont_tab   = get_sub_field( 'remont-tab' , 67);

									?>
                  <?php if ( $remont_tab == 'Капитальный') : ?>
                <div class="faq-item">
                    <div class="faq-item__header faq-item__header-arr"><?= $remont_type_name; ?></div>
                    <div class="faq-item__content tab">
                      
                      <?php if ( have_rows( 'remont-types', 67, get_queried_object() ) ): ?>
                      <?php while ( have_rows( 'remont-types', 67, get_queried_object() ) ): the_row();
                      $remont_name = get_sub_field( 'remont-name' , 67);
                      $remont_price  = get_sub_field( 'remont-price', 67 );

                      ?>
                      <div class="faq-item__row">
                        <div class="faq-item__text"><?= $remont_name; ?></div>
                        <div class="faq-item__text-b"><?= $remont_price; ?> ₽/м2</div>
                        </div>
                        <?php endwhile; ?>
							<?php endif; ?>
                      
                      
                    </div>
                  </div>
                                 

                  <?php endif; ?>
								<?php endwhile; ?>
                
							<?php endif; ?>
                 
                  
                </div>
                <div class="tab js-faq-content">
                <?php if ( have_rows( 'remont-data', 67, get_queried_object() ) ): ?>
                  
                
								<?php while ( have_rows( 'remont-data', 67, get_queried_object() ) ): the_row();

									// переменные
									$remont_type_name = get_sub_field( 'remont-type-name' , 67);
									$remont_tab   = get_sub_field( 'remont-tab', 67 );

									?>
                  <?php if ( $remont_tab == 'Элитный') : ?>
                <div class="faq-item">
                    <div class="faq-item__header faq-item__header-arr"><?= $remont_type_name; ?></div>
                    <div class="faq-item__content tab">
                      
                      <?php if ( have_rows( 'remont-types', 67, get_queried_object() ) ): ?>
                      <?php while ( have_rows( 'remont-types', 67, get_queried_object() ) ): the_row();
                      $remont_name = get_sub_field( 'remont-name', 67 );
                      $remont_price  = get_sub_field( 'remont-price', 67 );

                      ?>
                      <div class="faq-item__row">
                        <div class="faq-item__text"><?= $remont_name; ?></div>
                        <div class="faq-item__text-b"><?= $remont_price; ?> ₽/м2</div>
                        </div>
                        <?php endwhile; ?>
							<?php endif; ?>
                      
                      
                    </div>
                  </div>
                                 

                  <?php endif; ?>
								<?php endwhile; ?>
                
							<?php endif; ?>
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rating-block">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">
                                Рейтинг компаний по ремонту квартир
                            </h2>
                        </div>
						<?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 0 ) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                            <div class="col-12">
                                <div class="rating-item">
                                    <div class="rating-item__num">
                                        1
                                    </div>
                                    <div class="rating-item__img">

                                    <?php  $image = get_field('company-img');
                                    $image_url = $image['sizes']['company'];

                                    if( !empty($image) ): ?>

                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                    <?php endif; ?>

                                    </div>
                                    <div class="rating-item__rating">
                                        <p><?= get_field( 'company-name' ) ?></p>
                                        <span>Рейтинг <?= get_field( 'company-rating' ) ?></span>
                                        <div class="rating-item__plus">
                                            <img src="<?php echo DOMEO_DIR_IMG ?>/like.svg" alt="">
                                            <span>
                    <?= get_field( 'company-like' ) ?>
                    </span>
                                        </div>

                                        <div class="rating-item__minus">
                                            <img src="<?php echo DOMEO_DIR_IMG ?>/dislike.svg" alt="">
                                            <span>
                    <?= get_field( 'company-dizlike' ) ?>
                    </span>
                                        </div>
                                    </div>
                                    <div class="rating-item__info">
                                        <div class="rating-item__info-1">
                                            <a href="<?php echo get_permalink() ?>">Отзывов <?= get_field( 'company-count-review' ) ?></a>
                                        </div>
                                        <div class="rating-item__info-2">
                                            <a href="tel:<?php echo get_field( 'company-tel' ) ?>"><?php echo get_field( 'company-tel' ) ?></a>
                                        </div>
                                        <div class="rating-item__info-3">
                                            <a href="https://www.<?php echo get_field( 'company-site' ) ?>"><?php echo get_field( 'company-site' ) ?></a>
                                        </div>
                                    </div>
                                    <div class="rating-item__price">
                                        от <?php echo get_field( 'company-price' ) ?> ₽/м2
                                    </div>
                                    <div class="rating-item__btn">
                                        <a href="<?php echo get_permalink() ?>" class="btn rating-item__link">ОСТАВИТЬ
                                            ОТЗЫВ</a>
                                    </div>
                                </div>
                            </div>
						<?php endwhile; ?>
						<?php wp_reset_query(); ?>


                        <div class="col-12 d-flex justify-content-center">
                            <a href="#" class="btn btn-border rating-block__btn">ПОКАЗАТЬ ЕЩЁ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  <?php get_template_part('template-parts/sections/region'); ?>

    <?php get_template_part('template-parts/sections/tags'); ?>
    <?php get_template_part('template-parts/sections/banner'); ?>
  </main>
  <?php get_footer()?>