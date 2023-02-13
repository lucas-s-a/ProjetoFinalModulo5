const session = require('express-session')
const Usuarios = require("../models/Usuarios")
const Pdds = require("../models/Pdds")
const Prods = require("../models/Prods")


module.exports = class ControlPedUS {

    static Home(req, res) {
        res.render('pages/home')
    }

    static async dashb(req, res) {
        const clienteid = req.session.clientesid;

        const usatual = await Usuarios.findOne({
            where: {
                id: clienteid,
            },
            raw: true,
        })
        if (!usatual) {
            res.redirect('/login')
        }

        const ped = await Pdds.findAll({
            where: {
                clienteid: clienteid
            },
            raw: true
        })

        let exibirpedidos = false

        if (ped.length === 0) {
            exibirpedidos = true
        }

        const produtos = await Prods.findAll({
            raw: true
        })


        res.render('pages/dashb', { usatual: usatual, produtos, ped, exibirpedidos })
    }

    static async dashcompra(req, res) {
        const clienteId = req.body.id
        let n1 = req.body.prodcompra
        let n2 = req.body.priceunit
        let n3 = req.body.qtdcompra
        let n4 = req.body.totalcompra
        let n7 = req.body.npedd
        console.log(typeof (n1), typeof (n2), typeof (n3), typeof (n4), n7)
        console.log(n1, n2,n3, n4, n7)
        if (typeof (n1) == 'object') {
            for (let x = 0; x < n1.length; x++) {
                let nomep = n1[x]
                let priceu = n2[x]
                let qtdp = n3[x]
                let vtt_compra = n4
                let npedd = n7
                await Pdds.create({ npedd, nomep, priceu, qtdp, vtt_compra, clienteId })
            }
            res.redirect('/pages/dashb')
        } else if (typeof (n1) == 'string') {
            let nomep = n1
            let priceu = n2
            let qtdp = n3
            let vtt_compra = n4
            let npedd = n7
            await Pdds.create({ npedd, nomep, priceu, qtdp, vtt_compra, clienteId })
            res.redirect('/pages/dashb')
        }else if (typeof (n1) == 'undefined'){
            console.log('para porfavor')
            res.redirect('/pages/dashb')
        }
    }

    static async ActualllyDados(req, res) {
        const id = req.params.id
        const usdados = await Usuarios.findOne({ where: { id: id }, raw: true })

        res.render('pages/atualizarcad', { usdados })
    }
    static async Salvaactually(req, res) {
        const id = req.body.id

        const clie = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome
        }

        try {
            await Usuarios.update(clie, { where: { id: id } })

            req.flash('message', 'Dados atualizado com sucesso')

            req.session.save(() => {
                res.redirect('/pages/dashb')
            })

        } catch (error) {
            console.log(error)
        }
    }

    static async pgdel(req, res) {
        const id = req.params.id
        const usdados = await Usuarios.findOne({ where: { id: id }, raw: true })

        res.render('pages/apagarcount', { usdados })
    }

    static async confirmdel(req, res) {
        const idu = req.body.id;
        const UserId = req.session.clientesid;

        try {
            await Usuarios.destroy({ where: { id: idu, id: UserId } })

            req.flash('message', 'pensamento removido com sucesso!')

            req.session.save(() => {
                res.redirect('/pages/home')
            })
        } catch (error) {
            console.log(error)
        }
    }

}