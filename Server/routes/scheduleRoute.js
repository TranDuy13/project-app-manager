const express = require('express')
const Controller = require('../Controller/scheduleController')
const router = express.Router()

router.put('/deleteSchedule', Controller.deleteSchedule)
router.put('/updateSchedule', Controller.updateSchedule)
router.put('/updateScheduleUser', Controller.updateScheduleUser)
router.post('/enrollSchedule', Controller.enrollSchedule)
router.post('/createSchedule', Controller.createSchedule)
router.get('/getScheduleByAuthor/:FK_Author', Controller.getScheduleByAuthor)
router.get('/getSchedule/:id', Controller.getSchedule)
router.get('/getAllSchedule', Controller.getAllSchedule)
router.post('/getScheduleByWeeks', Controller.getScheduleByWeek)
router.post('/getScheduleByWeeksUser', Controller.getScheduleByWeekUser)
router.get('/getScheduleNextWeeks', Controller.getScheduleNextWeek)
module.exports = router