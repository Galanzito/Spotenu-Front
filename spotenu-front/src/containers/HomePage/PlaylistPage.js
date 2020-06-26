import React from 'react';
import SearchAppBar from './AppBar';
import { Typography,  Button, Paper } from '@material-ui/core';
import { FormWrapper, Input } from '../AdminPage/styles'
import styled from 'styled-components';

const PaperMain = styled(Paper)`
    height: 250px;
    padding: 10px;
    max-width: 450px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
`

function PlaylistPage(){
    return(
        <div>
            <SearchAppBar />
            <PaperMain>
                <Typography variant="h4" color="primary">Crie Sua Playlist</Typography>
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

export default PlaylistPage