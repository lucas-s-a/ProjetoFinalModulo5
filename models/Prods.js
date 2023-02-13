const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Prods = db.define('prodstbs', {
    nomep:{
        type: DataTypes.STRING,
        allowNull: false
    },
    priceu:{
        type: DataTypes.FLOAT(6,2),
        allowNull: false
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Prods