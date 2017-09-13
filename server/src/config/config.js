module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'rrzs',
    user: process.env.DB_USER || 'rrzs',
    password: process.env.DB_PASS || 'rrzs',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './rrzs.sqlite'
    }
  }
}
