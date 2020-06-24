import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { login } from '../../actions/user/login'
import { Typography, TextField, Button } from '@material-ui/core';
import { PaperMain, LoginWrapper, ImgContainer, Img } from './styles';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount(){
        if(this.props.isLogged){
            this.props.goTo(routes.home)
        }
    }

    handleClickSignUp = () => {
        this.props.signup()
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmit = event => {
        event.preventDefault()
        this.props.login(this.state)
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <PaperMain>
                    <Typography variant="h4" color="primary" >Spotenu</Typography>
                    <LoginWrapper onSubmit={this.formSubmit}>
                        <TextField
                            onChange={this.handleInputChange}
                            name="email"
                            type="email"
                            label="E-mail"
                            required
                            inputProps={{
                                title: "Informe um e-mail válido."
                            }}
                            value={email}
                        />
                        <TextField
                            onChange={this.handleInputChange}
                            name="password"
                            type="password"
                            label="Senha"
                            required
                            inputProps={{
                                pattern: ".{6,}",
                                title: "A senha deve ter pelo menos 6 dígitos."
                            }}
                            value={password}
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

const mapStateToProps = (state) => ({
    isLogged: state.user.token
})

const mapDispatchToProps = (dispatch) => ({
    signup: () => dispatch(push(routes.signup)),
    login: (form) => dispatch(login(form)),
    goTo: (url) => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);