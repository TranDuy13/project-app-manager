import "./resetPassword.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useEffect, useState } from "react";
import { getUser,changePassword, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
function Password() {
  const {user, isLoading, isError, isSuccess, message }= useSelector((state)=>state.auth)
  const dispatch= useDispatch()
  const navigate = useNavigate()
 
  const formSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, "Password length should be at least 8 characters"),
      checkPass: Yup.string()
      .min(8, "Password length should be at least 8 characters")
      .oneOf([Yup.ref("newPassword")], "Passwords do not match!"),
      oldPassword:Yup.string()
      .min(8, "Password length should be at least 8 characters"),
  });


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message.message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch,user]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,

  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  let password;
  password = watch("newPassword", "");

  const onSubmit = (data) => {
    const id = user.data._id
    const newPassword= data.newPassword
    const oldPassword=data.oldPassword

    const userData = {
       newPassword,
       oldPassword,
       id
    };
    dispatch(changePassword(userData));
  };
  return (
    <>
      <Box
        className="padding-alert"
        component="span"
        sx={{
          ml: 2,
          pr: 60,
          pl: 60,
          border: "1px dashed grey",
          borderRadius: "12px",
          borderColor: "rgb(255, 193, 7)",
        }}
      >
        <Alert  severity="warning">Do not share your password</Alert>
      </Box>
      <div className="password">
        <div className="css-password">Change Password</div>
        <hr className="border-form" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, mt: 3, ml: 2.5, width: "67ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="oldPassword"
                  name="oldPassword"
                  label="Current Password"
                  type="password"
                  autoComplete="current-password"
                  {...register("oldPassword")}
                  maxRows={4}
                  
                  required
                />
              </div>
            </Box>
            <div className="message">{errors.oldPassword?.message}</div>
            <div className="confirm-password">
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    mt: 3,
                    ml: 2.5,
                    width: "67ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                
                <div>
                
                  <TextField
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
            
                    {...register("newPassword")}
                    required
                    maxRows={4}
                  />
                </div>
                
              </Box>
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    mt: 3,
                    ml: 2.5,
                    width: "67ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="checkPass"
                    name="checkPass"
                    label="Check Password"
                    type="password"
                    // value={checkPass}
                    maxRows={4}
                    {...register("checkPass")}
                    // onChange={onChange}
                    required
                  />
                </div>
              </Box>
            </div>
            <div className="message">{errors.checkPass?.message}</div>
            <div className="btn-confirm">
              <Button sx={{ textTransform: "capitalize" }} type="submit" variant="contained">
                Change Password
              </Button>
            </div>
          </form>
        </div>
              
      </div>

    </>
  );
}
export default Password;
