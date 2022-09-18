const adminService = require('../services/admin.services')
const controller = require('./controller')


const  getAllUSerSchedule = async (req, res) => {
    try {
        const resServices = await adminService.getAllUSerSchedule(req.query)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        return controller.sendError(res)
    }
}
const updateUser = async (req, res) => {
    try {
        const {_id} =req.params
        const resServices = await adminService.updateUser(_id,req.body)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        return controller.sendError(res)
    }
}
const deleteUserSchedule = async (req, res)=>{
    try {
        const {user}=req.params
        const resServices = await adminService.deleteUserSchedule(user)
        if(!resServices.success)
            return controller.sendSuccess(res, resServices.data, 200, resServices.message)
     }catch(err){
         return controller.sendError(res)
     }
}


module.exports = Controller ={
    deleteUserSchedule,
    getAllUSerSchedule,
    updateUser
}
