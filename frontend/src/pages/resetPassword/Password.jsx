import "./Password.scss";
import '../../pages/User/User.scss'
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import UserDetail from "../../components/UserDetail/UserDetail.jsx"
import LinkDetail from '../../components/LinkDetail/LinkDetail';
import Password from "../../components/resetPassword/resetPassword.jsx"
import BasicSpeedDial from "../../components/speedDial/speedDial.jsx"
function ResetPassword(){
    return(
        <>
            <div className="boxContainer">
                <Nav/>
                <Footer />
                <div className="profileContainer">
                <LinkDetail label="Details" tittle="Reset Password"/>
                    <div className="bg-profileContainer1">
                        <UserDetail/>
                        <div className="profileUser1">
                            <Password/>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ResetPassword;
