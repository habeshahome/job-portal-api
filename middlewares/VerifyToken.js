let jwt = require('jsonwebtoken');

const VerifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'] // to accept both
    const token = authHeader && authHeader.split(' ')[1]

    if ( token == null)
        return res.status(401)
    
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) 
                return res.status(403)
            req.user = user 
            next()
        })
}

module.exports = { VerifyTokenMiddleware }