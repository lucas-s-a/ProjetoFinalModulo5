const express = require('express')
const router = express.Router()

const Contrologs = require('../controllers/Controlpl')

router.get('/login',Contrologs.logar)
router.post('/login', Contrologs.tentarlogar)
router.get('/cadastro',Contrologs.pagcadastro)
router.post('/cadastro',Contrologs.CriaUsusuario)
router.get('/sair',Contrologs.Sairdaconta)


module.exports = router;