<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_unit_tests' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY', '');
define( 'SECURE_AUTH_KEY', '');
define( 'LOGGED_IN_KEY', '');
define( 'NONCE_KEY', '');
define( 'AUTH_SALT', '');
define( 'SECURE_AUTH_SALT', '');
define( 'LOGGED_IN_SALT', '');
define( 'NONCE_SALT', '');
/**#@-*/
/** * WordPress
 * database table prefix. * * You can have multiple installations in one database if you give each * a unique prefix.
 * Only numbers, letters, and underscores please! */
$table_prefix = 'wptests_';
define( 'SITE_URL', 'https://example.test' );
define( 'SITE_TITLE', 'WP Playwright' );
define( 'ADMIN_USERNAME', 'admin' );
define( 'ADMIN_PASSWORD', 'admin' );
define( 'ADMIN_EMAIL', 'ratuljh@gmail.com' );

define( 'WP_DEBUG', true );
define( 'SCRIPT_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
