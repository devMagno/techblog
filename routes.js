const express = require('express')
const router = express.Router()

const PostController = require('./controllers/PostController.js')

router.get('/', PostController.listAll)

router.get('/post', (req, res) => res.render('single-post'))

router.get('/posts/add', PostController.add)

router.post('/posts/add', PostController.store)

router.get('/posts/:id', PostController.listOne)

router.get('/search', PostController.search)

module.exports = router