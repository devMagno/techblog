const express = require('express')
const app = express()
const path = require('path')

const bodyParser = require('body-parser')

const router = require('./routes.js')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

const connection = require('/config/connection.js')

app.use(router)

connection.sync().then(result => {
    app.listen(3333)
}).catch(error => {
    console.log(error)
})