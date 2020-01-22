module.exports = app => {
  require('./burgerRoutes.js')(app)
  require('./viewRoutes.js')(app)
}