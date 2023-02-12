module.exports.versetalogado = function (req, res, next) {

    const Usok = req.session.clienteid;

    if (!Usok) {
        res.redirect('/login')
    }
    next()
}