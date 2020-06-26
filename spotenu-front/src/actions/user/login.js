import axios from 'axios';
import { setUser } from './actionCreators';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import { alertOpen } from './snackbar';

const baseUrl = "https://tjr7h88ihd.execute-api.us-east-1.amazonaws.com/beta1/users";

export const login = user => async(dispatch) => {
    try{
        const response = await axios.post(`${baseUrl}/login`, user)
        if(response.data.type === "BAND" && response.data.isAproved === false){
            dispatch(alertOpen("Aguarde Aprovação para efetuar o Login", 'error'))
        }else{
            dispatch(alertOpen("Bem-vindo!"))
            dispatch(setUser(response.data));
            const token = response.data.accessToken
            window.localStorage.setItem("token", token);
            if(response.data.type === "ADMIN"){
                dispatch(push(routes.admin))
            }else{
                dispatch(push(routes.home))
            }
        }

    }catch(err){
      dispatch(alertOpen("Ops, algo deu errado!", 'error'))
        console.error(err.message)
    }
}

export const logout = () => dispatch => {
    window.localStorage.removeItem("token")
    dispatch(setUser({}))
    dispatch(push(routes.login))
}