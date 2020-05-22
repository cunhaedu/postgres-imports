const readline = require('readline-sync');

function getConnectionData() {

  let host = askAndReturnBdHost()
  let user = askAndReturnBdUser()
  let password = askAndReturnBdPassword()
  let database = askAndReturnBdDatabase()
  let port = askAndReturnBdPort()
  let table = askAndReturnBdTable()


  function askAndReturnBdHost() {
    return readline.question('> host[localhost]: ') || 'localhost'
  }

  function askAndReturnBdUser() {
    return readline.question('> User[postgres]: ') || 'postgres'
  }

  function askAndReturnBdPassword() {
    return readline.question('> Password: ')
  }

  function askAndReturnBdDatabase() {
    return readline.question('> Database[postgres]: ') || 'postgres'
  }

  function askAndReturnBdPort() {
    return readline.question('> Port[5432]: ') || '5432'
  }

  function askAndReturnBdTable() {
    console.log('')
    return readline.question('> Nome da tabela: ')
  }

  return {
    host,
    user,
    password,
    database,
    port,
    table
  }
}

module.exports = getConnectionData()
