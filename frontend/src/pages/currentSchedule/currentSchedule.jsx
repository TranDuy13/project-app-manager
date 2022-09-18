import "./currentSchedule.scss";
import "../../pages/User/User.scss";
import Button from "@mui/material/Button";
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import { DataGrid } from "@mui/x-data-grid";
import LinkDetail from "../../components/LinkDetail/LinkDetail";
import { toast } from "react-toastify";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getListScheduleByWeek,
  reset,
  updateSchedule,
  enrollSchedule
} from "../../features/list/listSlice";
function CurrentSchedules() {
  const { list, isSuccess, isError, message } = useSelector(
    (state) => state.schedule
  );
  const {user}=useSelector(
      (state)=>state.auth
  )

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess) {
        toast.success(message.message);
      }
      dispatch(reset());
    };
  }, [dispatch, isSuccess, isError]);
    
  useEffect(() => {
    if(user){
      const id = user.data._id
      const data = {id}
      dispatch(getListScheduleByWeek(data))
     }
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
  const [Row, setRow] = useState([]);
  if(list&&JSON.stringify(list).length!=2){
    return (
      <>
        <div className="boxContainer">
          <Nav />
          <Footer />
          <div className="profileContainer">
            <LinkDetail label="Schedule" tittle="Schedule" />
            <div className="bg-profileContainer1">
              <div className="profileUser1">
                <div className="btn-confirm">
                  <div className="formUpdate">
              
                  </div>
                  <Stack sx={{ ml:'20ch',width: '80%' }} spacing={2}>
                    <Alert severity="info">SHIFT 1: 9H-13H30 ------ SHIFT 2: 13H-17H30 ------ SHIFT 3: 17H-21h30 </Alert>
                    </Stack>
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
                    rows={list.shift}
                    columns={columns}
                    sx={{
                      boxShadow: 2,
                      border: 2,
                      borderColor: "primary.light",
                      "& .MuiDataGrid-cell:hover": {
                        color: "primary.main",
                      },
                    }}
                    pageSize={18}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={(params) => params.row.dayOff == "ON"}
                    disableSelectionOnClick
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
          <LinkDetail label="Schedule" tittle="Schedule" />
          <div className="bg-profileContainer1">
            <div className="profileUser1">
              <div className="btn-confirm">
                <div className="formUpdate">
            
                </div>
                <Stack sx={{ ml:'20ch',width: '80%' }} spacing={2}>
                  <Alert severity="info">SHIFT 1: 9H-13H30 ------ SHIFT 2: 13H-17H30 ------ SHIFT 3: 17H-21h30 </Alert>
                  </Stack>
              </div>
              <div
                style={{
                  height: 900,
                  width: "80%",
                  marginLeft: 200,
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
export default CurrentSchedules;
