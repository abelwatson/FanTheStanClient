import React, { Component } from 'react';
import UserLogReg from './UserLogReg';

type AuthProps = {
    updateToken(token: string): void,
    updateRole(role: string): void,
}

type AuthCompState = {}

export default class UserAuth extends Component<AuthProps, AuthCompState> {

    render() {
        return (
            <UserLogReg updateToken={this.props.updateToken} updateRole={this.props.updateRole}/>
        )
    }
}