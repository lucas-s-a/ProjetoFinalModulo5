module.exports.versetalogado = function (req, res, next) {

    const Usok = req.session.clientesid;

    if (!Usok) {
        res.redirect('/login')
    }
    next()
}