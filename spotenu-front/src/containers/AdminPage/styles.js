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