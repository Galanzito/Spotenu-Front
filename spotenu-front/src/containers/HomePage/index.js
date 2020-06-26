import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router';
import SearchAppBar from './AppBar';
import Cards from './Cards';
import Button from '@material-ui/core/Button'
import styled from 'styled-components';
import { logout } from '../../actions/user/login'
import { routes } from '../Router';

const ButtonPlaylist = styled(Button)`
    margin: 1vh 3vw;
`
const MenuWrapper = styled.div`
    display: flex; 
`

function HomePage(props){
    return(
        <div>
            <SearchAppBar />
            <MenuWrapper>
                {props.type === "PREMIUM"?<ButtonPlaylist variant="outlined" color="primary" onClick={() => props.goTo(routes.playlist)}>Criar Playlist</ButtonPlaylist>:<div></div>}
                {props.type === "BAND"?<ButtonPlaylist variant="outlined" color="primary" onClick={() => props.goTo(routes.album)}>Criar Álbum</ButtonPlaylist>: <div></div>}
                <ButtonPlaylist variant="outlined" color="primary" onClick={() => props.logout()}>Sair</ButtonPlaylist>
            </MenuWrapper>
            <Cards />            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        type: state.user.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      logout: () => dispatch(logout()),
      goTo: (url) => dispatch(push(url))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);