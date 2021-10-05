import React from 'react';
import { HeaderStyle } from '../styles/styles';

export class Header extends React.Component {

    render() {
        return (
            <HeaderStyle>
                <nav>
                    <h1>Fan the Stan</h1>
                </nav>
            </HeaderStyle>
        )
    }
}

export default Header;