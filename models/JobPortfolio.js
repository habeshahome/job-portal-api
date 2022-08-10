'use strict'

//creating User Profile Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    highest_level: String,
    school_name: String,
    date_completed: Date
})

const JobPortfolioSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        unique: true
    },
    date_started: {
        type: Date,
    },
    date_ended: {
        type: Date
    },
    industry: {
        type: Array
    },
    education: {
        type: EducationSchema
    },
    skills: {
        type: Array
    }

}, { timestamps: true });

// creating User Profile model
const JobPortfolio = mongoose.model('JobPortfolio', JobPortfolioSchema);

module.exports = JobPortfolio 