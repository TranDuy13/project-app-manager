const controller = require('./controller')
const ScheduleServices = require('../services/schedule.services')


const getAllSchedule = async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.getAllSchedule(req.query)
        // console.log(resServices)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const getSchedule = async (req, res, next) => {
    try {
        const { id } = req.params
        // console.log(id)
        const resServices = await ScheduleServices.getSchedule(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const getScheduleByAuthor = async (req, res, next) => {
    try {
        const { FK_Author } = req.params
        // console.log(FK_Author)
        const resServices = await ScheduleServices.getScheduleByAuthor(FK_Author)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const createSchedule = async (req, res, next) => {
    console.log(req.body)
    try {
        const resServices = await ScheduleServices.createSchedule()
        
        
        if (!resServices.success) {
          return controller.sendSuccess(res,{} ,300, resServices.message)
        }
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
      
      } catch (err) {
        return controller.sendError(res)
      } 

}


const updateSchedule = async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.updateSchedule(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const updateScheduleUser =async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.updateScheduleUser(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const enrollSchedule = async (req, res, next) => {
    try {
       
        const resServices = await ScheduleServices.enrollSchedule(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}
const getScheduleByWeek = async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.getScheduleByWeek(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}
const getScheduleByWeekUser = async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.getScheduleByWeekUser(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}
const getScheduleNextWeek = async (req, res, next) => {
    try {
       
        const resServices = await ScheduleServices.getScheduleNextWeek()
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}
const deleteSchedule = async (req, res, next) => {
    try {
        const resServices = await ScheduleServices.deleteSchedule(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

module.exports = {
    getAllSchedule,
    getSchedule,
    updateSchedule,
    deleteSchedule,
    getScheduleByAuthor,
    createSchedule,
    enrollSchedule,
    getScheduleByWeek,
    getScheduleNextWeek,
    updateScheduleUser,
    getScheduleByWeekUser
}