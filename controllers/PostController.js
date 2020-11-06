const Posts = require('../models/Posts.js')

exports.store = async (req, res) => {
  const post = await Posts.create({
    title: req.body.title,
    description: req.body.description,
    text: req.body.text
  })

  res.redirect('/')
}
