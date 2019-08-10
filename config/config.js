module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/express-api-jwt',
  secret: process.env.SECRET || 'this would make a good secret...'
};