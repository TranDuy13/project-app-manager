const Contract = require("../models/Contract")

const User = require("../models/User")

const getContract = async()=>{
	try {

		const contract = await Contract.find({})
		contract['data']="1231"
		console.log(contract)
		if(!contract){
			return {
				message: 'Invalid contract!',
				success: false,
			}
		}
		return({
			message:"Get Contract Successfully",
			data: contract,
			success: true
		})
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
	
}
const createContract = async(body)=>{
    try {
        const newContract = new Contract(body)
		const id = body.employee
		const existContract = await Contract.findOne({employee: id})
		if(existContract){
			return{
				message: "Contract is exist!",
				success: false
			}
		}
        await newContract.save()
        return{
            message: 'Successfully create Contract',
			success: true,
			data: newContract
		}
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}
const updateContract = async (body) => {
	try {
		const id = body.id
		delete body.id
		const existContract = await Contract.findOne({ _id: id })
		if (!existContract) {
			return {
				message: 'Contract not exist',
				success: false
			}
		}
		console.log(body)
		await Contract.findByIdAndUpdate(id, body)
		const contracts = await Contract.find({})
		return {
			data: contracts,
			message: 'Successfully update Contract',
			success: true,
			
		}
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}
module.exports={
    createContract,
    updateContract,
	getContract
}