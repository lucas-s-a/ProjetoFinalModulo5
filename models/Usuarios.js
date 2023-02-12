const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Usuarios = db.define('cliente', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    login:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = Usuarios