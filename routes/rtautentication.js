const express = require('express')
const router = express.Router()

const {registrar,novousuario,logar,tentarlogar} = require('../controllers/Controllogins')

router.get('/login',logar)
router.post('/login', tentarlogar)
router.get('/cadastro',registrar)
router.post('/cadastro',novousuario)

module.exports = router;