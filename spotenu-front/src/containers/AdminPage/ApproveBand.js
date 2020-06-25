import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBands, approveBand } from '../../actions/bands/bands'
import { PaperMainBand, MainWrapper } from './styles'
import { Button, Typography } from '@material-ui/core';

class Bands extends Component {

    componentDidMount() {
        this.props.fetchBands()
    }

    handleClick(id){
        this.props.approveBand(id)
        this.props.fetchBands()
    }

    render() {
        return (
            <MainWrapper>
                {this.props.bands[0] ? this.props.bands.map(band => {
                    if (band.isAproved === 0) {
                        return (
                            <PaperMainBand>
                                <p>Nome: {band.name}</p>
                                <p>Email: {band.email}</p>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                    style={{ margin: "15px" }}
                                    type="submit"
                                    onClick={() => this.handleClick(band.id)}
                                >
                                Aprovar
                                </Button>
                            </PaperMainBand>
                        )
                    }
                }):<Typography variant="h6">Sem Bandas Aguardando Aprovação</Typography>}
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bands: state.allBands.bands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBands: () => dispatch(fetchBands()),
        approveBand: (id) => dispatch(approveBand(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands)