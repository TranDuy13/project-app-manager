const express = require("express");
const authService = require("../services/auth.service")
const controller =require("./controller")
const User = require("../models/User")
const argon2 = require("argon2");

const registerEmployee = async (req, res) =>{
  try {
    const resAuth = await authService.registerEmployee(req.value.body)
    if (!resAuth.success) return controller.sendError(res, resAuth.data, 300, resAuth.message)
    return controller.sendSuccess(res, resAuth.data, 200, resAuth.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const login = async (req, res) => {
  try {
    const resServices = await authService.login(req.value.body)
    
    
    if (!resServices.success) {
      return controller.sendError(res, resServices.message,300)
    }
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  
  } catch (err) {
    return controller.sendError(res,message,500)
  } 
}

const getAuth = async(req, res)=>{
  try {
   
    const body =req.value.body
    const _id=body.decodeToken.data
    const token =body.token
    const CheckData = await authService.getAuth({_id, token})
    return controller.sendSuccess(res, CheckData.data, 200, CheckData.message)
  } catch (error) {
     return controller.sendError(res)
  }
}
const updateUserProfile = async(req, res)=>{
  try {
    const resServices = await authService.updateUserProfile(req.value.body)
    if (!resServices.success) {
      return controller.sendSuccess(res,{} ,300, resServices.message)
    }
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  
  } catch (err) {
    return controller.sendError(res)
  } 
}
const updateUserProfiles = async(req, res)=>{
  try {
    const resServices = await authService.updateUserProfiles(req.value.body)
    if (!resServices.success) {
      return controller.sendSuccess(res,{} ,300, resServices.message)
    }
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  
  } catch (err) {
    return controller.sendError(res)
  } 
}
const getAllUsers = async (req, res, next) => {
  try {
    const resServices = await authService.getAllUsers()
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    return controller.sendError(res)
  }
}
const changePassword = async (req, res, next) => {
  try {
    const resServices = await authService.changePassword(req.value.body)
    
    
    if (!resServices.success) {
      return controller.sendSuccess(res,{} ,300, resServices.message)
    }
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  
  } catch (err) {
    return controller.sendError(res)
  } 

}
module.exports={
  registerEmployee,
  login,
  getAuth,
  updateUserProfile,
  getAllUsers,
  changePassword,
  updateUserProfiles
}