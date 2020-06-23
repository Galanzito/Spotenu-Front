import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'
import { alertOpen } from './snackbar';


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
        if(user.type === 'BAND'){
            dispatch(alertOpen("Banda Cadastrada com Sucesso!! Aguarde aprovação e faça o login", "warning"))
        }else{
            window.localStorage.setItem("token", response.data.accessToken);
            dispatch(alertOpen("Cadastro realizado com sucesso!!"))
            dispatch(push("/home"))
        }
    }catch(err){
        dispatch(alertOpen("Ops Algo deu errado", 'error'))
        console.error(err.message)
    }
}