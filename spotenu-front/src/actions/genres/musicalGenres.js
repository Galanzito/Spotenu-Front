import axios from 'axios'
import { alertOpen } from '../user/snackbar';

const baseUrl = 'http://localhost:3003/genres'

export const fetchGenres = () => async(dispatch) => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${baseUrl}/all`,{
        headers:{
            authorization: token
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
            authorization: token
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