import "./header.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import { useNavigate, Link } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import Weather from "../weather/weather";
import Datetime from "../date/date";
import BasicSpeedDial from "../speedDial/speedDial.jsx";

import { getUser } from "../../features/auth/authSlice";
import { getListScheduleByWeek } from "../../features/list/listSlice";
function Nav() {
  const { user, isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(reset());
    // if(!user){
    //   navigate('/login')
    // }
  }, [dispatch, navigate]);
  useEffect(() => {
    dispatch(getUser());

  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  if (user) {
    if (user.data.role == "ADMIN") {
      return (
        <>
          <div className="container">
            <header className="taskbar">
              <div className="taskbar-lc">
                <BasicSpeedDial />
                <div className="group-logo">
                  <CoffeeOutlinedIcon className="icon-coffee" />
                  <a href="/" className="banner-cf">
                    coffee
                  </a>
                </div>
                <div className="space-between"></div>
                <div className="space-between"></div>
                <div className="space-between"></div>
                <div className="space-between"></div>
                <div className="user-pr">
                  <NotificationsActiveOutlinedIcon className="notification" />
                </div>
                <div className="setting-profile">
                  <FaceOutlinedIcon className="icon-avt" />
                  <div className="btn-setting">
                    <SettingsOutlinedIcon className="setting-icon" />
                    <div className="drop-down">
                      <hr className="line-styles" />
                      <button className="btn-setting-btn">
                        <SentimentVerySatisfiedOutlinedIcon className="setting-icon-btns" />
                      </button>

                      <div className="greeting">
                        Chúng tôi rất vui khi là một phần của bạn
                      </div>
                      <hr className="line-styles" />
                      <button className="btn-setting-btn btn-hover">
                        <SettingsOutlinedIcon className="setting-icon-btn" />
                        <div className="account-setting">Account Setting</div>
                      </button>
                      <button className="btn-setting-btn btn-hover">
                        <WorkOutlineOutlinedIcon className="setting-icon-btn" />
                        <div className="account-setting">Work</div>
                      </button>
                      <button
                        className="btn-setting-btn btn-hover"
                        onClick={handleLogout}
                      >
                        <LogoutOutlinedIcon className="setting-icon-btn" />
                        <div className="account-setting">Logout</div>
                      </button>
                      <div className="display-time">
                        <Datetime />
                      </div>
                      <div className="display-time"></div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <ToastContainer />
        </>
      );
    }
  }

  return (
    <>
      <div className="container">
        <header className="taskbar">
          <div className="taskbar-lc">
            <div className="group-logo">
              <CoffeeOutlinedIcon className="icon-coffee" />
              <a href="/" className="banner-cf">
                coffee
              </a>
            </div>
            <div className="space-between"></div>
            <div className="space-between"></div>
            <div className="space-between"></div>
            <div className="space-between"></div>
            <div className="user-pr">
              <NotificationsActiveOutlinedIcon className="notification" />
            </div>
            <div className="setting-profile">
              <FaceOutlinedIcon className="icon-avt" />
              <div className="btn-setting">
                <SettingsOutlinedIcon className="setting-icon" />
                <div className="drop-down">
                  <hr className="line-styles" />
                  <button className="btn-setting-btn">
                    <SentimentVerySatisfiedOutlinedIcon className="setting-icon-btns" />
                  </button>

                  <div className="greeting">
                    Chúng tôi rất vui khi là một phần của bạn
                  </div>
                  <hr className="line-styles" />
                  <button className="btn-setting-btn btn-hover">
                    <SettingsOutlinedIcon className="setting-icon-btn" />
                    <div className="account-setting">Account Setting</div>
                  </button>
                  <button className="btn-setting-btn btn-hover">
                    <WorkOutlineOutlinedIcon className="setting-icon-btn" />
                    <div className="account-setting">Work</div>
                  </button>
                  <button
                    className="btn-setting-btn btn-hover"
                    onClick={handleLogout}
                  >
                    <LogoutOutlinedIcon className="setting-icon-btn" />
                    <div className="account-setting">Logout</div>
                  </button>
                  <div className="display-time">
                    <Datetime />
                  </div>
                  <div className="display-time"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <ToastContainer />
    </>
  );
}

export default Nav;
