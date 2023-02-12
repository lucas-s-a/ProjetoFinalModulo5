const Usuarios = require("../models/Usuarios")

const bcrypt = require('bcryptjs')

const registrar = async (req,res) =>{
    await res.render('auth/cadastro')
}

const novousuario = async (req,res) =>{
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
    const cadusu = {nome,sobrenome,login,senha:hashedPassword}

    try {
        const criarusu = await Usuarios.create(cadusu)

        req.flash('message', 'Cadastro Realizado com sucesso!')

        req.session.clienteid = criarusu.id

        req.flash('message', 'Cadastro Realizado com sucesso!')

        req.session.save(() => {
            res.redirect('/')
        })
    }
    catch (err) {
        console.log(err)
    }
}

const logar = async (req,res) =>{
    await res.render('auth/login')
}

const tentarlogar = async (req,res) =>{
    const { login, senha } = req.body

    const clientes = await Usuarios.findOne({ where: { login: login } })

    if (!clientes) {
        req.flash('message', 'usuário não encontrado ou senha digitada incorreta')
        res.render('auth/login')

        return
    }

    const passwordMatch = bcrypt.compareSync(senha, clientes.senha)

    if (!passwordMatch) {
        req.flash('message', 'usuário não encontrado ou senha digitada incorreta!')
        res.render('auth/login')

        return
    }

    req.session.clienteid = clientes.id
    
    req.flash('message', "autenticação realizada com sucesso!")
    req.session.save(() => {
        res.redirect('/')
    })
}

module.exports = {registrar,novousuario,logar,tentarlogar}