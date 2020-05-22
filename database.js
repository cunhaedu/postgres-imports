const path = require('path')

const { client, table } = require('./config/db')

const query = `
  COPY ${table} 
  FROM '${path.resolve(__dirname, 'export', 'data.csv')}' 
  USING DELIMITERS ';'
`

function createDatabaseConnection() {
  async function start() {
    console.log('[database] Starting...')
    console.log('[database] Connecting to Postegres...')
    await client.connect()
    console.log(`[database] Running query: ${query}`)
    const res = await client.query(query)
    console.log(res)
    console.log('[database] Starting done!')
    client.end()
  }

  async function stop() {
    console.log('[database] Stopping...')
    console.log('[database] Closing Postgres connection')
    console.log('[database] Stopping done!')
  }

  return {
    start,
    stop
  }
}

module.exports = createDatabaseConnection