'use strict'

//creating User Profile Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    cv_text: {
        type: String,
        default: "CV Text"
    },
    designation: {
        type: String,
        required: true
    }

}, { timestamps: true });

// creating User Profile model
const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile 