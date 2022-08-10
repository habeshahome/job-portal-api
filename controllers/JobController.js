// importing the model
const Job = require('../models/Job');

const _index = async (req, res, next) => {
    try {
        const response = await Job.find()
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

    let job = new Job({
        job_title: req.body.job_title,
        job_description: req.body.job_description,
        company: req.body.company
    })

    try {
        const response = await job.save()
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
        const response = await Job.findById(id)
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
        job_title: req.body.job_title,
        job_description: req.body.job_description,
        company: req.body.company
    }

    try {
        const response = await Job.findByIdAndUpdate(id, { $set: updatedData })
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
        const response = await Job.findByIdAndDelete(id)
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