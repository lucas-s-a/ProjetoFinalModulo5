const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Usuarios = require('./Usuarios')

const Pdds = db.define('pedidos',{
    npedd:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    nomep:{
        type:DataTypes.STRING,
        allowNull:false
    },
    priceu:{
        type:DataTypes.FLOAT(6,2),
        allowNull:false
    },
    qtdp:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vtt_compra:{
        type:DataTypes.FLOAT(6,2),
        allowNull:false
    }
})
Pdds.belongsTo(Usuarios)
Usuarios.hasMany(Pdds)

module.exports = Pdds