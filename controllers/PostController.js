const Posts = require('../models/Posts.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.add = async (req, res) => {
  res.render('add-post', {
    title:'Adicionar post - TechBlog'
  })
}

exports.store = async (req, res) => {
  const image = req.file.filename
  const imgUrl = '/images/' + image

  const post = await Posts.create({
    title: req.body.title,
    imgUrl: imgUrl,
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

exports.listOne = async (req, res) => {

  const { id } = req.params

  const post = await Posts.findOne({
    where: {
      id: id
    }
  })
  
  res.render('single-post', {
    post: post,
    title: `${post.title} - TechBlog`
  })
}

exports.search = async (req, res) => {
  const query = req.query.search
  
  const posts = await Posts.findAll({
    where: {
      title: { [Op.like]: `%${query}%`}
    }
  })

  res.render('search', {
    title: `Resultados de pesquisa por ${query} - Techblog`,
    search: query,
    posts: posts
  })

}