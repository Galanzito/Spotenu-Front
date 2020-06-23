import axios from 'axios';
import { setUser } from './actionCreators';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import { alertOpen } from './snackbar';

// const baseUrl = "https://tjr7h88ihd.execute-api.us-east-1.amazonaws.com/beta1/users";
const localUrl = "http://localhost:3003/users/login"

export const login = user => async(dispatch) => {
    try{
        const response = await axios.post(/*`${baseUrl}/login`*/ `${localUrl}`, user)
        if(response.data.type === "BAND" && response.data.isAproved === false){
            dispatch(alertOpen("Aguarde Aprovação para efetuar o Login", 'error'))
        }else{
            dispatch(alertOpen("Bem-vindo!"))
            dispatch(setUser(response.data));
            const token = response.data.accessToken
            console.log(response.data)
            window.localStorage.setItem("token", token);
            dispatch(push(routes.home))
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