import "./EditUser.scss";
import Button from "@mui/material/Button";
import "../profile/profile.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { reset,updateProfile } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
function EditUser() {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const formSchema = Yup.object().shape({
    fullname: Yup.string().min(
      8,
      "Password length should be at least 8 characters"
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
      toast.success(message.message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, user]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    const id = user.data._id
    data["id"]=id
    dispatch(updateProfile(data));
  };
  return (
    <>
      <div className="editUser">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="tbEdit">
            <tbody>
              <tr>
                <div className="editAccount">Edit Account Details</div>
              </tr>
              <tr>
                <div className="editDetails">
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "70ch" },
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
                        defaultValue={user.data.fullname}
                        required
                        maxRows={4}
                      />
                    </div>
                  </Box>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "70ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="email"
                        name="email"
                        label="Email address"
                        type="email"
                        autoComplete="current-password"
                        defaultValue={user.data.email}
                        {...register("email")}
                        required
                        maxRows={4}
                      />
                    </div>
                  </Box>
                  <div className="userDetail">
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "70ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="telephone"
                          name="telephone"
                          label="telephone"
                          maxRows={4}
                          autoComplete="current-password"
                          defaultValue={user.data.telephone}
                          {...register("telephone")}
                          required
                        />
                      </div>
                    </Box>
                  </div>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "70ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="address"
                        name="address"
                        label="Address"
                        autoComplete="current-password"
                        {...register("address")}
                        defaultValue={user.data.address}
                        required
                        maxRows={4}
                      />
                    </div>
                  </Box>
                  <div className="userDetail">
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "34ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="BirthDay"
                          type="date"
                          name="birthday"
                         
                          InputProps={{inputProps: {
                            min: "",
                            max: "2010-06-17"
                          } }}
                          defaultValue={user.data.birthday}
                          {...register("birthday")}
                          required
                        />
                      </div>
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "34.5ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="IDcard"
                          name="IDcard"
                          label="IDcard"
                          autoComplete="current-password"
                          defaultValue={user.data.IDcard}
                          {...register("IDcard")}
                          required
                          maxRows={4}
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="btn-confirm">
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        ml: "77ch",
                        p: "1.5ch",
                      }}
                      type="submit"
                      variant="contained"
                    >
                      Update Profile
                    </Button>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
export default EditUser;
