const express = require('express')
const router = express.Router()
const {home,pageuser} = require('../controllers/Controllj');

const entrou = require('../verifieldlog/estalogasn').versetalogado

router.get('/',home)
router.get('/dashb', entrou, pageuser)

module.exports = router;