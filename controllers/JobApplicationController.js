// importing the model
const JobApplication = require('../models/JobApplication');

const _index = async (req, res, next) => {
    try {
        const response = await JobApplication.find()
        res.json(response)
    }
    catch (error) {
        res.status(404).json({
            error
        })
    }
}

const _create = async (req, res) => {

    let job = new JobApplication({
        job_id:     req.body.job_id,
        user_id:    req.body.user_id,
        job_title:  req.body.job_title,
        company:    req.body.company,
    })

    try {
        const response = await job.save()
        res.json(response)
    }
    catch (error) {
        res.status(404).json({
            error
        })
    }
}

const _read = async (req, res) => {
    let id = req.params.id

    try {
        const response = await JobApplication.find({ user_id: id })
        res.json(response)

    }
    catch (error) {
        res.status(404).json(error)
    }
}

const _update = async (req, res, next) => {
    let id = req.params.id

    let updatedData = {
        job_id:     req.body.job_id,
        user_id:    req.body.user_id,
        job_title:  req.body.job_title,
        company:    req.body.company,
    }

    try {
        const response = await JobApplication.findByIdAndUpdate(id, { $set: updatedData })
        res.json(response)
    }
    catch (error) {
        res.status(404).json(error)
    }

}

const _delete = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await JobApplication.deleteMany({ user_id: id })
        res.json(response)
    }
    catch (error) {
        res.status(404).json({
            message: "Delete Failed"
        })
    }
}


module.exports = { _index, _create, _read, _update, _delete } 