const express = require('express')
const app = express()
const path = require('path')

const bodyParser = require('body-parser')

const router = require('./routes.js')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.listen(3333);