import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer';
import SignUpAdmin from './SignUpAdmin';
import ApproveBand from './ApproveBand';

class AdminPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            key : ''
        }
    }

    handleKey = (key) => {
        this.setState({key})
    }

    render(){
        return(
            <div>
                <ResponsiveDrawer clickMenu={this.handleKey}/>
                {this.state.key === 'admin'? <SignUpAdmin />: <div></div>} 
                {this.state.key === 'band'? <ApproveBand />: <div></div>}              
            </div>
        )
    }
}

export default AdminPage;