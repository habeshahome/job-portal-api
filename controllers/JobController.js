// importing the model
const Job = require('../models/Job');


const _index = async (req, res, next) => {
    try {
        const response = await Job.find().sort('-createdAt')
        res.json(response)
    }
    catch (error) {
        res.status(404).json(error)
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
        res.json(response)
    }
    catch (error) {
        res.status(404).json(error)
    }
}


const _read = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Job.findById(id)
        res.json(response)
    }
    catch (error) {
        res.status(404).json(error)
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
        res.json(response)
    }
    catch (error) {
        res.status(404).json(error)
    }

}


const _delete = async (req, res, next) => {
    let id = req.params.id

    try {
        const response = await Job.findByIdAndDelete(id)
        res.json(response)
    }
    catch (error) {
        res.status(404).json({ message: "Delete Failed" })
    }
}


const _search = async (req, res) => {
    let keyword = req.params.keyword
    let pattern = keyword

    console.log("pattern is :")
    console.log(pattern)

    try {
        const response = await Job.find({ job_title: new RegExp(keyword, 'i') })
        console.log(response.length )
        if (response.length > 0)
            res.json(response)
        else 
            res.status(404).json({ message: "Job Not Found"})

    }
    catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { _index, _create, _read, _update, _delete, _search } 