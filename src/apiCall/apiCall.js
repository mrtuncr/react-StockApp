import axios from "axios";
import {useDispatch} from "react-redux"
import { fetchStart } from "../features/authSlice";
export const register = async (userInfo) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(fetchStart())
    try {
        
    } catch (error) {
        
    }
}