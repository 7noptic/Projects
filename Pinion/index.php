<?php
/*
Template Name: Все компании
//Template Post Type: post, page, product, company
*/
?>
<?php get_header();?>

    <main>
    <?php get_template_part('template-parts/sections/headcrumbs'); ?>
   

    <section class="company-block">
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


                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/sections/tags'); ?>
  
    </main>

<?php get_footer() ?>