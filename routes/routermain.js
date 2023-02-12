const express = require('express')
const router = express.Router()
const ControlPedUS = require('../controllers/ControlPedUs')


const Entry = require('../verifieldlog/estalogasn').versetalogado

router.get('/',ControlPedUS.Home)
router.get('/dashb', Entry, ControlPedUS.dashb)
router.post('/dashb', Entry, ControlPedUS.dashcompra)
router.get('/atualizarcad/:id', Entry, ControlPedUS.ActualllyDados)
router.post('/atualizarcad', Entry, ControlPedUS.Salvaactually)
router.get('/apagarcount/:id', Entry, ControlPedUS.pgdel)
router.post('/apagarcount', Entry, ControlPedUS.confirmdel)

module.exports = router;