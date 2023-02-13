const Usuarios = require("../models/Usuarios")

const bcrypt = require('bcryptjs')

module.exports = class Contrologs {

    static logar(req, res) {
        res.render('auth/login')
    }
    
    static async tentarlogar(req, res) {
        const { login, senha } = req.body

        const verusu = await Usuarios.findOne({ where: { login: login } })

        if (!verusu) {
            req.flash('message', 'usuário não encontrado ou senha digitada incorreta')
            res.render('auth/login')

            return
        }

        const senhaGap = bcrypt.compareSync(senha, verusu.senha)

        if (!senhaGap) {
            req.flash('message', 'usuário não encontrado ou senha digitada incorreta!')
            res.render('auth/login')

            return
        }

        //initialize session
        req.session.clientesid = verusu.id

        req.flash('message', "autenticação realizada com sucesso!")
        req.session.save(() => {
            res.redirect('/')
        })
    }

    static pagcadastro(req, res) {
        res.render('auth/cadastro')
    }


    static async CriaUsusuario(req, res) {
        const { nome, sobrenome, login, senha, csenha } = req.body

        if (senha != csenha) {
            req.flash('message', 'As Senhas não conferem, tente novamente!')
            res.render('auth/cadastro')

            return
        }

        const usuarioexiste = await Usuarios.findOne({ where: { login: login } })


        if (usuarioexiste) {
            req.flash('message', 'Um usuário já possui esse login!')
            res.render('auth/cadastro')

            return
        }

        const senhacod = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(senha, senhacod)
        const cadusu = { nome, sobrenome, login, senha: hashedPassword }

        try {
            const criarusu = await Usuarios.create(cadusu)

            req.flash('message', 'Cadastro Realizado com sucesso!')

            req.session.clientesid = criarusu.id

            req.flash('message', 'Cadastro Realizado com sucesso!')

            req.session.save(() => {
                res.redirect('/')
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    static Sairdaconta(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}
