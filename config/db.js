const { Client } = require('pg')

const { user, host, database, password, port, table } = require('./questions')

const client = new Client({
  user,
  host,
  database,
  password,
  port
})

module.exports = {
  client,
  table
}
