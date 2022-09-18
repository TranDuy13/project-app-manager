const Schedule = require("../models/Schedule");
const User = require("../models/User");
const WorkShift = require("../models/workSchedule");

const getAllSchedule = async () => {
  try {
    const schedule = await Schedule.find({});
    // console.log(currentSchedule)
    return {
      message: "Successfully get all schedule",
      success: true,
      data: schedule,
    };
  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const getScheduleByWeek = async (data) => {
  try {
    console.log(data)
    const id = data.id
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    const schedule = await WorkShift.findOne({ employee: id, week: result});
    if(schedule){
      return {
        message: "Successfully get schedule by week",
        success: true,
        data: schedule,
      };
    }

  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const getScheduleByWeekUser = async (data) => {
  try {
    console.log(data)
    const id = data.id
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    const schedule = await WorkShift.findOne({ employee: id, week: result+1});
    if(schedule){
      return {
        message: "Successfully get schedule by week",
        success: true,
        data: schedule,
      };
    }

  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const getScheduleNextWeek = async () => {
  try {
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    // if(currentdate.getDay()>=5){
    //   return{
    //     message:"Registration has expired!",
    //     success: false
    //   }
    // }
    const schedule = await Schedule.find({ week: result+1 });
    if(schedule){
      return {
        message: "Successfully get schedule by week",
        success: true,
        data: schedule,
      };
    }

  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const getSchedule = async (id) => {
  try {
    const currentSchedule = await Schedule.findById(id);

    return {
      message: "Successfully get Schedule",
      success: true,
      data: currentSchedule,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const createSchedule = async () => {
  try {
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    const exist = await Schedule.findOne({ week: { $lt: result + 2 } });
    if (exist) {
      console.log(exist);
      return {
        message: "Fail Create Schedule!",
      };
    }
    const list = [];
    for (let i = 2; i <= 8; i++) {
      for (let j = 1; j <= 3; j++) {
        list.push({ date: i, shift: j, dayOff: "ON", week: result + 1 });
      }
    }
    await Schedule.insertMany(list);
    const AllSchedule = await Schedule.find({});
    return {
      message: "Successfully create Schedule",
      success: true,
      data: AllSchedule,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const getEmployeeSchedule = async (id) => {
  try {
    const currentSchedule = Schedule.findById(id);
    if (!currentSchedule) {
      return {
        message: "An error occurred",
        success: false,
      };
    }
    const employeeOfSchedule = currentSchedule.arrEmployee;

    return {
      message: "Successfully get Employee",
      success: true,
      data: employeeOfSchedule,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const updateSchedule = async (body) => {
  try {
    const id = body.id;
    delete body.id;

    const AllSchedule = await Schedule.find({});
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    const exist = await Schedule.findOne({ week: { $lt: result } });
    if (exist) {
      console.log(exist);
      return {
        message: "Please update current Schedule!",
        success: false,
      };
    }
    const schedule = await Schedule.findByIdAndUpdate(id, body);
    if (!schedule) {
      return {
        message: "Fail to Update Schedule!",
        success: false,
      };
    }
    return {
      message: "Update schedule successfully!",
      success: true,
      data: AllSchedule,
    };
  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const updateScheduleUser = async (body)=>{
  try {
    const id = body.id;
    delete body.id;
    const schedule = await WorkShift.findByIdAndUpdate(id, body);
    const AllSchedule = await WorkShift.find({_id: id});
    if (!schedule) {
      return {
        message: "Fail to Update Schedule!",
        success: false,
      };
    }
    return {
      message: "Update schedule successfully!",
      success: true,
      data: AllSchedule,
    };
  } catch (err) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
}
const enrollSchedule = async (body) => {
  try {
    const employee = body.employee
    const idFindSchedule = body.week
    const existEnroll = await WorkShift.findOne({ week: idFindSchedule, employee: employee });
    if (existEnroll) {
      
      const updateSchedule = await WorkShift.findByIdAndUpdate(
        existEnroll._id,
        body
      );
      if (updateSchedule) {
        return {
          message: "Enroll schedule successfully!",
          success: true,
        };
      }
    } else {
      const newSchedule = new WorkShift(body);
      await newSchedule.save();
      return {
        message: "Enroll schedule successfully!",
        success: true,
      };
    }
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const deleteSchedule = async (body) => {
  try {
    const id = body.id;
    const existSchedule = await Schedule.findOne({ _id: id });

    if (!existSchedule) {
      return {
        message: "Schedule not exist",
        success: false,
      };
    }

    await Schedule.deleteOne({ _id: id });
    const AllSchedule = await Schedule.find({});
    console.log(AllSchedule);
    return {
      data: AllSchedule,
      message: "Successfully delete Schedule",
      success: true,
    }; 
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

module.exports = {
  createSchedule,
  getSchedule,
  getAllSchedule,
  updateSchedule,
  getScheduleByWeek,
  deleteSchedule,
  getScheduleNextWeek,
  enrollSchedule,
  getEmployeeSchedule,
  updateScheduleUser,
  getScheduleByWeekUser
};
