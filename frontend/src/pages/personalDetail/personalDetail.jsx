import './personalDetail.scss'
import '../../pages/User/User.scss'
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import UserDetail from "../../components/UserDetail/UserDetail.jsx"
import LinkDetail from '../../components/LinkDetail/LinkDetail';
import Details from '../../components/details/details';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from '../../features/auth/authSlice';
import BasicSpeedDial from "../../components/speedDial/speedDial.jsx"
function PersonalDetail(){
    return(
        <>
            <div className="boxContainer">
                <Nav/>
                <Footer />
                <div className="profileContainer">
                <LinkDetail label="Details" tittle="Personal Detail"/>
                    <div className="bg-profileContainer1">
                        <UserDetail/>
                        <div className="profileUser">
                                <Details/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalDetail;