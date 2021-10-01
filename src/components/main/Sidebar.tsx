import React from 'react';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Main from '../centerSection/Landing';
import ViewReviews from '../centerSection/review/ViewReviews';
import ViewFavorites from '../centerSection/favorites/ViewFavorites';

type SidebarProps = {
    clickLogout(): void
}


export default class Sidebar extends React.Component<SidebarProps, {}> {

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.clickLogout} >Logout</button>
                    <ul>
                        <li><Link to="/Main">Home</Link></li>
                        <li><Link to="/MyFavorites">My Favorites</Link></li>
                        <li><Link to="/MyReviews">My Reviews</Link></li>
                    </ul>
                </div>
                <div className='sidebar-route'>
                    <Switch>
                        <Route exact path="/Main"><Main /></Route>
                        <Route exact path="/MyFavorites"><ViewFavorites /></Route>
                        <Route exact path="/MyReviews"><ViewReviews /></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}