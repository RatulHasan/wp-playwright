import fs from 'fs';

import { dropDatabaseTables, renameFile } from './swapEnvironment'

export async function swapBackEnvironment(wpConfigPath, wpTestsConfigPath) {
  try {
    if (fs.existsSync(wpConfigPath)) {
      await dropDatabaseTables();
      const wpConfigBackupPath = `${wpConfigPath}.backup`;
      renameFile(wpConfigPath, wpTestsConfigPath)
      renameFile(wpConfigBackupPath, wpConfigPath)
    }
  } catch (error) {
    console.error(error);
  }
}

export default swapBackEnvironment;
