import axios from 'axios';
import { alertOpen } from '../user/snackbar';

const baseUrl = 'http://localhost:3003/users'

export const fetchBands = () => async(dispatch) => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${baseUrl}/allBands`,{
        headers:{
            authorization: token
        }
    })
    const setBands = (bands) => ({
        type: 'SET_BANDS',
        payload: {
            bandList: bands
        }
    })

    dispatch(setBands(response.data))
}

export const approveBand = (id) => async(dispatch) => {
    try{
        const token = localStorage.getItem('token');
        const response = await axios.post(`${baseUrl}/approveBand`,{
            "id": id
        }, {
            headers:{
                authorization: token
            }            
        })
        const setIdBand = (id) => ({
            type: 'SET_ID_BAND',
            payload: {
                id: id
            }
        })
        dispatch(setIdBand(response.data.id))
        dispatch(alertOpen("Banda Aprovada!"))
    }catch(error){
        dispatch(alertOpen("Ops, algo deu errado!", 'error'))
        console.error("Erro ->", error.message)
    }
}