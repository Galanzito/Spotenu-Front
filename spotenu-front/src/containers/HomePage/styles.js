import styled from 'styled-components';
import Card from '@material-ui/core/Card'

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 800px;
    gap:50px;
    margin-left: 10vw;

    div{
        width: 25vw;
        margin-top: 10px;
`;

export const CardContainer = styled(Card)`
    img{
        width:100%;
        height: 25vh;
    }
`