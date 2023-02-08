const swapEnvironment = require('./swapEnvironment')
const swapBackEnvironment = require('./swapBackEnvironment')
const { renameFile, dropDatabaseTables, installWP } = require('./swapEnvironment')
module.exports = swapEnvironment
module.exports = swapBackEnvironment
module.exports = renameFile
module.exports = dropDatabaseTables
module.exports = installWP
