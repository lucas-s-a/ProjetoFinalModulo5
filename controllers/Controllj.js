const session = require('express-session')
const Usuarios = require("../models/Usuarios")
const Pdds = require("../models/Pdds")
const Prods = require("../models/Prods")

const home = async (req,res)=>{
    await res.render('pages/home');
}
const pageuser = async (req,res) =>{
    const usid = req.session.clienteid;

    const usatual = await Usuarios.findOne({
        where: {
            id: usid,
        },
        include: Pdds,
        plain: true,
    })
    if (!usatual) {
        res.redirect('/login')
    }

    const pdds = usatual.Pdds.map((result) => result.dataValues)

    let Pedidosvazio = false

    if (pdds.length === 0) {
        Pedidosvazio = true
    }

    const prods = usatual.Prods.map((result) => result.dataValues)

    let prodlist = false

    if (prodlist.length === 0) {
        Pedidosvazio = true
    }

    res.render('pages/dashb', { pdds, Pedidosvazio,prods,prodlist,usatual })
}

module.exports ={home,pageuser}