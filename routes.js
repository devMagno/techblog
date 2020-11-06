const express = require('express')
const router = express.Router()

const PostController = require('./controllers/PostController.js')

router.get('/', (req, res) => res.render('home'))

router.get('/post', (req, res) => res.render('single-post'))

router.get('/posts/add', (req, res) => res.render('add-post'))

router.post('/posts/add', PostController.store)

module.exports = router