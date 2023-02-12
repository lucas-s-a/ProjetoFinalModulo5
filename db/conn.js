const { Sequelize } = require('sequelize')

const sequilize = new Sequelize('dbtestelv','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequilize