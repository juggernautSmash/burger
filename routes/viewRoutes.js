const {
  burgers: {
    getBurgers
  }
} = require('../controllers')

module.exports = app => {
  app.get('/', (req, res) => {
    getBurgers(burgers => {
      res.render('index', { burgers })
    })
  })
}