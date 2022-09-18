const Product = require('../models/Product')


const getAllProduct = async () => {
	try {
		const product = await Product.find({})
		return {
			message: 'Successfully get Product',
			success: true,
			data: product
		}
	} catch (err) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}

const getProduct = async id => {
	try {
		const product = await Product.findById(id)

		return {
			message: 'Successfully get product',
			success: true,
			data: product
		}
	} catch (error) {

		return {
			message: 'An error occurred',
			success: false
		}
	}
}

const getProductByAuthor = async body => {
	try {
		const product = await Product.find({ FK_Author: body })

		return {
			message: 'Successfully get product',
			success: true,
			data: product
		}
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}

const createProduct = async body => {
	try {
		const newProduct = new Product(body)
		// console.log(newProduct)
		await newProduct.save()
		console.log("1")
		return {
			message: 'Successfully create product',
			success: true,
			data: newProduct
		}
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}

const buyProduct = async () => {
	try {

	} catch (error) {

	}
}

const updateProduct = async (id, body) => {
	try {
		//const newProduct = new Product(body)
		const existProduct = await Product.findOne({ _id: id })
		if (!existProduct) {
			return {
				message: 'Product not exist',
				success: false
			}
		}
		await existProduct.updateOne({ _id: id }, body)
		return {
			message: 'Successfully update product',
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

const deleteProduct = async id => {
	try {
		const existProduct = await Product.findOne({ _id: id })
		if (!existProduct) {
			return {
				message: 'Product not exist',
				success: false
			}
		}

		await Product.deleteOne({ _id: id })

		return {
			message: 'Successfully delete product',
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
	createProduct,
	getProduct,
	getAllProduct,
	updateProduct,
	deleteProduct,
	getProductByAuthor
}
