import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from '../main/Footer';
import Sidebar from '../main/Sidebar';
import Landing from './Landing';
import Header from '../main/Header'
import Favorites from './Favorites';
import Reviews from './Reviews';

type MainProps = {
    // token: string | null
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
                <Router>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Landing />
                        <Favorites />
                        <Reviews />
                    </Switch>
                    <Footer />

                </Router>

            </div>

        )
    }
}

export default Main;