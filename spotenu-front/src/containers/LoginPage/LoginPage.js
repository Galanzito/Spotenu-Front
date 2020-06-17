import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { Typography, TextField, Button } from '@material-ui/core';
import { PaperMain, LoginWrapper, ImgContainer, Img } from './styles';

class HomePage extends Component {

    handleClickSignUp = () => {
        this.props.signup()
    }

    render() {
        return (
            <div>
                <PaperMain>
                    <Typography variant="h4" color="primary" >Spotenu</Typography>
                    <LoginWrapper onSubmit={""}>
                        <TextField
                            onChange={""}
                            name="email"
                            type="email"
                            label="E-mail / Nickname"
                            required
                            inputProps={{
                                title: "Informe um e-mail ou nickname válido."
                            }}
                            value={""}
                        />
                        <TextField
                            onChange={""}
                            name="password"
                            type="password"
                            label="Senha"
                            required
                            inputProps={{
                                pattern: ".{6,}",
                                title: "A senha deve ter pelo menos 6 dígitos."
                            }}
                            value={""}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ margin: "30px" }}
                            type="submit"
                        >
                            Login
                        </Button>
                        <Typography variant="h7" >Não tem uma conta ?
                        <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                style={{ margin: "15px" }}
                                onClick={this.handleClickSignUp}
                            >
                                Cadastre-se
                        </Button>
                        </Typography>
                    </LoginWrapper>
                </PaperMain>
                <ImgContainer>
                    <a href="https://apps.apple.com/br/genre/ios/id36"><Img alt="Diponível na App Store" src={require('../img/applestore.png')} /></a>
                    <a href="https://play.google.com/store"><Img alt="Disponível na GooglePlay" src={require('../img/googleplay.png')} /></a>
                </ImgContainer>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signup: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(HomePage);