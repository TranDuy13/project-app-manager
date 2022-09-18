import axios from 'axios'
const API_URL ='/schedule'

const getListSchedule = async () => {
    const response = await axios.get(`${API_URL}/getAllSchedule`)
    return response.data
}
const getListScheduleByWeek = async (data) => {
    const response = await axios.post(`${API_URL}/getScheduleByWeeks`,data)
    return response.data
}
const getListScheduleByWeekUser = async (data) => {
    const response = await axios.post(`${API_URL}/getScheduleByWeeksUser`,data)
    return response.data
}
const getListScheduleNextWeek = async () => {
    const response = await axios.get(`${API_URL}/getScheduleNextWeeks`)
    return response.data
}
const updateSchedule = async(data)=>{
    const response =await axios.put(`${API_URL}/updateSchedule`, data)
    return response.data
}
const updateScheduleUser = async(data)=>{
    const response =await axios.put(`${API_URL}/updateScheduleUser`, data)
    return response.data
}
const createSchedule =async()=>{
    const response =await axios.post(`${API_URL}/createSchedule`)
    return response.data
}
const deleteSchedule = async(id)=>{
    const response = await axios.put(`${API_URL}/deleteSchedule`,id)
    return response.data
}
const enrollSchedule = async(data)=>{
    const response = await axios.post(`${API_URL}/enrollSchedule`,data)
    return response.data
}
const listService ={
    getListSchedule,
    updateSchedule,
    createSchedule,
    deleteSchedule,
    enrollSchedule,
    getListScheduleByWeek,
    getListScheduleNextWeek,getListScheduleByWeekUser ,
    updateScheduleUser
}

export default listService