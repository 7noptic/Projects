<section class="slider">
        <div class="container">
            <div class="row slider__wrapper">

                <div class="col-12">
                    <h2 class="title title-white">
                        №1 Лучшее соотношение цена-качество
                    </h2>
                </div>
                <div class="col-12 swiper__wrapper">
                    <div class="swiper-card">
                        <div class="swiper-wrapper">
							<?php $loop = new WP_Query( array( 'category_name'  => 'company', 'posts_per_page' => 0 ) ); ?>
							<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                                <div class="swiper-slide">
                                    <div class="card ">
                                        <div class="card__img">
                                        <?php  $image = get_field('company-img');
                                    $image_url = $image['sizes']['company'];

                                    if( !empty($image) ): ?>

                                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                                    <?php endif; ?>
                                        </div>
                                        <div class="card__rating">
                                            <span>Рейтинг <?= get_field( 'company-rating' ) ?></span>    
                                            <ul class="rating-star">
                                            <input type="hidden" value="<?= get_field( 'company-rating' ) ?>" class="reviews-card__rating-input">
                                                    <li class="active"></li>
                                                    <li class="active"></li>
                                                    <li class="active"></li>
                                                    <li class="active"></li>
                                                    <li></li>
                                                </ul>
                                        </div>
                                        <div class="card__row">
                                            <div class="card__text">
                                                Капитальный
                                            </div>
                                            <div class="card__text-b">
                                                от <?= get_field( 'company-price-capital' ) ?> ₽/м²
                                            </div>
                                        </div>

                                        <div class="card__row">
                                            <div class="card__text">
                                                Косметический
                                            </div>
                                            <div class="card__text-b">
                                                от <?= get_field( 'company-price-cosmetic' ) ?> ₽/м²
                                            </div>
                                        </div>
                                        <a href="<?php echo get_permalink() ?>" class="btn btn-border card__btn">ОТЗЫВ О
                                            КОМПАНИИ</a>
                                    </div>
                                </div>
							<?php endwhile; ?>


                        </div>
                    </div>
                    <div class="card__prev">
                        <img src="<?php echo DOMEO_DIR_IMG ?>/arb.svg" alt="">
                    </div>
                    <div class="card__next">
                        <img src="<?php echo DOMEO_DIR_IMG ?>/arb.svg" alt="">
                    </div>
                </div>
            </div>

        </div>

    </section>