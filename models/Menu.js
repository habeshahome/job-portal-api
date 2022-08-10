'use strict'

//creating schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema(
    {
        name: String
    }, { timestamps: true })

//creating model
const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu 
