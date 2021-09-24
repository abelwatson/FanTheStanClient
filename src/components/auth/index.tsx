import React, { Component } from 'react';
import UserLogReg from './UserLogReg';
import { Token } from '../../types'

type AuthProps = {
    updateToken: (newToken: Token) => void
}

type AuthCompState = {}

export default class UserAuth extends Component<AuthProps, AuthCompState> {

    render() {
        return (

            <UserLogReg updateToken={this.props.updateToken}>

            </UserLogReg>

        )
    }
}