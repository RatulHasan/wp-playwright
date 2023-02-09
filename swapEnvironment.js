import { exec, execSync } from 'child_process'
import { join } from 'path'
import fs from 'fs'

export const wpConfigPath = join(__dirname, '..', '..', '..', 'wp-config.php')
export const wpConfigBackupPath = join(__dirname, '..', '..', '..', 'wp-config-backup.php')
export const wpTestsConfigPath = join(__dirname, 'playwright-wp-config.php')


// Read test config file and store defined data in config variable.
export const readWpConfigFile = () => {
  if (!fs.existsSync(wpConfigPath)) {
    return null;
  }

  let contents;
  try {
    contents = fs.readFileSync(wpConfigPath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }

  const lines = contents.split('\n');
  const config = {};

  lines.forEach((line) => {
    if (!line.includes('define(')) {
      return;
    }

    const matches = line.match(/define\(\s?['"]([A-Z_]+)['"],\s?['"](.*)['"]\s?\)/);
    if (!matches || matches.length !== 3) {
      return;
    }

    const [, key, value] = matches;
    config[key] = value;
  });

  return config;
};

export const renameFile = ( src, dest ) => {
  fs.renameSync(src, dest);
}

export const createDatabaseIfNotExists = () => {
  try {
    console.log(execSync('wp db create').toString());
    console.log('Database created successfully');
  } catch (error) {
    console.error(`Error creating database: ${error}`);
  }
}

export const dropDatabaseTables = async () => {
  await new Promise((resolve, reject) => {
    exec('wp db reset --yes', (error, stdout) => {
      if (error) {
        console.error(`Error resetting database: ${error}`);
        reject(error);
        return;
      }

      console.log(stdout);
      resolve();
    });
  });
}

export const installWP = async (site_url, title, username, email, password) => {
  await new Promise((resolve, reject) => {
    exec(
      `wp core install --url='${site_url}' --title='${title}' --admin_user='${username}' --admin_password='${password}' --admin_email='${email}'`,
      (error, stdout) => {
        if (error) {
          console.error(`Error installing WordPress: ${error}`);
          reject(error);
          return;
        }

        console.log(stdout);
        resolve();
      }
    );
  });
}

async function swapEnvironment() {
  try {
    if (fs.existsSync(wpTestsConfigPath)) {
      renameFile(wpConfigPath, wpConfigBackupPath)
      renameFile(wpTestsConfigPath, wpConfigPath)

      // get config data.
      const config = readWpConfigFile();

      // If there is an error to get data, throw an error.
      if (!config) {
        console.error(`Error reading: ${wpConfigPath}`);
        await swapEnvironment();
        return;
      }

      createDatabaseIfNotExists();
      await dropDatabaseTables();
      await installWP(config.SITE_URL, config.SITE_TITLE, config.ADMIN_USERNAME, config.ADMIN_EMAIL, config.ADMIN_PASSWORD);
    }
  } catch (error) {
    console.error(error);
  }
}

export default swapEnvironment;
