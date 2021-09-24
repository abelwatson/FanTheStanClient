import React from 'react';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Main from '../centerSection/Landing';
import Reviews from '../centerSection/Reviews';
import Favorites from '../centerSection/Favorites';

type SidebarProps = {
    currentToken: string,
    clickLogout: () => void
}


export default class Sidebar extends React.Component<SidebarProps, {}> {

    render(){
        return(
            <div>
                <div>
                    <ul>
                        <li><Link to="/Main">Home</Link></li>
                        <li><Link to="/MyFavorites">My Quotes</Link></li>
                        <li><Link to="/MyReviews">My Reviews</Link></li>
                    </ul>
                    <button onClick={this.props.clickLogout}>Logout</button>
                </div>
                <div className='sidebar-route'>
                    <Switch>
                        <Route exact path="/main"><Main /></Route>
                        <Route exact path="/Favorites"><Favorites /></Route>
                        <Route exact path="/Reviews"><Reviews /></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}