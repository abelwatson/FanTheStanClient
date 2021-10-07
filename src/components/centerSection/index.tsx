import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../main/Footer';
import Sidebar from '../main/Sidebar';
import Header from '../main/Header'
// import UserAdmin from '../auth'

type MainProps = {
    sessionToken: string | null
    apiErr: string
    // role: string | null
}


class Main extends Component<MainProps, {}>{
    constructor(props: MainProps) {
        super(props)
        this.state = {
            sessionToken: '',
            // role: '',
        }
        this.clearToken = this.clearToken.bind(this)
    }
    
    clearToken = () => {
        localStorage.clear();
        this.setState({ sessionToken: ('') });
        window.location.href = "/"
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Sidebar clickLogout={this.clearToken} sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} />
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default Main;