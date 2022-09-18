import "./listContract.scss";
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
import { reset } from "../../features/contract/contractSlice";
import { getAllUsers, updateProfile } from "../../features/auth/authSlice";
import { resolvePath } from "react-router";
import {
  createContract,
  getContract,
  updateContract,
} from "../../features/contract/contractSlice";
function ListContract() {
  const { contracts, isSuccess, isError, message } = useSelector(
    (state) => state.contract
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message.message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);
  useEffect(() => {
    dispatch(getContract());
  }, [dispatch]);
  const columns = [
    { field: "employees",
     headerName: "Full Name", 
     width: 400, 
     editable: true ,
     valueGetter: (params) => {
       return params.getValue(params.id,"employee").fullname
    }
  },
    {
      field: "salary",
      headerName: "Salary",
      width: 200,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 250,
      editable: true,
      valueGetter: (params) => {
        return params.getValue(params.id,"employee").role
     }
    },
    {
      field: "Status",
      headerName: "STATUS",
      width: 250,
      editable: true,
      valueGetter: (params) => {
        return params.getValue(params.id,"employee").status
     }
    },
    {
      field: "createdAt",
      headerName: "Time Start",
      width: 300,
      editable: true,
    },
  ];
  const [formData, setFormData] = useState({
    salary: "",
  });
  const { salary } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };
  const [selectedRows, setSelectedRows] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedRows) {
      const id = selectedRows[0]._id;
      console.log(selectedRows);
      const data = {
        id,
        salary,
      };
      console.log(data);
      dispatch(updateContract(data));

    } else {
      toast.error("Please choose user !");
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
                      <div className="user">
                      {/* {selectedRows[0].employee.fullname} */}
                      </div>
                      <TextField
                        id="salary"
                        name="salary"
                        label="Update salary"
                        value={salary}
                        sx={{ ml: "2ch" }}
                        onChange={onChange}
                        autoComplete="current-password"
                        maxRows={4}
                        required
                      />
                    </div>
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
                  rows={contracts}
                  columns={columns}
                  experimentalFeatures={{ newEditingApi: true }}
                  pageSize={18}
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = contracts.filter((row) =>
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
export default ListContract;
