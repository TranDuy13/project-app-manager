import "./register.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { registerUser, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Select from "@mui/material/Select";
function RegisterUser() {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [role, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const formSchema = Yup.object().shape({
    password: Yup.string().min(
      8,
      "Password length should be at least 8 characters"
    ),
    checkPass: Yup.string()
      .min(8, "Password length should be at least 8 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match!"),
    username: Yup.string().min(
      6,
      "username length should be at least 6 characters"
    ),
    fullname: Yup.string().min(
      8,
      "Name length should be at least 8 characters"
    ),
    address: Yup.string().min(
      8,
      "Address length should be at least 8 characters"
    ),
    IDcard: Yup.string().min(
      8,
      "Id card length should be at least 8 characters"
    ),
    telephone: Yup.string().min(
      8,
      "Phone number length should be at least 8 characters"
    ),
    email: Yup.string().min(8, "email length should be at least 8 characters"),
    birthday: Yup.string().min(8, ""),
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Create User successfully!");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, user]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  let password;
  password = watch("password", "");

  const onSubmit = (data) => {
    data["role"]=role
    data["status"]="WORKING"
    delete data.checkPass
    dispatch(registerUser(data));

  };
  return (
    <>
      <div className="password">
        <div className="css-password">Create Account User</div>
        <hr className="border-form" />
        <div>
          <form className="formCreate" onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, mt: 3, ml: 2.5, width: "72ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  autoComplete="current-password"
                  {...register("username")}
                  maxRows={4}
                  type="username"
                  required
                />
              </div>
            </Box>
            <div className="message">{errors.username?.message}</div>
            <div className="confirm-password">
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    mt: 3,
                    ml: 2.5,
                    width: "34.5ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    {...register("password")}
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
                    width: "34.5ch",
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
                    maxRows={4}
                    {...register("checkPass")}
                    required
                  />
                </div>
              </Box>
            </div>
            <div className="message">{errors.checkPass?.message}</div>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, mt: 3, ml: 2.5, width: "72ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="fullname"
                  name="fullname"
                  label="Name"
                  autoComplete="current-password"
                  {...register("fullname")}
                  maxRows={4}
                  required
                />
              </div>
            </Box>
            <div className="message">{errors.fullname?.message}</div>
            <div className="confirm-password">
              <FormControl variant="standard" sx={{p:2, mr:5, width: 300 }}>
                <InputLabel id="role">
                  ROLE
                </InputLabel>
                <Select
                  sx={{
                    "& .MuiTextField-root": {
                      m: 1,
                      mt: 3,
                      ml: 2.5,
                      width: "34.5ch",
                    },
                  }}
                  labelId="role"
                  id="role"
                  value={role}
                  onChange={handleChange}
                  label="ROLE"
                >
                  <MenuItem value={"FULLTIME"}>FULLTIME</MenuItem>
                  <MenuItem value={"PARTTIME"}>PARTTIME</MenuItem>
                </Select>
              </FormControl>

              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    mt: 3,
                    ml: 2.5,
                    width: "34.5ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="IDcard"
                    name="IDcard"
                    label="ID CARD"
                    // value={checkPass}
                    maxRows={4}
                    {...register("IDcard")}
                    // onChange={onChange}
                    required
                  />
                </div>
              </Box>
            </div>
            <div className="message">{errors.IDcard?.message}</div>
            <div className="confirm-password">
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    mt: 3,
                    ml: 2.5,
                    width: "34.5ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="telephone"
                    name="telephone"
                    label="Phone Number"
                    {...register("telephone")}
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
                    width: "34.5ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="birthday"
                    name="birthday"
                    type="date"
                    label="Birth Day"
                    maxRows={4}
                    {...register("birthday")}
                    // onChange={onChange}
                    required
                  />
                </div>
              </Box>
            </div>
            <div className="message">{errors.telephone?.message}</div>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, mt: 3, ml: 2.5, width: "72ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="current-password"
                  {...register("email")}
                  maxRows={4}
                  required
                />
              </div>
            </Box>
            <div className="message">{errors.email?.message}</div>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, mt: 3, ml: 2.5, width: "72ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  type="address"
                  autoComplete="current-password"
                  {...register("address")}
                  maxRows={4}
                  required
                />
              </div>
            </Box>
            <div className="message">{errors.address?.message}</div>
            <div className="btn-confirm">
              <Button
                sx={{ textTransform: "capitalize" }}
                type="submit"
                variant="contained"
              >
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegisterUser;
