'use strict'

//creating schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobApplicationSchema = new Schema(
    {
        job_id: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        }
    }, { timestamps: true })
    .index({ job_id: 1, user_id: 1 }, {unique: true})
    .set('autoIndex', false)

//creating model
const JobApplication = mongoose.model('JobApplication', JobApplicationSchema)

module.exports = JobApplication
