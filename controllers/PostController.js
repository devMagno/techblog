const Posts = require('../models/Posts.js')

exports.add = async (req, res) => {
  res.render('add-post', {
    title:'Adicionar post - TechBlog'
  })
}

exports.store = async (req, res) => {
  const post = await Posts.create({
    title: req.body.title,
    description: req.body.description,
    text: req.body.text
  })

  res.redirect('/')
}

exports.listAll = async (req, res) => {
  const posts = await Posts.findAll()
  
  res.render('home', {
    posts: posts,
    title: 'TechBlog'
  })
}