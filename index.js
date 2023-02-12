const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Prod = require('./models/Prod')
const Pdds = require('./models/Pdds')


app.engine('handlebars',engine())
app.set('view engine','handlebars')

app.use(
    express.urlencoded({
        extended:true
    }),
)

app.use(express.json())

app.use(express.static('public',))



app.get('/',function(req,res) {
    Prod.findAll({raw:true})
    .then((prods) => {
        console.log(prods)
        res.render('home',{prods:prods}) // ou um users ja server
    })
    .catch((err)=> console.log(err))
    
})

app.get('/users/create',(req,res) => {
    res.render('adduser')
})
app.post('/addped',(req,res) => {
    let n = req.body.tolete
    let n1 = req.body.tolete2
    let n2 = req.body.tolete3
    let n3 = req.body.tolete4
    arreyteste = []
    for(let x = 0;x<n.length;x++){
        let NomeP = n[x]
        let PriceU = n1[x]
        let QtdP = n2[x]
        let Vtt_compra = n3
        let NPedd = 1
        arreyteste.push([NomeP,PriceU,QtdP,Vtt_compra])
        Pdds.create({NPedd,PriceU,NomeP,QtdP,Vtt_compra})        
    }
    console.log(arreyteste)
    /*Pdds.create({PriceU,NomeP,QtdP,Vtt_compra})let name = req.body.name
    let occupation = req.body.occupation
    let newsletter = req.body.newsletter
    if (newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    */

})
/*
app.get('/users/:id',function(req,res) {
    const id = req.params.id

    User.findOne({
        raw:true,
        where:{
            id:id
        }
    })
    .then((user) => {
        console.log(user)
        res.render('userview',{user})
    }).catch((err) => console.log(err))
})

app.post('/users/delete/:id',(req,res) =>{
    const id = req.params.id
    User.destroy({
        where:{id:id}
    })
    .then((user) =>{
        res.redirect('/')
    }).catch((err)=> {console.log(err)})
})

app.get('/users/edit/:id',(req,res) => {
    const id = req.params.id

    User.findOne({
        raw:true,
        where:{
            id:id
        }
    })
    .then((user) => {
        console.log(user)
        res.render('useredit',{user})
    })
    .catch((err)=> console.log(err))
})

app.post('/users/update',(req,res)=> {
    const id =req.body.id
    let name =req.body.name
    let occupation =req.body.occupation
    let newsletter =req.body.newsletter
    if (newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    const userData = {
        id,name,occupation,newsletter
    }
    User.update(userData,{
        where:{id:id}
    })
    .then((user)=>{
        console.log(user)
        res.redirect('/')
    }).catch((err)=> console.log(err))
})
*/
conn.sync().then(() =>{
    app.listen(3000)
})
.catch((err)=> console.log(err))