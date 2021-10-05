import React from 'react';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import { SideBarStyle, LogoutButton } from '../styles/styles'
import Main from '../centerSection/Landing';
import ViewReviews from '../centerSection/review/ViewReviews';
import ViewFavorites from '../centerSection/favorites/ViewFavorites';

type SidebarProps = {
    clickLogout(): void
    sessionToken: string | null
    apiErr: string
    // role: string
}



export default class Sidebar extends React.Component<SidebarProps, {}> {

    render() {
        return (
            <SideBarStyle>
                <div>
                    <LogoutButton>
                        <button onClick={this.props.clickLogout} >Logout</button>
                    </LogoutButton>
                    <ul>
                        <li><Link to="/Main">Heros</Link></li>
                        <li><Link to="/MyFavorites">My Favorites</Link></li>
                        <li><Link to="/MyReviews">My Reviews</Link></li>
                    </ul>
                </div>
                <div className='sidebar-route'>
                    <Switch>
                        <Route exact path="/Main"><Main /></Route>
                        <Route exact path="/MyFavorites"><ViewFavorites sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} /></Route>
                        <Route exact path="/MyReviews"><ViewReviews sessionToken={this.props.sessionToken} apiErr={this.props.apiErr}/></Route>
                    </Switch>
                </div>
            </SideBarStyle>
        )
    }
}