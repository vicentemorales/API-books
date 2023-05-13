
// Controllers
const books = require('express').Router()


// INDEX
books.get('/', (req, res) => {
  res.send('GET/books')
})


module.exports = books
