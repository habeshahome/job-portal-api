// importing the model
const Auth = require('../models/Auth');
var bcrypt = require('bcryptjs');

let jwt = require('jsonwebtoken');

const register = async (req, res) => {

    try {
        const salt = await bcrypt.genSalt() // salt stength 10 (default) 
        const hash = await bcrypt.hash(req.body.password, salt)

        const auth = new Auth({
            email: req.body.email,
            password: hash,
            role: req.body.role || "USER"
        })

        // add to database 
        await auth.save()

        // jwt 
        const accessToken = await jwt.sign(auth.email, process.env.JWT_SECRET)
        // response sucess
        res.json([{ accessToken: accessToken }, { user: auth }])
    }
    catch (err) {
        res.status(409).json([{ message: err }])
    }
}

const login = async (req, res, next) => {
    let auth

    try {
        // find user in db

        auth = await Auth.findOne({ email: req.body.email })
        if (auth == null) {
            res.status(401).json({ message: "User not found" })
        } else {
            // bcrypt.compare(newPassword, oldPassword)
            if (await bcrypt.compare(req.body.password, auth.password)) {
                // jwt singing
                const accessToken = await jwt.sign(auth.email, process.env.JWT_SECRET)
                // response sucess
                res.json([{ accessToken: accessToken }, { user: auth }])
            } else {
                res.status(401).json({ message: "User Authentication Failed" })
            }
        }
    }
    catch (err) {
        console.log(auth)
        res.status(400).json({ message: err })
    }
}


const index = async (req, res, next) => {
    try {
        const response = await Auth.find()
        if (response !== null || response.length() !== 0)
            res.json(response)
        else
            res.status(401).json({ message: "No User in the Database" })
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}

module.exports = { register, login, index } 