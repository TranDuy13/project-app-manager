import "./listEnroll.scss";
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
import { updateScheduleUser } from "../../features/list/listSlice";
function ListEnroll() {
  const { list, isSuccess, isError, message } = useSelector(
    (state) => state.schedule
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
    { field: "shift", headerName: "Username", width: 200, editable: true },
    {
      field: "week",
      headerName: "Week",
      width: 200,
      editable: true,
    },
    {
      field: "dayOff",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
    },
  ];

  const [selectedRows, setSelectedRows] = useState();
  console.log(selectedRows)
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (selectedRows) {
        const  id = list._id
        const shift = selectedRows;
      const data = {
        shift,
        id
      };
      dispatch(updateScheduleUser(data));
      toast.success("Update Successfully!")
    }else{
      toast.error("Error 404!")
    }
  };
  if(list&&JSON.stringify(list).length!=2){
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
                      rows={list.shift}
                      columns={columns}
                      experimentalFeatures={{ newEditingApi: true }}
                      pageSize={18}
                      onSelectionModelChange={(newSelection) => {
                        setSelectedRows(newSelection);
                      }}
                      setSelectedRows={selectedRows}
                      checkboxSelection={true}
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
               
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
export default ListEnroll;
