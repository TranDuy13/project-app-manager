import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from '../../features/auth/authSlice';
import './contractUser.scss'


function ContractUser(){
    const {user, isSuccess}= useSelector((state)=>state.auth)



    return(
        <>
            <div className="contractUser">
                <table className="tableContract">
                    <tbody>
                        <tr>
                            <th>
                                My Contract
                            </th>
                        </tr>
                        <tr>
                            <ul>
                                <li>
                                    Contract Detail
                                    <hr className='hrLineStyle'/>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Full Name</h4>
                                        <div className="space7"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.fullname}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Address</h4>
                                        <div className="space6"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.address}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Phone</h4>
                                        <div className="space5"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.telephone}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>BirthDay</h4>
                                        <div className="space5"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.birthday}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Email</h4>
                                        <div className="space4"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.email}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>IDcard</h4>
                                        <div className="space3"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                        {user.data.IDcard}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Time start</h4>
                                        <div className="space2"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                            26/02/2021
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Time end</h4>
                                        <div className="space1"></div>
                                        <h4>:</h4>
                                        <div className="details">
                                            26/03/2025
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contractDetail">
                                        <h4>Description</h4>
                                        <h4>:</h4>
                                        <div className="details">
                                            Welcome to my project. Im Nhat Duy. We are happy to be a part of you 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ContractUser;