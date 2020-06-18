import React, { Component } from 'react';
import { connect } from "react-redux";
import {registerNewUser} from '../../actions/user/signup'

import { PaperMain, Input, FormWrapper } from './styles'
import InputPassword from './InputPassword';
import { Typography, Button } from '@material-ui/core';
import SelectUserType from './SelectUserType';

class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                name: "",
                nickname: "",
                email: "",
                password: "",
                description: "",
                type: ""
            }            
        }
    }

    handleOnSubmit = event =>{
        event.preventDefault();
        this.props.registerNewUser(this.state.user)
    }

    handleType = (type) => {
        this.setState({
            user:{
                ...this.state.user,
                type
            }
        });
    }

    handlePassword = (password) => {
        this.setState({
            user:{
                ...this.state.user,
                password
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

    handleDescriptionInput = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                description: event.target.value
            }
        });
    }

    render() {
        return (
            <PaperMain>
                <Typography variant="h4" color="primary" >Crie sua conta</Typography>
                <FormWrapper onSubmit={this.handleOnSubmit}>
                    <SelectUserType type={this.handleType} />
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
                    {this.state.user.type === 'BAND'?                    
                     <Input
                        onChange={this.handleDescriptionInput}
                        id="outlined-baseic"
                        variant="outlined"
                        name="descricao"
                        type="descricao"
                        label="Descrição da Banda"
                        required
                        inputProps={{
                            title: "Informe uma descrição"
                        }}
                        value={this.state.description}
                    /> : <div></div>}
                    <InputPassword password={this.handlePassword} />
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ margin: "15px" }}
                        type="submit"
                        onClick={""}>
                        Cadastrar
                    </Button>
                </FormWrapper>
            </PaperMain>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerNewUser: (user) => dispatch(registerNewUser((user))),
});

const mapStateToProps = (state) => ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);