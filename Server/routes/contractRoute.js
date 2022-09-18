const express = require("express")
const router = express.Router();
const Controller = require('../Controller/contract.controller')


router.post(
    "/createContract",
    Controller.createContract
)
router.put(
    "/updateContract",
    Controller.updateContract
)
router.get(
    "/getContract",
    Controller.getContract
)
module.exports = router