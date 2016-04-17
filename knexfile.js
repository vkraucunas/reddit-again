module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/reddit'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/reddit'
  },
  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  }
};
