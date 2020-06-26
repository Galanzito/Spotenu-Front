import React from 'react';
import SearchAppBar from './AppBar';
import { Typography,  Button, Paper } from '@material-ui/core';
import { FormWrapper, Input } from '../AdminPage/styles'
import styled from 'styled-components';

const PaperMain = styled(Paper)`
    height: 400px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
`

function AlbumPage(){
    return(
        <div>
            <SearchAppBar />
            <PaperMain>
                <Typography variant="h4" color="primary">Crie um Álbum</Typography>
                <FormWrapper onSubmit={""}>
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
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ margin: "15px" }}
                        type="submit"
                        onClick={"() => this.handleClick(this.state.name)"}
                    >
                        Criar
                    </Button>
                    </FormWrapper>
                    <Typography variant="h4" color="primary">Crie uma Música</Typography>
                <FormWrapper onSubmit={""}>
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
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ margin: "15px" }}
                        type="submit"
                        onClick={"() => this.handleClick(this.state.name)"}
                    >
                        Criar
                    </Button>
                </FormWrapper>
            </PaperMain>
        </div>
    )
}

export default AlbumPage;