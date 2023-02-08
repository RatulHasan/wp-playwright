# Play wordpress wright
An e2e testing tool with playwright within WordPress.

## Prerequisites:

Must have `WP CLI` [installed](https://wp-cli.org/).

## Installation process:

## ⚠️️ Attention ⚠️

Currently don't install, download this from [github](https://github.com/RatulHasan/play-wordpress-wright), then copy and paste the swapEnvironment.js and swapBackEnvironment.js in your plugin directory. 

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

That's it, enjoy 🎉.

Have a query? <a href="mailto:ratuljh@gmail.com">Email</a> me
