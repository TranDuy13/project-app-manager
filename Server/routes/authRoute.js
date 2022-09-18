const express = require("express")
const router = express.Router();
const Validator = require('../authenticator/index')
const Controller = require('../Controller/authController')
const authenticator = require('../authenticator/authenticator')
const jwtService = require("../services/jwt.service")

router.get(
    "/getAuth",
    jwtService.verify,
    Controller.getAuth 
);
router.post(
    "/register",
     Validator.body(authenticator.register),
     Controller.registerEmployee
);

router.post(
    "/login",
    Validator.body(authenticator.login),
    Controller.login
)
router.post(
    "/changePassword",
    Validator.body(authenticator.changePassword),
    Controller.changePassword
)
router.post(
    "/adminUpdateProfile",
    Validator.body(authenticator.updateProfile),
    Controller.updateUserProfiles
)
router.post(
    "/updateProfile",
    Validator.body(authenticator.updateProfile),
    Controller.updateUserProfile
)
router.get(
    "/getAllUsers",
    Controller.getAllUsers
)
module.exports = router