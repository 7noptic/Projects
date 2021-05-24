<?php 
/*
Template Name: Все отзывы
*/
?>
<?php get_header()?>
<main>
<?php get_template_part('template-parts/sections/headcrumbs'); ?>
    
  <section class="reviews-company js-all-company">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10">
            <div class="row">
              <div class="col-12">
                <h1 class="title title-left">Отзывы о компаниях по ремонту квартир</h1>
              </div>
              <div class="col-12 col-xl-8">
              <?php $loop = new WP_Query( array( 'category_name' => 'company', 'posts_per_page' => 0 ) ); ?>
                  <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                  
                  <?php 
                  $reviews = get_field('reviews');
                  foreach($reviews as $review) : ?>
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
                <?php endforeach; ?>

            <?php endwhile; ?>
                
                
                <div class="btn btn-border reviews__more">ПОКАЗАТЬ ЕЩЁ</div>
              </div>
              <div class="col-12 col-xl-4">
              
             
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