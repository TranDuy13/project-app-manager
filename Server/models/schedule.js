const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedules = new Schema({

    date: {
        type: String,
        required: true
    },
    shift:{
        type: String,
        required: true
    },
    dayOff:{
        type: String,
        enum: ['OFF','ON'],
        default: 'ON',
        required: true
    },
    week: {
        type: String,
        required: true
    },

}, { timestamps: true })


module.exports = mongoose.model('Schedule', Schedules)