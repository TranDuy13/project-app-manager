const controller = require('./controller')
const productServices = require('../services/product.services')


const getAllProduct = async (req, res, next) => {
  try {
    const resServices = await productServices.getAllProduct(req.query)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    console.log(err);
    return controller.sendError(res)
  }
}

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    // console.log(id)
    const resServices = await productServices.getProduct(id)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const getProductByAuthor = async (req, res, next) => {
  try {
    const { FK_Author } = req.params
    // console.log(FK_Author)
    const resServices = await productServices.getProductByAuthor(FK_Author)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const createProduct = async (req, res, next) => {
  try {
    const resServices = await productServices.createProduct(req.body)
    if (!resServices.success)
      return controller.sendSuccess(res, resServices.success, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }

}


const updateProduct = async (req, res, next) => {
  try {
    const { _id } = req.params
    const resServices = await productServices.updateProduct(_id, req.body)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const resServices = await productServices.deleteProduct(id)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, {}, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}
const getFilter = async (req, res, next) => {
  try {
    const resServices = await productServices.getFilter()
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}
module.exports =  {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProductByAuthor
}