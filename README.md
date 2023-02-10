# WP Playwright
Introduction
------------
WP Playwright is an End-To-End (E2E) testing tool that leverages the power of [Playwright](https://github.com/microsoft/playwright) to make it easier to test WordPress applications. With WP Playwright, you can quickly swap between different testing environments, allowing you to test your application in multiple configurations with ease.

## Prerequisites:

Must have `WP CLI` [installed](https://wp-cli.org/).

Features
--------
-   Easy setup: WP Playwright is designed to be easy to set up and start using.
-   Multiple environment support: With WP Playwright, you can quickly switch between development and testing environments, making it easier to test your application in different configurations.
-   Robust testing: Playwright is a robust testing tool that provides a variety of testing capabilities, including support for headless and non-headless browsers, automatic waiting for elements to load, and more.

Installation
------------
To install WP Playwright, simply run the following command in your terminal:

`npm install wp-playwright --save-dev`


Usage
-----
To get started with WP Playwright, simply import the library into your testing script and configure it to use the environment you want to test against.

Here's a basic example of how you might use WP Playwright in your projects:

Copy your `wp-config.php` file and place it in your plugin root directory like `akismet/` and rename it with `playwright-wp-config.php`.

Add these line in `playwright-wp-config.php` if already not exists.
```
define( 'DB_NAME', 'change_it_to_test_db_name' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', 'localhost' );

define( 'SITE_URL', 'your_site_url' ); // Like- https://test-wp.test
define( 'SITE_TITLE', 'Site_Name' ); // Like- Test WP Site
define( 'ADMIN_USERNAME', 'UserName' ); // This is not database username. This is login user name.
define( 'ADMIN_PASSWORD', 'Password' ); // This is not database password. This is login password.
define( 'ADMIN_EMAIL', 'admin@email.com' );
```

Add these lines in `playwright.config.js` file within the `config` section.
```
globalSetup: require.resolve( './global-setup' ),
globalTeardown: require.resolve( './global-teardown' ),
```

Now create `global-setup.js` and `global-teardown.js` in your plugin root directory.

Then, write like this example in `global-setup.js`,
```
import { join } from 'path'
const { swapEnvironment } = require('wp-playwright/swapEnvironment');

const wpConfigPath = join(__dirname, '..', '..', '..', 'wp-config.php'); // your wp-congig.php path
const wpTestsConfigPath = join(__dirname, 'playwright-wp-config.php'); // your wp-congig.php path

async function globalSetup() {
  await swapEnvironment(wpConfigPath, wpTestsConfigPath);
  
  // ..... add rest of your globalSetup code here
  
}

export default globalSetup;
```
Then, write like this example in `global-teardown.js`,
```
import { join } from 'path'
const { swapBackEnvironment } = require('wp-playwright/swapBackEnvironment');

const wpConfigPath = join(__dirname, '..', '..', '..', 'wp-config.php');
const wpTestsConfigPath = join(__dirname, 'playwright-wp-config.php');

async function globalTeardown() {
  await swapBackEnvironment(wpConfigPath, wpTestsConfigPath);
  
  // ..... add rest of your globalTeardown code here
  
}

export default globalTeardown;
```

This `swapEnvironment.js` file offers you some methods like-

- `swapEnvironment(wpConfigPath, wpTestsConfigPath)` - This will swap your environment.
- `createDatabaseIfNotExists()` - This will create your test database.
- `dropDatabaseTables()` - This will reset your test database.
- `installWP(site_url, title, username, email, password)` - This will refresh your WordPress installation.
- `renameFile(src, dest)` - This will rename file.
- `readWpConfigFile(wpConfigPath)` - This will read wp-config file and gives you defined values.

Documentation
-------------

For more information on how to use WP Playwright, including detailed instructions on how to configure different testing environments, check out the [official documentation](https://github.com/ratulhasan/wp-playwright).

Contributing
------------

If you're interested in contributing to the development of WP Playwright, we welcome your contributions! Simply fork the repository on [Github](https://github.com/RatulHasan/play-wordpress-wright), make your changes, and submit a pull request.

License
-------

WP Playwright is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

Still couldn't get how to use this package? Watch this- [Video](https://youtu.be/P3Dpv0e80ko)

_**If this package helps you anyway**_, please give me a **Star** ⭐ on [Github](https://github.com/RatulHasan/play-wordpress-wright).

That's it, enjoy 🎉.

Have a query? <a href="mailto:ratuljh@gmail.com">Email</a> me
