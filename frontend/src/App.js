import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import User from "./pages/User/User";
import PersonalDetail from "./pages/personalDetail/personalDetail";
import Password from "./pages/resetPassword/Password";
import Register from "./pages/register/register";
import List from "./pages/listWork/listWork";
import Contract from "./pages/contractUser/contract";
import ListContract from "./pages/contract/listContract";
import PrivateRoute from "./components/privateRoute";
import ListUser from "./pages/listUser/listUser";
import Schedules from "./pages/schedules/Schedules";
import CurrentSchedules from "./pages/currentSchedule/currentSchedule";
import ListEnroll from "./pages/listEnrollSchedule/listEnroll";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/"element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/user/resetpassword" element={<Password />} />
              <Route path="/admin/createAccount" element={<Register />} />
              <Route path="/admin/listSchedule" element={<List />} />
              <Route path="/admin/createContract" element={<Contract />} />
              <Route path="/admin/currentScheduleUser" element={<ListEnroll />} />
              <Route path="/admin/getContract" element={<ListContract />} />
            </Route>
            <Route path="/user" element={<PrivateRoute />}>
              <Route path="/user" element={<User />} />
              <Route path="/user/enrollSchedule" element={<Schedules />} />
              <Route path="/user/schedule" element={<CurrentSchedules />} />
              <Route path="/user/getPersonnel" element={<ListUser />} />
              <Route path="/user/detail" element={<PersonalDetail />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
