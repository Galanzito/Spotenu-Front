import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer';
import SignUpAdmin from './SignUpAdmin';

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
            </div>
        )
    }
}

export default AdminPage;