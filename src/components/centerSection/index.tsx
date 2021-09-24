import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../main/Footer';
import Sidebar from '../main/Sidebar';
import Landing from './Landing';
import Header from '../main/Header'

type MainProps = {
    token: string | null
    // clearToken: () => void
}

type MainState = {

}

class Main extends Component<MainProps, MainState>{
    constructor(props: MainProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                <Landing />
                <Sidebar />
                <Navbar />
                <Footer />
            </div>

        )
    }
}

export default Main;