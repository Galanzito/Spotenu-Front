import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper, Typography, TextField, Button } from '@material-ui/core'

const PaperMain = styled(Paper)`
    height: 400px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    margin: 5vw auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginWrapper = styled.form`
    margin-top: 12px;
    width: 80%;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
`;

const Img = styled.img`
    height:70px;
    width: 180px;
`

const ImgContainer = styled.div`
    max-width: 450px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

class HomePage extends Component {
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
                            label="E-mail"
                            required
                            inputProps={{
                                title: "Informe um e-mail válido."
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
                            color="primary"
                            style={{ margin: "30px" }}
                            type="submit"
                        >
                            Login
                        </Button>
                    </LoginWrapper>
                    <Typography variant="h7" >Não tem uma conta ?
                        <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        style={{ margin: "15px" }}
                        type="submit"
                        >
                            Cadastre-se
                        </Button>
                    </Typography>
                </PaperMain>
            <ImgContainer>                
                <a href="https://apps.apple.com/br/genre/ios/id36"><Img alt="Diponível na App Store" src={require('../img/applestore.png')} /></a>
                <a href="https://play.google.com/store"><Img alt="Disponível na GooglePlay" src={require('../img/googleplay.png')} /></a>            
            </ImgContainer>
        </div>
        )
    }
}

export default HomePage;