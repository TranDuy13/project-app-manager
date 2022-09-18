import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useNavigate, Link } from "react-router-dom";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useDispatch, useSelector } from "react-redux";
import "./footer.scss";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LockClockIcon from "@mui/icons-material/LockClock";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
function Footer() {

  const { user, isSuccess } = useSelector((state) => state.auth);
  if(user){
    if(user.data.role=="ADMIN"){
      return (
        <nav className="menu-dashboard">
          <div className="dashboard">
            <ul className="dashboard-df">
              <span className="dashboard-user">Dashboard</span>
              <div className="default-group">
                <div>
                  <Link className="a-link" to="/">
                    <AccessTimeOutlinedIcon className="home-link" />
                    <div className="default">Default</div>
                  </Link>
                </div>
              </div>
            
            </ul>
            <hr className="line-style" />
            <ul className="dashboard-df">
              <span className="dashboard-user">Widget</span>
              <div className="default-group">
                <div>
                  <Link className="a-link" to="/user">
                    <PeopleAltOutlinedIcon className="home-link" />
                    <div className="default">Profile</div>
                  </Link>
                </div>
              </div>
              <div className="default-group">
                <div>
                  <Link className="a-link" to="/user/getPersonnel">
                    <AppsOutlinedIcon className="home-link" />
                    <div className="default">Personnel</div>
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="dashboard-df">
            <div className="default-group">
                <div>
                  <Link className="a-link" to="/admin/listSchedule">
                    <EventNoteOutlinedIcon className="home-link" />
                    <div className="default">List Schedule</div>
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="dashboard-df">
            <div className="default-group">
                <div>
                  <Link className="a-link" to="/admin/createContract">
                    <CasesOutlinedIcon className="home-link" />
                    <div className="default">List User</div>
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="dashboard-df">
            <div className="default-group">
                <div>
                  <Link className="a-link" to="/admin/createAccount">
                    <PersonAddAltOutlinedIcon className="home-link" />
                    <div className="default">Create Account</div>
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="dashboard-df">
            <div className="default-group">
                <div>
                  <Link className="a-link" to="/admin/getContract">
                    <RateReviewOutlinedIcon className="home-link" />
                    <div className="default">List Contract</div>
                  </Link>
                </div>
              </div>
            </ul>
            <hr className="line-style" />
          </div>
        </nav>
      );
    }
  }
  return (
    <nav className="menu-dashboard">
      <div className="dashboard">
        <ul className="dashboard-df">
          <span className="dashboard-user">Dashboard</span>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/">
                <AccessTimeOutlinedIcon className="home-link" />
                <div className="default">Default</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user/enrollSchedule">
                <BrokenImageOutlinedIcon className="home-link" />
                <div className="default">Enroll Schedule</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user/schedule">
                <AddCardIcon className="home-link" />
                <div className="default">My Schedule</div>
              </Link>
            </div>
          </div>
        </ul>
        <hr className="line-style" />
        <ul className="dashboard-df">
          <span className="dashboard-user">Widget</span>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user">
                <PeopleAltOutlinedIcon className="home-link" />
                <div className="default">Profile</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user/detail">
                <AssignmentIcon className="home-link" />
                <div className="default">Personal Details</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user/resetPassword">
                <LockClockIcon className="home-link" />
                <div className="default">Reset Password</div>
              </Link>
            </div>
          </div>
          
        </ul>
        <hr className="line-style" />
      </div>
    </nav>
  );

}
export default Footer;
