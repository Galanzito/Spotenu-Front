import React, { Component } from 'react';
import { PaperMain, Input, FormWrapper } from './styles'
import InputPassword from './InputPassword';
import { Typography, Button } from '@material-ui/core';
import SelectUserType from './SelectUserType';

class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: ''
        }
    }

    handleType = (type) => {
        this.setState({type: type});
    }

    render() {
        return (
            <PaperMain>
                <Typography variant="h4" color="primary" >Crie sua conta</Typography>
                <FormWrapper>
                    <SelectUserType type={this.handleType} />
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
                    {this.state.type === 'Banda'?                    
                     <Input
                        onChange={""}
                        id="outlined-baseic"
                        variant="outlined"
                        name="descricao"
                        type="descricao"
                        label="Descrição da Banda"
                        required
                        inputProps={{
                            title: "Informe uma descrição"
                        }}
                        value={""}
                    /> : <div></div>}
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