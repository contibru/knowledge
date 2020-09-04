module.exports = middleare => {
    return (req, res, next) => {
        if (req.user.admin) {
            middleare(req, res, next)
        } else {
            res.status(402).send('Usuário não é administrador.')
        }
    }
};