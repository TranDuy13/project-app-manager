import axios from 'axios'
const API_URL ='/contract'

const createContract = async (data) => {
    const response = await axios.post(`${API_URL}/createContract`, data)

    return response.data
}
const getContract = async()=>{
    const response = await axios.get(`${API_URL}/getContract`)

    return response.data
}
const updateContract = async(data)=>{
    const response = await axios.put(`${API_URL}/updateContract`,data)

    return response.data
}
const contractService={
    createContract,
    getContract,
    updateContract
}
export default contractService