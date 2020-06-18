import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'

const baseUrl = "https://tjr7h88ihd.execute-api.us-east-1.amazonaws.com/beta1/users/signup";

export const registerNewUser = user => async(dispatch) => {
    try{
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            nickname: user.nickname,
            description: user.description,
            type: user.type
            
        }

        const response = await axios.post(`${baseUrl}`, newUser);
        dispatch(setUser(response.data));
        dispatch(push("/home"))
    }catch(err){
        console.error(err.message)
    }
}