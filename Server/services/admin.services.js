const USER = require('../models/User')
const ENTERPRISE = require('../models/Enterprise')
const SCHEDULE= require('../models/schedule')
const { SchemaTypes } = require('mongoose')


const getAllUSerSchedule = async () => {
    try {
        const schedule = await SCHEDULE.find({})
        return {
            message: 'Successfully get all users',
            success: true,
            data: schedule
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getScheduleByWeek = async ()

const updateUser = async (id, body) => {
    try {
        await SCHEDULE.updateOne({ _id: id }, body)

        return {
            message: 'Successfully update user schedule',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getUserSchedule = async (id) => {
    try {
        const schedule = await SCHEDULE.findOne({ _id: id })
        return {
            message: 'Successfully get user',
            success: true,
            data: schedule
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}


const deleteUserSchedule = async (id) => {
    try {
        await SCHEDULE.deleteOne({ _id: id})

        return {
            message: 'Successfully delete User',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

module.exports = {
    getAllCustomer,
    getAllEnterprise,
    getUserSchedule ,
    getAllUSerSchedule,
    deleteUserSchedule,
    updateUser
}