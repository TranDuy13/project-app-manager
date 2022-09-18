
import { useNavigate, Link } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
const withLink = (to, children) => <Link to={to}>{children}</Link>;
const actions = [
  { icon: withLink("/admin/createAccount",<PersonAddAltOutlinedIcon />), name: "Create Account" },
  { icon: withLink("/user",<EventNoteOutlinedIcon />), name: "Create Schedule" },
  { icon: withLink("/admin/listSchedule",<WorkOutlineOutlinedIcon />), name: "List Schedule" },
  { icon: withLink("/admin/createContract",<CasesOutlinedIcon />), name: "List User" },
  { icon: withLink("/admin/getContract",<ErrorOutlineOutlinedIcon />), name: "List Contract" },
];

export default function BasicSpeedDial() {
  
  return (

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", 
        bottom: 50, right: 40}}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
          
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
  );
}
