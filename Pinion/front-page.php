<?php
/*
Template Name: Главная
//Template Post Type: post, page, product, company
*/
?>
<?php get_header();?>

    <main>
    <section class="banner">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12 col-lg-6 d-flex align-items-center">
                            <div class="banner__info">
                                <h1 class="banner__title">
									<?= get_field( 'about-title' ); ?>
                                </h1>
                                <div class="banner-btns">
                                    <a href="#" class="btn header__btn banner__btn-2 js-reviews">
                                        ОСТАВИТЬ ОТЗЫВ
                                    </a>
                                    <a href="#" class="btn btn-border banner__btn js-personal-data">ДОБАВИТЬ
                                        КОМПАНИЮ</a>
                                </div>
                            </div>


                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <div class="banner__img">
								<?php the_post_thumbnail(); ?>
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
                                    <a href="<?php echo get_permalink() ?>" class="rating-item__img">

                                    <?php  $image = get_field('company-img');
                                    $image_url = $image['sizes']['company'];

                                    if( !empty($image) ): ?>

                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                    <?php endif; ?>

                                    </a>
                                    <div class="rating-item__rating">
                                        <a href="<?php echo get_permalink() ?>"><?= get_field( 'company-name' ) ?></a>
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

    <section class="company-block">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">
                                О рейтинге компаний по ремонту квартир
                            </h2>
                        </div>
						<?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 6 ) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                            <div class="col-12 col-md-6 col-xl-4">
                                <a href="<?php echo get_permalink() ?>" class="company-item">
                                    <div class="company-item__img">
                                    <?php  $image = get_field('company-img');
                                    $image_url = $image['sizes']['company'];

                                    if( !empty($image) ): ?>

                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                    <?php endif; ?>
                                    </div>
                                    <p class="company-item__text">
										<?= get_field( 'company-description' ) ?>
                                    </p>
                                </a>
                            </div>
						<?php endwhile; ?>
						<?php wp_reset_query(); ?>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/sections/slider'); ?>
    

    <section class="reviews">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <h2 class="title">
                                Отзывы о компаниях по ремонту квартир
                            </h2>
                        </div>
                        
                        <div class="col-12">
                                    <div class="reviews-slider">
                                        <div class="swiper-reviews">
                                            <div class="swiper-wrapper">
                        <?php if ( have_rows( 'main-review', get_queried_object() ) ): ?>
								<?php while ( have_rows( 'main-review', get_queried_object() ) ): the_row();

									// переменные
									$name    = get_sub_field( 'main-review-name' );
									$num     = get_sub_field( 'main-review-num' );
                                    $rating  = get_sub_field( 'main-review-rating' );
                                    $text    = get_sub_field( 'main-review-text' );

									?>

                                            
                                            <div class="swiper-slide">
                                            <div class="reviews-card">
                                                <header class="reviews-card__header">
                                                    <div class="reviews-card__img">
                                                    <?php  $image = get_sub_field( 'main-review-ava' );
                                                    $image_url = $image['sizes']['ava'];

                                                    if( !empty($image) ): ?>

                                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                                    <?php endif; ?>
                                                    </div>
                                                    <div class="reviews-card__info">
                                                        <div class="reviews-card__name">
                                                        <?= $name  ?>
                                                        </div>
                                                        <div class="reviews-card__num">
                                                            Договор: <?= $num  ?>
                                                        </div>
                                                        
                                                        <div class="reviews-card__rating">
                                                        <input type='hidden' value='<?= $rating ?>'
                                                            class="reviews-card__rating-input">
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
                                                <div class="reviews-card__text">
                                                <?= $text  ?>
                                                </div>
                                            </div>
                                            </div>                           
                                     

                       
                            <?php wp_reset_query(  );
                            wp_reset_postdata(  );?>
								<?php endwhile; ?>
							<?php endif; ?>


                            </div>
                                    </div>
                                    <div class="reviews__prev">
                                                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/arrright.svg"
                                                     alt="">
                                            </div>

                                            <div class="reviews__next">
                                                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/arrright.svg"
                                                     alt="">
                                            </div>
                            </div>
                            </div>
					


                        <div class="col-12 col-md-6 col-xl-4 d-flex align-items-center">
                            <div class="reviews-btn">
                                <a href="#" class="btn reviews-btn__btn js-reviews">
                                    ОСТАВИТЬ ОТЗЫВ
                                </a>
                                
                                <a href="<?php echo get_field( 'all-reviews', get_queried_object() ) ?>" class="btn btn-border reviews-btn__btn">
                                    ВСЕ ОТЗЫВЫ
                                </a>
                             
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/sections/region'); ?>

    <?php get_template_part('template-parts/sections/faq'); ?>

    <?php get_template_part('template-parts/sections/banner'); ?>

    
    </main>

<?php get_footer() ?>