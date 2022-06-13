// load the things we need
var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

// index page
app.get('/', function (req, res) {
  res.render('pages/index')
})

// about page
app.get('/about', function (req, res) {
  res.render('pages/about')
})

const PORT = 8080
app.listen(PORT)
console.log(`The server is listening on http://localhost:${PORT}`)
