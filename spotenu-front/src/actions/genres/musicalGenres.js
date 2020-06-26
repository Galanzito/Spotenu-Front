import axios from 'axios'
import { alertOpen } from '../user/snackbar';

const baseUrl = 'https://tjr7h88ihd.execute-api.us-east-1.amazonaws.com/beta1/genres'

export const fetchGenres = () => async(dispatch) => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${baseUrl}/all`,{
        headers:{
            Authorization: token
        }
    })
    const setGenres = (genres) => ({
        type: 'SET_GENRES',
        payload: {
            genresList: genres
        }
    })

    dispatch(setGenres(response.data.result))
}

export const newGenre = (name) => async(dispatch) => {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${baseUrl}/add`,{
        "name": name
    },{
        headers:{
            Authorization: token
        }
    })
    const setGenreName = (name) => {
        return{
            type: 'SET_GENRE_NAME',
            payload: name
        }
    }

    dispatch(setGenreName(response.data))
    dispatch(alertOpen("Gênero Musical Criado com Sucesso!"))
}