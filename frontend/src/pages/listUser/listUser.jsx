import "./listUser.scss";
import Box from "@mui/material/Box";
import "../../pages/User/User.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import UserDetail from "../../components/UserDetail/UserDetail.jsx";
import LinkDetail from "../../components/LinkDetail/LinkDetail";
import { ToastContainer, toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
} from "../../features/auth/authSlice";
import { getAllUsers, updateProfile } from "../../features/auth/authSlice";
function ListUser() {
  const { users, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {

      if (isError) {
        toast.error(message);
        console.log(message)
      }
      if (isSuccess) {
        toast.success(message.message);
        console.log(message)
      dispatch(reset());

    };
  }, [dispatch, isSuccess,isError]);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const columns = [
    {
      field: "fullname",
      headerName: "Name",
      width: 300,
      editable: true,
    },
    {
      field: "role",
      headerName: "ROLE",
      width: 250,
    },
    {
        field: "birthday",
        headerName: "BIRTHDAY",
        width: 250,
      },
    {
        field: "email",
        headerName: "Email",
        width: 400,
      },
    {
      field: "status",
      headerName: "STATUS",
      width: 200,
      editable: true,
    },
  ];
  return (
    <>
      <div className="boxContainer">
        <Nav />
        <Footer />
        <div className="profileContainer">
          <LinkDetail label="Details" tittle="List" />
          <div className="bg-profileContainer1">
            <div className="profileUser1">
              <div className="btn-confirm">
                <div className="formUpdate">
                </div>
              </div>
              <div
                style={{
                  height: 900,
                  width: "100%",
                  marginLeft: 50,
                  marginTop: 50,
                }}
              >
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={users}
                  columns={columns}
                  experimentalFeatures={{ newEditingApi: true }}
                  pageSize={18}

                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
export default ListUser;
