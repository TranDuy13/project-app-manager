import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './breadcrumbs.scss'
function BreadCrumbs(props){

    return(
          <>
            <Breadcrumbs className="breadcrumbs" separator="›" >
                <Link className="profile-link" to="/home">
                <HomeIcon/>
                </Link>,
                <Link className="profile-link" to="/user">
                    User
                </Link>,
                <Typography key="3" color="text.primary">
                    {props.titTle}
                </Typography>,
            </Breadcrumbs>
          </>
      )
}
export default BreadCrumbs;