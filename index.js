const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')


const Pdds = require('./models/Pdds')
const Prods = require('./models/Prods')
const Usuarios = require('./models/Usuarios')


const router1 = require('./routes/router')
const router2 = require('./routes/rtautentication')

const CgTd = require('./controllers/Controllj')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

app.use(
    session({
        name: "session",
        secret: "MinhaChave",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 360000
        }
    }),
)
app.use(flash())

app.use(express.static('public'))


app.use((req, res, next) => {
    if (req.session.clienteid) {
        res.locals.session = req.session
    }
    next()
})



app.use('/pages',router1)
app.use('/',router2)

app.get('/', CgTd.home)


conn.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))