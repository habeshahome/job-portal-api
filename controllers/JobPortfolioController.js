// importing the model
const JobPortfolio = require('../models/JobPortfolio');

const _index = async (req, res, next) => {
    try {
        const response = await JobPortfolio.find()
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

const _create = async (req, res) => {

    let job = new JobPortfolio({
        user_id: req.body.user_id,
        job_title: req.body.job_title,
        company: req.body.company,
        date_started: req.body.date_started,
        date_ended: req.body.date_ended,
        industry: req.body.industry,
        education: req.body.education,
        skills: req.body.skills
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

const _read = async (req, res) => {
    let id = req.params.id

    try {
        const response = await JobPortfolio.find({ user_id: id })
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
        const response = await JobPortfolio.findByIdAndUpdate(id, { $set: updatedData })
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
        const response = await JobPortfolio.deleteMany({ user_id: id })
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