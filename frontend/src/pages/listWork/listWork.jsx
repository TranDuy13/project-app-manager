import "./listWork.scss";
import "../../pages/User/User.scss";
import Button from "@mui/material/Button";
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import UserDetail from "../../components/UserDetail/UserDetail.jsx";
import LinkDetail from "../../components/LinkDetail/LinkDetail";
import { ToastContainer, toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSchedule, deleteSchedule, getListSchedule, reset, updateSchedule } from "../../features/list/listSlice";
function List() {
  const { listSchedule, isSuccess,isError,message } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
 
  useEffect(() => {
    return () => {
      if (isError) {
        toast.error(message);
        console.log(message)
      }
      if (isSuccess) {
        toast.success(message.message);
      }
      dispatch(reset());
    };
  }, [dispatch, isSuccess,isError]);

  useEffect(() => {
    dispatch(getListSchedule());
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    { field: "dayOff", headerName: "Day OFF", width: 200, editable: true },
    {
      field: "date",
      headerName: "Date",
      width: 200,
    },
    {
      field: "shift",
      headerName: "Shift",
      width: 200,
    },
    {
      field: "week",
      headerName: "Week",
      width: 200,
    },
    
  ];
  
  const [selectedRows, setSelectedRows] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedRows) {
      const id =  selectedRows[0]._id
      console.log(selectedRows)
      const dayOff="OFF"
      const data ={
        id,
        dayOff
      }
      dispatch(updateSchedule(data))
    }
  };
  const onCreate=(e)=>{
    e.preventDefault();
    dispatch(createSchedule())
  }
 const onDelete=(e)=>{
  e.preventDefault();
  if (selectedRows) {
    const id =  selectedRows[0]._id
    console.log(id)
    const data ={
      id,
    }
    dispatch(deleteSchedule(data))
  }
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
                  <form  onSubmit={onSubmit}>
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
                  width: "80%",
                  marginLeft: 200,
                  marginTop: 50,
                }}
              >
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={listSchedule}
                  columns={columns}
                  pageSize={18}
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = listSchedule.filter((row) =>
                      selectedIDs.has(row._id)
                    );

                    setSelectedRows(selectedRows);
                  }}
                  rowsPerPageOptions={[5]}
                  isRowSelectable={(params) => params.row.dayOff == "ON"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default List;
