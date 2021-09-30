import React, { Component } from 'react';
import './Center.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../main/Footer';
import Sidebar from '../main/Sidebar';
import Header from '../main/Header'

type MainProps = {
    sessionToken: string | null,
}


class Main extends Component<MainProps, {}>{
    constructor(props: MainProps) {
        super(props)
        this.state = {
            sessionToken: '',
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
                    <Sidebar clickLogout={this.clearToken} />
                    <Footer />
                </Router>

            </div>

        )
    }
}

export default Main;