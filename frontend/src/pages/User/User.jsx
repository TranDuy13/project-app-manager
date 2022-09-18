import './User.scss';
import React from 'react';
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import UserDetail from "../../components/UserDetail/UserDetail.jsx"
import LinkDetail from '../../components/LinkDetail/LinkDetail';
import Profile from '../../components/profile/profile.jsx'
import ContractUser from '../../components/contractUser/contractUser.jsx'
import BasicSpeedDial from "../../components/speedDial/speedDial.jsx"
function User(){
    return(
        <>
        <div className="boxContainer">
            <Nav/>
            <Footer />
            <div className="profileContainer">
            <LinkDetail label="Profile" tittle="Profile"/>
                <div className="bg-profileContainer1">
                    <UserDetail/>
                    <div className="profileUser">
                        <Profile />
                        <ContractUser />
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
export default User;

