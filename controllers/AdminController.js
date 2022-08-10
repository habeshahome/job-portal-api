// importing the model
const Admin = require('../models/Admin');

const _index = async (req, res, next) => {
    try {
        const response = await Admin.find()
        res.json(response)
    }
    catch (error) {
        res.json(error)
    }
}


const _create = async (req, res, next) => {

    let Admin = new Admin({
        name: req.body.name
    })

    try {
        const response = await Admin.save()
        res.json(response)
    }
    catch (error) {
        res.json(error)
    }
}


const _read = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Admin.findById(id)
        res.json(response)
    }
    catch (error) {
        res.json(error)
    }
}


const _update = async (req, res, next) => {
    let id = req.params.id

    let updatedData = {
        name: req.body.name
    }

    try {
        const response = await Admin.findByIdAndUpdate(id, { $set: updatedData })
        res.json(response)
    }
    catch (error) {
        res.json(error)
    }

}


const _delete = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Admin.findByIdAndDelete(id)
        res.json(response)
    }
    catch (error) {
        res.json({ message: "Delete Failed" })
    }
}


module.exports = { _index, _create, _read, _update, _delete } 