import './details.scss'
import '../profile/profile.scss'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EditUser from '../EditUser/EditUser';
function Details(){
    const Input = styled('input')({
        display: 'none',
      });
    return(
        <>
            <div className="profileUser">
                <table className='tableProfile'>
                    <tbody>
                        <tr>
                            <div className="proPicture">
                                Profile Picture 
                            </div>
                        </tr>
                        <tr>
                            <div className="avtPicture">
                                <Avatar  sx={{ width: 100, height: 100 }}/>
                                <div className="notes">
                                    Upload/Change Your Profile Image
                                </div>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        <Button variant="contained" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </Stack>
                            </div>
                        </tr>
                    </tbody>
                </table>
                <EditUser/>
            </div>

        </>
    )
}
export default Details;