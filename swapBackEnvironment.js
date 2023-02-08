import fs from 'fs';

import { dropDatabaseTables, renameFile, wpConfigBackupPath, wpConfigPath, wpTestsConfigPath } from './swapEnvironment'

async function swapBackEnvironment() {
  try {
    if (fs.existsSync(wpConfigPath)) {
      await dropDatabaseTables();
      renameFile(wpConfigPath, wpTestsConfigPath)
      renameFile(wpConfigBackupPath, wpConfigPath)
    }
  } catch (error) {
    console.error(error);
  }
}

export default swapBackEnvironment;
