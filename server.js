const express = require('express')
const morgan = require('morgan')
const multiRoutes = require('./routes/multi')
const wzRoutes = require('./routes/wzRoutes')

const app = express()
app.set('view engine', 'ejs')

app.listen(3000)

app.use('public',express.static('css'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    console.log("index")
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body.fname)
    res.redirect('warzone/'+encodeURIComponent(req.body.fname))
})

app.use(wzRoutes)
app.use(multiRoutes)

app.get('/about-us', (req, res) => {
    res.render('aboutus')
})


