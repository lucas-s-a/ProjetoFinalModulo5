const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Pdds = db.define('pedidos',{
    id_Pedidos:{
        type:DataTypes.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    NPedd:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    PriceU:{
        type:DataTypes.FLOAT(5,2),
        allowNull:false
    },
    NomeP:{
        type:DataTypes.STRING,
        allowNull:false
    },
    QtdP:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Vtt_compra:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


module.exports = Pdds