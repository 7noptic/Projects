<div class="more-block">
                
                  <h3 class="more-block__title">Вам также могут быть интересны</h3>
                  
                  <?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 0 ) ); ?>
                  <?php for ($i=0;$i<5;$i++): ?>
                  <?php $loop->the_post(); ?>
                  <a href="<?php echo get_permalink() ?>" class="more-block__item">
                          <div class="more-block__img">
                          <?php $image = get_field('company-img');
                            $image_url = $image['sizes']['company'];

                            if( !empty($image) ): ?>

                            <img src="<?php echo $image_url; ?>" alt="<?php echo $image['alt']; ?>" />

                            <?php endif; ?>
                          </div>
                          <div class="more-block__content">
                            <div class="more-block__company">Компания: <span><?php echo get_field('company-name') ?></span></div>
                            <div class="more-block__rating"><span>Рейтинг <b><?php echo get_field('company-rating') ?></b></span>
                              <ul class="rating-star">
                              <input type="hidden" value="<?= get_field( 'company-rating' ) ?>" class="reviews-card__rating-input">
                                <li class="active"></li>
                                <li class="active"></li>
                                <li class="active"></li>
                                <li class="active"></li>
                                <li></li>
                              </ul>
                              <div class="reviews-company__list reviews-company__list-1"><?php echo get_field('company-count-review') ?> отзывов</div>
                            </div>
                          </div>
                        </a>
                  <?php endfor; ?>
                        
                  <?php wp_reset_query(  );
                            wp_reset_postdata(  );?>
                  
                </div>