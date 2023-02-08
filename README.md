# Play wordpress wright
An e2e testing tool with playwright within WordPress.

## Prerequisites:

Must have `WP CLI` [installed](https://wp-cli.org/).

## Installation process:

Copy your `wp-config.php` file and place it in your plugin root directory like `akismet/` and rename it with `playwright-wp-config.php`.

Add these line in `playwright-wp-config.php`
```
define( 'SITE_URL', 'your_site_url' ); 
define( 'SITE_TITLE', 'Site_Name' );
define( 'ADMIN_USERNAME', 'UserName' ); // This is not database username. This is login user name.
define( 'ADMIN_PASSWORD', 'Password' ); // This is not database password. This is login password.
define( 'ADMIN_EMAIL', 'admin@email.com' );
```

Add these lines in `playwright.config.js` file within `config` section.
```
globalSetup: require.resolve( './swapEnvironment' ),
globalTeardown: require.resolve( './swapBackEnvironment' ),
```

That's it, enjoy 🎉
