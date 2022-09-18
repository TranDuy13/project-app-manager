import "./contract.scss";
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
import { useNavigate } from "react-router-dom";
import {
  adminUpdate,
  reset,
} from "../../features/auth/authSlice";
import { getAllUsers, updateProfile } from "../../features/auth/authSlice";
import { createContract } from "../../features/contract/contractSlice";
import { getListScheduleByWeek, getListScheduleByWeekUser } from "../../features/list/listSlice";
function Contract() {
  const { users, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    { field: "_id", headerName: "ID", width: 300 },
    { field: "username", headerName: "Username", width: 200, editable: true },
    {
      field: "password",
      headerName: "Password",
      width: 200,
      editable: true,
    },
    {
      field: "fullname",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "role",
      headerName: "ROLE",
      width: 200,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 200,
      editable: true,
    },
    {
      field: "Schedule User",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            sx={{pl:'3ch'}}
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Schedule
          </Button>
        );
      }
    }
  ];
  const handleClick=(e,cellValues)=>{
    const id = cellValues.id
    const data ={id}
    dispatch(getListScheduleByWeekUser(data))
    navigate("/admin/currentScheduleUser");
  }
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
  });
  const [role, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { username, password, fullname } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [selectedRows, setSelectedRows] = useState();
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (selectedRows) {
      const id = selectedRows[0]._id;
      console.log(selectedRows);
      const data = {
        username,
        password,
        role,
        fullname,
        id
      };
      dispatch(adminUpdate(data));
    }else{
      toast.error("Please choose user !")
    }
  };
  const onCreate = (e) => {
    e.preventDefault();
    if (selectedRows) {
      const employee = selectedRows[0]._id;
      const role = selectedRows[0].role
      if(role=="ADMIN")
      toast.error("Cannot create Contract for ADMIN!")
      console.log(role)
      if(role=="PARTTIME"){
          const salary= 20000
          const data={
            salary,
            employee,
          }
          console.log(data)
          dispatch(createContract(data))
      }else{
        const salary= 30000
        const data={
          salary,
          employee,
        }
        dispatch(createContract(data))
      }
      toast.error("An occured!")
    }else{
      toast.error("Please choose user !")
    }
  };
  const onDelete = (e) => {
    e.preventDefault();
    if (selectedRows) {
      const id = selectedRows[0]._id;
      const data = {
        status: "RESTED",
        id
      };
      dispatch(adminUpdate(data));
    }else{
      toast.error("Please choose user !")
    }
  };

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
                  <form onSubmit={onSubmit}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        ml: "77ch",
                        p: "1.5ch",
                      }}
                      type="submit"
                      variant="contained"
                    >
                      Update
                    </Button>
                    <div className="aa">
                      <TextField
                        id="username"
                        name="username"
                        label="Update username"
                        value={username}
                        sx={{ ml: "2ch" }}
                        onChange={onChange}
                        autoComplete="current-password"
                        maxRows={4}
                        required
                      />
                      <TextField
                        id="password"
                        name="password"
                        label="Update Password"
                        autoComplete="current-password"
                        sx={{ ml: "2ch" }}
                        value={password}
                        onChange={onChange}
                        type="password"
                        maxRows={4}
                        required
                      />
                      <FormControl
                        
                        sx={{ pl: 2, mr: 0.5, width: 150 }}
                      >
                        <InputLabel id="role">ROLE</InputLabel>
                        <Select
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
   
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="fullname"
                        name="fullname"
                        value={fullname}
                        sx={{ ml: "2ch" }}
                        label="Update Name"
                        defaultValue="aa"
                        onChange={onChange}
                        autoComplete="current-password"
                        maxRows={4}
                        required
                      />
                      </div>
                       </Box>
                    </div>
                  </form>
                  <form className="delete" onSubmit={onDelete}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        ml: "77ch",
                        p: "1.5ch",
                      }}
                      type="submit"
                      color="error"
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </form>
                  <form className="delete" onSubmit={onCreate}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        ml: "77ch",
                        p: "1.5ch",
                      }}
                      type="submit"
                      color="success"
                      variant="contained"
                    >
                      Create
                    </Button>
                  </form>
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
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = users.filter((row) =>
                      selectedIDs.has(row._id)
                    );

                    setSelectedRows(selectedRows);
                  }}
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
export default Contract;
