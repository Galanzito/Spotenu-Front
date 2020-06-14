import React, { Component } from 'react';
import { PaperMain, Input, FormWrapper } from './styles'
import InputPassword from './InputPassword';
import { Typography, Button } from '@material-ui/core';

class SignUpPage extends Component {

    render() {
        return (
            <PaperMain>
                <Typography variant="h4" color="primary" >Crie sua conta</Typography>
                <FormWrapper>
                    <Input
                        onChange={""}
                        id="outlined-baseic"
                        variant="outlined"
                        name="nome"
                        type="nome"
                        label="Nome"
                        required
                        inputProps={{
                            title: "Informe um nome"
                        }}
                        value={""}
                    />
                    <Input
                        onChange={""}
                        id="outlined-baseic"
                        variant="outlined"
                        name="email"
                        type="email"
                        label="E-mail"
                        required
                        inputProps={{
                            title: "Informe um e-mail válido."
                        }}
                        value={""}
                    />
                    <Input
                        onChange={""}
                        id="outlined-baseic"
                        variant="outlined"
                        name="nickname"
                        type="nickname"
                        label="Apelido"
                        required
                        inputProps={{
                            title: "Informe um apelido."
                        }}
                        value={""}
                    />
                    <InputPassword />
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

export default SignUpPage;