<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', "yddcutfg_lider_opinion" );


/** Имя пользователя MySQL */
define( 'DB_USER', "yddcutfg_lider_opinion" );


/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', "u@pO(VinJzH#3z^atl" );


/** Имя сервера MySQL */
define( 'DB_HOST', "localhost" );


/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );


/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2~fB^a}pM>ph2_0t~Bf.p<AZjmRRx$ndL1@t-glumr!snzxI%bsP#b:se RU`v}O' );

define( 'SECURE_AUTH_KEY',  'aF.ZC5BzOkGf:Z}13X&FP(T.!`~Lb@XVbeQF%gc~8-zx:V,0qE1`Z;&|k2[rPjy^' );

define( 'LOGGED_IN_KEY',    'FLJ!yelmEo8Q!pKK*2QMU{7UDz(r|yh)nOW>:OA[PHO*7:<wn<8W?UlaELcNfm4=' );

define( 'NONCE_KEY',        '.qGRi]aLN^uS$JlyyZULS.&5+p_620QRy/rkFn>4~(HaO>55Uq|*u?%swn%I*Nh>' );

define( 'AUTH_SALT',        'cyIu}17oy 7_`8DA8ubVNQT;h6PiI8aI6Cg[(kKxN_eq1x@ %*5lI5+V]GD@qYgB' );

define( 'SECURE_AUTH_SALT', '.yQ,qMqI_^tECk/kN~_!T~vn>-O[a2t2O!8SgVS|bm@$lzrcjOa5jWoP1!Ao&y)F' );

define( 'LOGGED_IN_SALT',   'aeD3.jN+BKIe+?,mK4)zsZz:/[TOrzdyl<y5`:O}f+;I9 Y,ll43JIFropIoY7^(' );

define( 'NONCE_SALT',       'w$~{<~O}[CC<3MgqQidSpe[/n*7(R5[j.Wu ;dAjy`G<j.!MUQ~&(R[8JBO-#[~3' );

define('WP_HOME','https://lider-opinion.com/');
define('WP_SITEURL','https://lider-opinion.com/');
/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wpdr_';


/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
