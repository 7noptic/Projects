<?php if(get_field( 'about-text' ) || get_field( 'about-title' ) || get_field( 'about-subtitle' ) || get_field('about-img')) : ?>
<section class="banner">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12 col-xl-6 d-flex align-items-center">
                            <div class="banner__text">
                           
								<?php wp_reset_query();
                                echo get_field( 'about-text' ); ?>
                            </div>

                        </div>
                        <div class="col-12 col-xl-6 d-flex justify-content-center">
                            <div class="banner__img">
                            
                            <?php   $image = get_field('about-img');
                                    $image_url = $image['sizes']['banner'];
                            if( !empty($image) ): ?>

                                <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                            <?php endif; ?>
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
    <?php endif; ?>