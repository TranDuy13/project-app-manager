import './profile.scss'
import Avatar from '@mui/material/Avatar';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from '../../features/auth/authSlice';
function Profile(){
    const {user, isSuccess}= useSelector((state)=>state.auth)
      return(
        <> 
            <div className="profileUser">
                <table className='tableProfile' >
                    <tbody>
                    <tr>
                        <div className="th">
                            <th><Avatar sx={{mr:"15px"}}/>
                            Duy Tran</th>
                            <p>{user.data.role}</p>
                        </div>
                    </tr>
                    <tr>
                        <div className="th1">
                            <ul>
                                <li>
                                    <div className="detail">
                                        <EmailTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Email</h4>
                                    </div>
                                    <h5>{user.data.email}</h5>
                                </li>
                                <li>
                                    <div className="detail">
                                        <PhoneAndroidTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Phone</h4>
                                    </div>
                                    <h5>0{user.data.telephone}</h5>
                                </li>
                                <li>
                                    <div className="detail">
                                        <LocationOnTwoToneIcon sx={{mr:"15px"}}/>
                                        <h4>Location</h4>
                                    </div>
                                    <h5>{user.data.address}</h5>
                                </li>

                                    <h3>Have a good day!</h3>
                            </ul>
                        </div>
                    </tr>
                    </tbody>

                </table>
            </div>
           
        </>
    )
}
export default Profile;