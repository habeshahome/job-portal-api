// importing the model
const User = require('../models/Auth');

const _index = async (req, res, next) => {
    try {
        const response = await User.find({}, ['email name mobile role'])
        res.json(response)
    }
    catch (error) {
        res.status.json(error)
    }
}

const _create = async (req, res, next) => {

    let User = new User({
        name: req.body.name
    })

    try {
        const response = await User.save()
        res.json(response)
    }
    catch (error) {
        res.status.json(error)
    }
}

const _read = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await User.findById(id)
        res.json(response)
    }
    catch (error) {
        res.status.json(error)
    }
}

const _update = async (req, res, next) => {
    let id = req.params.id

    let updatedData = {
        name: req.body.name
    }

    try {
        const response = await User.findByIdAndUpdate(id, { $set: updatedData })
        res.json(response)
    }
    catch (error) {
        res.status.json(error)
    }

}

const _delete = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await User.findByIdAndDelete(id)
        res.json(response)
    }
    catch (error) {
        res.status.json({ message: "Delete Failed" })
    }
}


module.exports = { _index, _create, _read, _update, _delete } 
