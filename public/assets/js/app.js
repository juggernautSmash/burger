const getBurgers = () => {
  axios.get('/burgers')
    .then(burgers => console.log(burgers))
    .catch(e => console.error(e))
}

const addBurger = (name) => {
  const burger = { name, eaten: false}
  axios.post('/burgers', burger)
    .then(() => console.log('Burger Added!'))
    .catch(e => console.error(e))
}

const eatBurger = id => {
  axios.put(`/burgers/${id}`)
    .then(() => console.log('Burger Eaten!'))
    .catch(e => console.error(e))
}

const removeBurger = id => {
  axios.delete(`/burgers/${id}`)
    .then(() => console.log('Burger Removed!'))
    .catch(e => console.error(e))
}

document.getElementById('addBurger').addEventListener('click', e => {
  e.preventDefault()
  addBurger(document.getElementById('burger').value)
  document.getElementById('burger').value = ''
  setTimeout( ()=> window.location.reload(), 1000)
})

document.addEventListener('click', e => {
  if(e.target.parentNode.className.includes('eatBurger')) {
    eatBurger(e.target.parentNode.dataset.burger)
    setTimeout( ()=> window.location.reload(), 1000)
  } else if (e.target.parentNode.className.includes('removeBurger')) {
    removeBurger(e.target.parentNode.dataset.burger)
    setTimeout( ()=> window.location.reload(), 1000)
  }
})