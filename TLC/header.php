<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TLC
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
    <a href="/" class="logo">
        <div class="header__burger js-modal-header">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/bur.svg" alt=""
                 class="js-modal-header"></div>

        <?php $custom_logo__url = wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full');
        ?><img src="<?php echo $custom_logo__url[0]; ?>" alt="Logo">
    </a>
    <div class="header__content">
        <div class="header__top">
            <a class="header__city d-none d-lg-flex align-items-center js-region">
                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/map.svg" alt="map"
                     class="js-region">
                <span class="js-region js-region-city">Москва</span>
            </a>

            <div class="header-currency">
                <p class="header-currency__item">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/dol.svg" alt="dol">
                    <span>74.74</span>
                </p>

                <p class="header-currency__item">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/yen.svg" alt="yen">
                    <span>10.99</span>
                </p>
            </div>

            <a href="mailto:ssadfas@gmail.com" class="header__email">
                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/mail.svg" alt="mail">
                <span>INFO@TLC-GR.COM</span>
            </a>
        </div>

        <div class="header__bottom">
            <nav class="header-services" data-da=".adaptive-menu,991,first">
                <ul class="header-submenu">
                    <li>
                        <a href="#">
                            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/bur.svg"
                                 alt="bur"></a>


                        <?php if (have_rows('roditel', 'option')): ?>

                            <div>
                                <ul>

                                    <?php while (have_rows('roditel', 'option')): the_row();

                                        // переменные
                                        $post_object = get_sub_field('osnovnoj_punkt');
                                        $post_objects = get_sub_field('dochernie');
                                        $image = get_sub_field('izobrazhenie_roditelskoj');

                                        if ($post_object):

                                            // перезаписать $post
                                            $post = $post_object;
                                            setup_postdata($post);

                                            ?>

                                            <li>
                                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

                                                <?php

                                                if ($post_objects): ?>
                                                    <ul>
                                                        <?php foreach ($post_objects as $post): // Переменная должна быть названа обязательно $post (IMPORTANT) ?>
                                                            <?php setup_postdata($post); ?>

                                                            <li>
                                                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                                            </li>

                                                        <?php endforeach; ?>
                                                    </ul>
                                                    <?php wp_reset_postdata(); // ВАЖНО - сбросьте значение $post object чтобы избежать ошибок в дальнейшем коде ?>
                                                <?php endif;

                                                ?>

                                                <div><img src="<?php echo $image['url']; ?>"
                                                          alt="<?php echo $image['alt'] ?>"/></div>
                                            </li>

                                            <?php wp_reset_postdata(); // ВАЖНО - сбросьте значение $post object чтобы избежать ошибок в дальнейшем коде
                                            ?>
                                        <?php endif; ?>
                                    <?php endwhile; ?>

                                </ul>
                            </div>

                        <?php endif; ?>

                    </li>
                </ul>
            </nav>

            <?php if (has_nav_menu('top-menu')) { ?>

                <nav class="header-menu" data-da=".adaptive-menu,991,last">

                    <?php wp_nav_menu([
                        'theme_location' => 'top-menu',
                        'container' => false,
                        'menu_class' => '',
                        'depth' => 1,
                    ]); ?>

                </nav>

            <?php } ?>

        </div>
    </div>

    <div class="header-net">
        <div class="header-net__block">
            <a href="tel:<?php the_field('osnovnoj_telefon_ssylka', 'option'); ?>" class="header-net__tel">
                <?php the_field('osnovnoj_telefon_tekst', 'option'); ?></a>

            <?php while (have_rows('socz_seti_header', 'option')): the_row();

                // переменные
                $image = get_sub_field('ikonka');
                $link = get_sub_field('ssylka');

                ?>

                <?php if ($link): ?>
                    <a href="<?php echo $link; ?>" target="_blank" class="header-net__soc">
                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>"/></a>
                <?php endif; ?>

            <?php endwhile; ?>

        </div>
        <div class="header-net__block">
            <a class="btn header-net__btn js-call">БЕСПЛАТНЫЙ ЗВОНОК</a>
        </div>
    </div>
    <a class="btn header__btn js-delivery">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.5855 18.0682C41.8634 18.3778 42.2598 18.5547 42.6758 18.5547C43.0918 18.5547 43.4882 18.3778 43.766 18.0682C43.828 17.9991 45.3009 16.353 46.7947 14.2758C48.9516 11.2767 50 9.00283 50 7.32422C50 3.28564 46.7144 0 42.6758 0C38.6372 0 35.3516 3.28564 35.3516 7.32422C35.3516 9.00283 36.4 11.2767 38.5568 14.2758C40.0507 16.353 41.5235 17.9991 41.5855 18.0682ZM42.6758 2.92969C45.0989 2.92969 47.0703 4.90107 47.0703 7.32422C47.0703 8.88545 44.7652 12.2894 42.6758 14.8373C40.5863 12.2893 38.2812 8.88535 38.2812 7.32422C38.2812 4.90107 40.2526 2.92969 42.6758 2.92969Z" fill="white"/>
        <path d="M39.2578 24.6093H35.2539V17.2851C35.2539 16.4761 34.598 15.8203 33.7891 15.8203H16.2109C15.402 15.8203 14.7461 16.4761 14.7461 17.2851V24.6093H10.7422C6.43437 24.6093 2.92969 21.1046 2.92969 16.7968C2.92969 12.489 6.43437 8.98433 10.7422 8.98433H27.3229L25.9173 10.39C25.3452 10.9621 25.3452 11.8895 25.9173 12.4616C26.4894 13.0336 27.4168 13.0336 27.9889 12.4616L31.8951 8.55532C32.4672 7.98325 32.4672 7.05581 31.8951 6.48374L27.9889 2.57749C27.4168 2.00542 26.4894 2.00542 25.9173 2.57749C25.3452 3.14956 25.3452 4.077 25.9173 4.64907L27.3229 6.05464H10.7422C4.81895 6.05464 0 10.8736 0 16.7968C0 22.7201 4.81895 27.539 10.7422 27.539H14.7461V34.8632C14.7461 35.6722 15.402 36.3281 16.2109 36.3281H33.7891C34.598 36.3281 35.2539 35.6722 35.2539 34.8632V27.539H39.2578C43.5656 27.539 47.0703 31.0437 47.0703 35.3515C47.0703 39.6593 43.5656 43.164 39.2578 43.164H10.5375C9.89814 40.9124 7.8249 39.2578 5.37109 39.2578C2.40947 39.2578 0 41.6672 0 44.6289C0 47.5905 2.40947 50 5.37109 50C7.8249 50 9.89805 48.3454 10.5375 46.0937H39.2578C45.1811 46.0937 50 41.2748 50 35.3515C50 29.4283 45.1811 24.6093 39.2578 24.6093ZM23.5352 18.75H26.4648V21.1121L25.4632 20.7782C25.1625 20.678 24.8374 20.678 24.5367 20.7782L23.5352 21.1121V18.75ZM32.3242 33.3984H17.6758V18.75H20.6055V23.1445C20.6055 24.1443 21.5851 24.8503 22.5335 24.5341L25 23.7121L27.4665 24.5342C28.4149 24.8503 29.3945 24.1443 29.3945 23.1445V18.75H32.3242V33.3984ZM5.37109 47.0703C4.0249 47.0703 2.92969 45.9751 2.92969 44.6289C2.92969 43.2827 4.0249 42.1875 5.37109 42.1875C6.71729 42.1875 7.8125 43.2827 7.8125 44.6289C7.8125 45.9751 6.71729 47.0703 5.37109 47.0703Z" fill="white"/>
        <path d="M42.6758 8.78906C43.4848 8.78906 44.1406 8.13323 44.1406 7.32422C44.1406 6.51521 43.4848 5.85938 42.6758 5.85938C41.8668 5.85938 41.2109 6.51521 41.2109 7.32422C41.2109 8.13323 41.8668 8.78906 42.6758 8.78906Z" fill="white"/>
        </svg>

        <span>РАССЧИТАТЬ ДОСТАВКУ</span>
    </a>
</header>

<main>
