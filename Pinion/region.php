<?php if(have_rows('glavnaya_-_rajon', get_queried_object())):?>
<section class="region">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title region__title">
                            <?php echo get_field('rajon-title', get_queried_object()); ?>
                            </h2>
                        </div>
                        <div class="col-12">
                            <div class="tags">
                                <div class="swiper-tags">
                                    <div class="swiper-wrapper">

                            <?php $i = 0;
//                            var_dump(get_field('glavnaya_-_rajon', get_queried_object()));
                            while (have_rows('glavnaya_-_rajon', get_queried_object())): the_row();
                                $i++;

                                // переменные
                                $regionTitle = get_sub_field('nazvanie_rajona', get_queried_object());
                                ?>

                                <div class="swiper-slide swiper-slide__wauto">
                                    <a href="#" class="btn btn-transparent tags__link js-region-link">
                                        <?php echo $regionTitle; ?>
                                    </a>
                                </div>

                            <?php endwhile; ?>

                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12">
                <?php $i = 0;
                while (have_rows('glavnaya_-_rajon', get_queried_object())): the_row();
                    $i++;

                    $regionTitle = get_sub_field('nazvanie_rajona');

                    ?>

                    <div class="tab js-region-tabs">
                        <div class="container">
                            <div class="row">

                                <div class="col-12 col-lg-3">
                                    <h3 class="subregion__name">
                                        <?php echo $regionTitle; ?>
                                    </h3>

                                    <?php if (have_rows('pod_rajon')): ?>

                                        <nav class="subregion__nav">

                                            <?php while (have_rows('pod_rajon')): the_row();

                                                // переменные
                                                $content = get_sub_field('nazvanie');

                                                ?>
                                            <a href="#" class="subregion__link js-subregion-link"><?php echo $content; ?></a>
                                                

                                            <?php endwhile; ?>

                                        </nav>

                                    <?php endif; ?>

                                </div>


                                

                                        <div class="col-12 col-lg-9">
                                        <?php if (have_rows('pod_rajon')): ?>
                                        <?php while (have_rows('pod_rajon')): the_row();
                                            // переменные
                                            $content = get_sub_field('nazvanie');
                                            $post_objects = get_sub_field('produkt');

                                            ?>
                                        <div class="tab subregion__content">
                                            <div class="swiper-region">
                                                <div class="swiper-wrapper">
                                                
                                                   
                                                                <?php if (have_rows('product-post')): ?>

                                                                <?php while (have_rows('product-post')): the_row();

                                                                    // переменные
                                                                    $text = get_sub_field('product-post-text');
                                                                    $link = get_sub_field('product-post-link');
                                                                    $price = get_sub_field('product-post-price');
                                                                ?>
                                                                <div class="swiper-slide">
                                                                    <div class="region-card">
                                                                        <div class="region-card__img">
                                                                            <img src="<?php echo DOMEO_DIR_IMG ?>/rci.svg" alt="">
                                                                        </div>
                                                                        <div class="region-card__name">
                                                                            <?php echo $text; ?>
                                                                        </div>
                                                                        <div class="region-card__price">
                                                                            от <?php echo $price; ?> ₽/м2
                                                                        </div>
                                                                        <a href="<?php echo $link; ?>" class="region-card__link">ПОДРОБНЕЕ</a>

                                                                    </div>
                                                                </div>

                                                            <?php endwhile; ?>
                                                            <?php endif; ?>
                                                        <?php wp_reset_postdata(); // ВАЖНО - сбросьте значение $post object чтобы избежать ошибок в дальнейшем коде ?>

                                                </div>
                                            </div>
                                            <div class="region__prev">
                                                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/arrright.svg"
                                                     alt="">
                                            </div>

                                            <div class="region__next">
                                                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/arrright.svg"
                                                     alt="">
                                            </div>
                                        </div>
                                        
                                    <?php endwhile; ?>

                                <?php endif; ?>
                            </div>
                            
                        </div>
                    </div>

                <?php endwhile; ?>

            </div>
            
                    </div>
                    </div>
        </div>
    </div>
</section>
<?php endif; ?>