const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Prod = db.define('prodtt',{
    id_ProdutosTeste:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    PriceU:{
        type:DataTypes.FLOAT(5,2),
        allowNull:false
    },
    NomeP:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


module.exports = Prod