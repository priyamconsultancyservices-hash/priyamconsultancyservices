<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u622175121_pcs_blog' );

/** Database username */
define( 'DB_USER', 'u622175121_pcs_blog' );

/** Database password */
define( 'DB_PASSWORD', 'PCS_blog#2026' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' k05iFx7:1|fN~*ZOCttB+j%Zj,gsLpzM?aImL,L%pCY:i4Abe(LPvl0[k[Ck?]1' );
define( 'SECURE_AUTH_KEY',  'D31+F$46b1GTOE-U9PQ/RgT%WcYGEuF|Mw7smy%5E%Ki=m|#5Y qoC _/Em+th+d' );
define( 'LOGGED_IN_KEY',    '@$XE2ak|p%f)7nHO3oV$}:iq+d*<,e4sI>^J5oYV@69jWL>P7AoWbMuI#ATCyYz>' );
define( 'NONCE_KEY',        'k<$b{8hw;E]*}#9;_=KuS4ZWbn,ONfk?^XyX<+y</ee*4>),qTHzUJ|EJP*3z<)@' );
define( 'AUTH_SALT',        '/uHublGT{HH}n8^+Xu2.1Udg/n?Id.7<8LI9r?e:;7leA(TcF~{UcrJjf^`um!r@' );
define( 'SECURE_AUTH_SALT', '6/<c-og_$VRv*s2L-H)6@,P`DDD8f[-Z.{~i :C-!/<dtE#Z/Q <k$v6^YLIE^z8' );
define( 'LOGGED_IN_SALT',   'q%A*s-7PIdegU0fKGZmAR8)jOA&/+tz/On6Rx<`p$0`SBN {afV5NN$%iN0)2,0<' );
define( 'NONCE_SALT',       '4V(H5zA>)bjda=L7l8~[qH`ayl^3O4H [z%}6/Pzv[gTn$B;m+Hgn;f4Vy6sHX|E' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */


define('WP_MEMORY_LIMIT', '256M');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
