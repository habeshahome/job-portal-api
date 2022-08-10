var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var AuthController = require('../controllers/AuthController')

const users = []

router.get('/users', AuthController.index )
/* auth routes with controller */
router.post('/register', AuthController.register )
router.post('/login', AuthController.login)

module.exports = router;


/* 

const users = []

router.get('/users', (req, res, next) => {
    res.send(users)
})

router.post('/register', async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)

        console.log(salt)
        console.log(hash)

        const user = {
            email: email,
            password: hash
        }
        // add to database 
        users.push(user)

        // response sucess
        res.status(201).send({ message: "Success" })
    }
    catch (err) {
        res.status(500).send({ message: "Registration failed" })
    }
});

router.post('/login', async (req, res) => {

    // fetch user from database by email
    const user = users.find(user => user.email === req.body.email)
    if (user == null) {
        res.status(400).send({ message: "User not found" })
    }

    try {
        // bcrypt.compare(newPassword, oldPassword)
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send({ message: "User Authenticatioin Success" })
        } else {
            res.json({ message: "User Authentication Failed" })
        }

    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

*/