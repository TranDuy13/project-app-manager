const USER = require("../models/User");
const argon2 = require("argon2");
const { ACCESS_TOKEN_SECRET } = require("../models/index");
const jwtService = require("./jwt.service");

const registerEmployee = async (body) => {
  try {
    const {
      username,
      password,
      fullname,
      role,
      address,
      IDcard,
      telephone,
      email,
      birthday,
      status,
    } = body;
    const existUser = await USER.findOne({
      username: username,
    });

    if (existUser) {
      return {
        message: "User already exist !",
        success: false,
      };
    }
    const existUser1 = await USER.findOne({
      IDcard: IDcard,
    });

    if (existUser1) {
      return {
        message: "IDCard already exist !",
        success: false,
      };
    }
    const hashedPassword = await argon2.hash(password);

    const newUser = new USER({
      username,
      password: hashedPassword,
      fullname,
      role,
      address,
      IDcard,
      telephone,
      email,
      birthday,
      status,
    });

    await newUser.save();
    const a = await USER.findOne({ IDcard: IDcard });
    console.log(a._id);
    return {
      message: "Create user successfully!",
      success: true,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const login = async (body) => {
  try {
    const { username, password } = body;
    console.log(body);
    const user = await USER.findOne({
      username: username,
    });
    if (!user)
      return {
        message: "Invalid user!",
        success: false,
      };
      console.log(password)
    const PasswordValid = await argon2.verify(user.password, password);
    if (!PasswordValid) {
      return {
        message: "Invalid password!",
        success: false,
      };
    }
    const generateToken = jwtService.createToken(user._id);
    return {
      message: "Login successfully!",
      success: true,
      data: { token: generateToken, user: user },
    };
  } catch (error) {
    console.log(error);
    return {
      message: "An error occurred!",
      success: false,
    };
  }
};
const getAuth = async (body) => {
  try {
    const user = await USER.findById(body);
    if (!user) {
      return {
        message: "Login Fail!",
        success: false,
      };
    }
    return {
      message: "Login Successfully!",
      success: true,
      data: user,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const getAllUsers = async () => {
  try {
    const users = await USER.find({});
    return {
      message: "Successfully get all users",
      success: true,
      data: users,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const changePassword = async (body) => {
  try {
    const newPassword = body.newPassword;
    const oldPassword = body.oldPassword;
    const id = body.id;
    const info = await USER.findOne({ _id: id });
    const PasswordValid = await argon2.verify(info.password, oldPassword);

    if (!PasswordValid) {
      return {
        message: "Invalid password!",
        success: false,
      };
    } else {
      if (oldPassword === newPassword) {
        return {
          message: "This password must be different from the old password!",
          success: false,
        };
      }
    }
    const password = await argon2.hash(newPassword);
    const data = { password };
    const user = await USER.findByIdAndUpdate(id, data, { new: true });
    if (user) {
      return {
        message: "Change password successfully!",
        success: true,
        data: user,
      };
    }
    return {
      message: "Change Password fail!",
      success: false,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const getProfile = async (id) => {
  try {
    const info = await USER.findOne({ _id: id });
    return {
      message: "Successfully get information",
      success: true,
      data: info,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

const updateUserProfile = async (body) => {
  try {
    const id = body.id;
    const password = body.password;
    if (password) {
      const passwords = await argon2.hash(password);
      const data =passwords
      body['password']=data;
      
    }
    delete body.id;
    const userUpdate = await USER.findByIdAndUpdate(id, body);

    if (userUpdate) {
      const user = await USER.find({ _id: id });
      console.log(user);
      return {
        message: "Successfully update user",
        success: true,
        data: user,
      };
    }
    return {
      message: "Fail update user",
      success: false,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};
const updateUserProfiles = async (body) => {
  try {
    const id = body.id;
    const password = body.password;
    if (password) {
      const passwords = await argon2.hash(password);
      const data =passwords
      body['password']=data;
      
    }
    delete body.id;
    const userUpdate = await USER.findByIdAndUpdate(id, body);

    if (userUpdate) {
      const user = await USER.find({});
      console.log(user);
      return {
        message: "Successfully update user",
        success: true,
        data: user,
      };
    }
    return {
      message: "Fail update user",
      success: false,
    };
  } catch (error) {
    return {
      message: "An error occurred",
      success: false,
    };
  }
};

module.exports = {
  registerEmployee,
  login,
  getAuth,
  updateUserProfile,
  getAllUsers,
  changePassword,
  updateUserProfiles
};
