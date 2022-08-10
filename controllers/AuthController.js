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
        res.json([{ accessToken: accessToken}, {user: auth }])
    }
    catch (err) {
        res.status(500).send([{ message: "Registration failed" }])
    }
}

const login = async (req, res, next) => {
    // find user in db
    const auth = await Auth.findOne({ email: req.body.email })

    if (auth === null) {
        res.status(400).send({ message: "User not found" })
    }
    try {
        // bcrypt.compare(newPassword, oldPassword)
        if (await bcrypt.compare(req.body.password, auth.password)) {
            // jwt 
            const accessToken = await jwt.sign(auth.email, process.env.JWT_SECRET)
            // response sucess
            res.json([{ accessToken: accessToken}, {user: auth }])
        } else {
            res.json({ message: "User Authentication Failed" })
        }
    }
    catch (err) {
        console.log(auth)
        res.status(500).send({ message: err.message })
    }
}


const index = async (req, res, next) => {
    try {
        const response = await Auth.find()
        res.json(response)
    }
    catch (err) {
        res.json({ message: "no user found" })
    }
}

module.exports = { register, login, index } 