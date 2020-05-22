const createDatabaseConnection = require('./database')

const database = createDatabaseConnection()

try {
  database.start()
  database.stop()
} catch (error) {
  console.log('[index] Uncaught error!')
  console.log(error)
}
