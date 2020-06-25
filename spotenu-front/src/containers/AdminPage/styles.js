import styled from 'styled-components';
import { Paper, TextField } from '@material-ui/core'

export const PaperMain = styled(Paper)`
    height: 400px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45vw;
    margin-top: 5vh;
`;

export const Input = styled(TextField)`
    margin:3px;
`

export const FormWrapper = styled.form`
    margin-top: 12px;
    width: 80%;
    gap: 5px;
    place-content: center;
    justify-items: center;
    display: grid;
`;


export const PaperMainBand = styled(Paper)`
    height: 200px;
    padding: 10px;
    max-width: 250px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5vw;
    margin-top: 5vh;
`;

export const MainWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 20vw;
`;

export const PaperMainGenre = styled(Paper)`
    height: 500px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45vw;
    margin-top: 5vh;
`;