'use strict'

//creating schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema(
    {
        job_title: {
            type: String,
            required: true
        },
        job_description: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        }
    }, { timestamps: true })

//creating model
const Job = mongoose.model('Job', JobSchema)

module.exports = Job 
