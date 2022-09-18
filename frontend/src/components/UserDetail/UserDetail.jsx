import "./UserDetail.scss";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LockClockIcon from "@mui/icons-material/LockClock";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
function UserDetail() {
  return (
    <>
      <div className="bg-menu">
        <Box className="boxContainer">
          <Link className="profile-link" to="/user">
            <AssignmentIndRoundedIcon className="iconElement" />
            <div className="menuElement">Profile</div>
          </Link>
        </Box>
        <Box className="boxContainer">
          <Link className="profile-link" to="/user/detail">
            <AssignmentIcon className="iconElement" />
            <div className="menuElement">Personal Details</div>
          </Link>
        </Box>
        <Box className="boxContainer">
          <Link className="profile-link" to="/user/resetPassword">
            <LockClockIcon className="iconElement" />
            <div className="menuElement">Reset password</div>
          </Link>
        </Box>
      </div>
    </>
  );
}
export default UserDetail;
