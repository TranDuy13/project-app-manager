const express = require('express')

const authRoute= require('./authRoute')

const scheduleRoute = require('./scheduleRoute')

const contractRoute = require('./contractRoute')

// const adminRoute = required('./adminRoute')

const Route = express.Router()

Route.use('/auth', authRoute);

Route.use('/schedule', scheduleRoute);

Route.use('/contract', contractRoute);

// Route.use('/admin', adminRoute);

module.exports= Route;