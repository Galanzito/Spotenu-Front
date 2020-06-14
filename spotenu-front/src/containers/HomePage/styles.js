import styled from 'styled-components';
import { Paper } from '@material-ui/core'

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

export const LoginWrapper = styled.form`
margin-top: 12px;
width: 80%;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`;

export const Img = styled.img`
height:70px;
width: 180px;
`;

export const ImgContainer = styled.div`
max-width: 450px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
`;