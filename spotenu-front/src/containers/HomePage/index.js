import React from 'react';
import SearchAppBar from './AppBar';
import Cards from './Cards';
import Button from '@material-ui/core/Button'
import styled from 'styled-components';

const ButtonPlaylist = styled(Button)`
    margin: 1vh 3vw;
`
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
   
`

function HomePage(){
    return(
        <div>
            <SearchAppBar />
            <MenuWrapper>
                <ButtonPlaylist variant="outlined" color="primary">Criar Playlist</ButtonPlaylist>
                <ButtonPlaylist variant="outlined" color="primary">Criar Álbum</ButtonPlaylist>
            </MenuWrapper>
            <Cards />            
        </div>
    )
}

export default HomePage;