'use strict'

//creating schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'USER'
        }
    }, { timestamps: true })

//creating model
const Auth = mongoose.model('Auth', AuthSchema)

module.exports = Auth 
