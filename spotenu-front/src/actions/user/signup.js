import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'
import { alertOpen } from './snackbar';


const baseUrl = "https://tjr7h88ihd.execute-api.us-east-1.amazonaws.com/beta1/users";

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
        const response = await axios.post(`${baseUrl}/signup`, newUser);
        dispatch(setUser(response.data));
        window.localStorage.setItem("token", response.data.accessToken);
        dispatch(alertOpen("Cadastro realizado com sucesso!!"))
        dispatch(push("/home"))
    }catch(err){
        console.error(err.message)
    }
}