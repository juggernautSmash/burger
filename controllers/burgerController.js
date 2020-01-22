const db = require('../config')

module.exports = {
  getBurgers(cb) {
    db.query('SELECT * FROM burgers', (e, burgers) => {
      if (e) {
        console.log(e)
      }
      cb(burgers)
    })
  },
  addBurger(name, eaten, cb) {
    db.query(`INSERT INTO burgers (name, eaten) VALUES ("${name}", ${eaten})`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },
  eatBurger(id, cb) {
    db.query(`UPDATE burgers SET eaten = true WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },
  removeBurger(id, cb) {
    db.query(`DELETE FROM burgers WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  }
}
