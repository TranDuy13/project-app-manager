const controller = require("./controller");
const contractServices = require("../services/contract.service");

const getContract = async (req, res) => {
  try {

    const resServices = await contractServices.getContract();
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message);
    return controller.sendSuccess(
      res,
      resServices.data,
      200,
      resServices.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};

const createContract = async (req, res) => {
  try {
    const resServices = await contractServices.createContract(req.body);
    if (!resServices.success)
      return controller.sendSuccess(
        res,
        resServices.success,
        300,
        resServices.message
      );
    return controller.sendSuccess(
      res,
      resServices.data,
      200,
      resServices.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};

const updateContract = async (req, res, next) => {
  try {
  
    const resServices = await contractServices.updateContract(req.body);
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message);
    return controller.sendSuccess(
      res,
      resServices.data,
      200,
      resServices.message
    );
  } catch (error) {
    return controller.sendError(res);
  }
};

module.exports = {
  createContract,
  updateContract,
  getContract
};
