<div class="more-block">

                  <h3 class="more-block__title">Последние отзывы на сайте</h3>
                  <?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 3 ) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
            
                        <?php 
                            $reviews = get_field('reviews');
                            $trigger = 1;
                            if( is_array($reviews) || is_object($reviews)) : ?>
                            <?php foreach($reviews as $review) : ?>
                            <?php if($trigger > 3){
                                break;
                            }?>
                            <?php if($review['reviews-trigger'] == 'ДА') : ?>
                              <div class="more-block__item">
                                <div class="more-block__img">
                                <?php $image = get_field('company-img');
                            $image_url = $image['sizes']['company'];

                            if( !empty($image) ): ?>

                            <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                            <?php endif; ?>
                                </div>
                                <div class="more-block__content">
                                  <div class="more-block__company">Компания: <a href="<?= get_permalink(); ?>"><span><?php echo get_field('company-name'); ?></span></a></div>
                                  <div class="more-block__text"> <?= $review['reviews-text'] ?></div>
                                  <a href="<?= get_permalink(); ?>" class="more-block__link">ПОДРОБНЕЕ</a>
                                </div>
                            </div>
                                
                                         
                                <?php $trigger++; ?>
                                <?php endif; ?>
                                
                            <?php endforeach; ?>
                            <?php endif; ?>
                            <?php endwhile; ?>

                </div>