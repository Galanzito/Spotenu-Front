import styled from 'styled-components';
import { Paper, TextField } from '@material-ui/core'

export const PaperMain = styled(Paper)`
    height: 400px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    margin: 5vw auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled(TextField)`
    margin:3px;
`

export const FormWrapper = styled.form`
    margin-top: 12px;
    width: 80%;
    gap: 2px;
    place-content: center;
    justify-items: center;
    display: grid;
`;