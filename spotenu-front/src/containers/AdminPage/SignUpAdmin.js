import React, { Component } from 'react';
import { connect } from "react-redux";
import { PaperMain, Input, FormWrapper } from './styles'
import { Typography, Button } from '@material-ui/core';
import {registerNewAdmin} from '../../actions/user/signup'

class SignUpPageAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                name: "",
                nickname: "",
                email: "",
                password: ""
            }            
        }
    }

    handleOnSubmit = event =>{
        event.preventDefault();
        this.props.registerNewAdmin(this.state.user)        
    }

    handlePasswordInput = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                password: event.target.value
            }
        });
    }

    handleNameInput = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                name: event.target.value
            }
        });
    }

    handleNicknameInput = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                nickname: event.target.value
            }
        });
    }

    handleEmailInput = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                email: event.target.value
            }
        });
    }
    render() {
        return (
            <PaperMain>
                <Typography variant="h4" color="primary" >Novo Administrador</Typography>
                <FormWrapper onSubmit={this.handleOnSubmit}>
                    <Input
                        onChange={this.handleNameInput}
                        id="outlined-baseic"
                        variant="outlined"
                        name="nome"
                        type="nome"
                        label="Nome"
                        required
                        inputProps={{
                            title: "Informe um nome"
                        }}
                        value={this.state.name}
                    />
                    <Input
                        onChange={this.handleEmailInput}
                        id="outlined-baseic"
                        variant="outlined"
                        name="email"
                        type="email"
                        label="E-mail"
                        required
                        inputProps={{
                            title: "Informe um e-mail válido."
                        }}
                        value={this.state.email}
                    />
                    <Input
                        onChange={this.handleNicknameInput}
                        id="outlined-baseic"
                        variant="outlined"
                        name="nickname"
                        type="nickname"
                        label="Apelido"
                        required
                        inputProps={{
                            title: "Informe um apelido."
                        }}
                        value={this.state.nickname}
                    />
                    <Input
                        onChange={this.handlePasswordInput}
                        id="outlined-baseic"
                        variant="outlined"
                        name="password"
                        type="password"
                        label="Senha"
                        required
                        inputProps={{
                            title: "Informe um apelido."
                        }}
                        value={this.state.password}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ margin: "15px" }}
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </FormWrapper>
            </PaperMain>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerNewAdmin: (user) => dispatch(registerNewAdmin((user))),
});

export default connect(null, mapDispatchToProps)(SignUpPageAdmin);