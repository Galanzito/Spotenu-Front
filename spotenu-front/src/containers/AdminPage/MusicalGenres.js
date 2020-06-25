import React, { Component } from 'react';
import { connect } from "react-redux";
import { PaperMainGenre, Input, FormWrapper} from './styles'
import { Typography, Button } from '@material-ui/core';
import { newGenre, fetchGenres } from '../../actions/genres/musicalGenres';

class MusicalGenres extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        this.props.fetchGenres()
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();                
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleClick = (name) => {
        this.props.addGenre(name)
        this.props.fetchGenres()
        this.setState({
            name:""
        })
    }

    render(){
        return(
            <PaperMainGenre>
                <Typography variant="h4" color="primary">Criar Gênero Musical</Typography>
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
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ margin: "15px" }}
                        type="submit"
                        onClick={() => this.handleClick(this.state.name)}
                    >
                        Cadastrar
                    </Button>
                </FormWrapper>
                <Typography variant="h6" color="primary">Todos os Gêneros</Typography>
                {this.props.genres.map((genre) => {
                            return(
                                    <div>{genre.name}</div>
                            )                            
                        })}
            </PaperMainGenre>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        genres: state.musicalGenres.genres
    }
}

const mapDispatchToProps = (dispatch) => ({
    addGenre: (name) => dispatch(newGenre(name)),
    fetchGenres: () => dispatch(fetchGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicalGenres);