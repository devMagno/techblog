const Sequelize = require('sequelize')

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'techblogDB.sqlite'
})

module.exports = connection