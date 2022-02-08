const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname + '/public')
const viewsPath = path.join(__dirname + '/public/views')
const partialPath = path.join(__dirname + '/public/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicPath))
hbs.registerPartials(partialPath)

const port = process.env.PORT || 6969

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/calendar', (req, res)=>{
    res.render('500')
})

app.get('/files', (req, res)=>{
    res.render('500')
})

app.get('/blog', (req, res)=>{
    res.render('500')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log('server is up and running on port: ' + port)
})