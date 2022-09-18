import "./register.scss";
import '../../pages/User/User.scss'
import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import "../home/home.scss";
import UserDetail from "../../components/UserDetail/UserDetail.jsx"
import LinkDetail from '../../components/LinkDetail/LinkDetail';
import RegisterUser from "../../components/registerUser/register.jsx"
function Register(){
    return(
        <>
            <div className="boxContainer">
                <Nav/>
                <Footer />
                <div className="profileContainer">
                <LinkDetail label="Details" tittle="Create Account"/>
                    <div className="bg-profileContainer1">
                        <div className="profileUser1">
                            <RegisterUser/>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register;
