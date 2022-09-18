import { configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import listReducer from '../features/list/listSlice'
import contractReducer from '../features/contract/contractSlice'
 const store = configureStore({
    reducer:{
        auth: authReducer,
        schedule: listReducer,
        contract: contractReducer,
    }
})
export default store