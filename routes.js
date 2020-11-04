const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Minha rota funciona!'))

module.exports = router