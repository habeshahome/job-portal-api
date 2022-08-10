// importing the model
const Menu = require('../models/Menu');

const _index = async (req, res, next) => {
    try {
        const response = await Menu.find()
        res.json({
            response
        })
    }
    catch (error) {
        res.json({
            error
        })
    }
}

const _create = async (req, res, next) => {

    let menu = new Menu({
        name: req.body.name
    })

    try {
        const response = await menu.save()
        res.json({
            response
        })
    }
    catch (error) {
        res.json({
            error
        })
    }
}

const _read = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Menu.findById(id)
        res.json({
            response
        })
    }
    catch (error) {
        res.json({
            error
        })
    }
}

const _update = async (req, res, next) => {
    let id = req.params.id

    let updatedData = {
        name: req.body.name
    }

    try {
        const response = await Menu.findByIdAndUpdate(id, { $set: updatedData })
        res.json({
            response
        })
    }
    catch (error) {
        res.json({
            error
        })
    }

}

const _delete = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Menu.findByIdAndDelete(id)
        res.json({
            response
        })
    }
    catch (error) {
        res.json({
            message: "Delete Failed"
        })
    }
}


module.exports = { _index, _create, _read, _update, _delete } 