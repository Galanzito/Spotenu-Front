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
        if(user.type === 'BAND'){
            dispatch(alertOpen("Banda Cadastrada com Sucesso!! Aguarde aprovação e faça o login", "warning"))
            dispatch(push("/"))
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

export const registerNewAdmin = user => async(dispatch) => {
    try{
        const newAdmin = {
            name: user.name,
            email: user.email,
            nickname: user.nickname,
            password: user.password
        }
        const token = localStorage.getItem('token');
        const response = await axios.post(`${baseUrl}/admin`, newAdmin,{
            headers:{
                Authorization: token
            }
        })
        dispatch(setUser(response.data));
        dispatch(alertOpen("Administrador Cadastrado com Sucesso!!"))

    }catch(err){
        dispatch(alertOpen("Ops Algo deu errado", 'error'))
        console.error(err.message)
    }
}