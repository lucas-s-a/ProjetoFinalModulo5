const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Prods = db.define('prodstbs', {
    nomep:{
        type: DataTypes.STRING,
        allowNull: false
    },
    priceu:{
        type: DataTypes.FLOAT(5,2),
        allowNull: false
    }
})


module.exports = Prods