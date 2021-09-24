import React from 'react';
import './Auth.css';
import {UserState} from '../../types'

type UserProps = {
    updateToken(token: string): void,
}


// const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export class UserLogReg extends React.Component<UserProps, UserState> {
    state = {
        email: '',
        password: '',
        role: '',
        errorText: '',
        token: '',
        register: false,
        err: '',
    }

    handleRegister = async () => {
        const apiURL = 'http://localhost:3000/user/register';
        const reqBody = {
            user: {
                email: this.state.email,
                password: this.state.password,
                role: this.state.role
            }
        }

        try {
            // console.log(reqBody)
            const res = await fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const json = await res.json();
            const token = json.sessionToken;
            this.props.updateToken(token)

            if (json.errors) {
                let errMsg = json.errors[0].message;
                this.setState({ errorText: errMsg.charAt(0).toUpperCase() + errMsg.slice(1) + '.' });
                throw new Error(json.errors[0].message);
            }
        } catch (err) {
            console.log(err)
        }
    }

    handleLogin = async () => {
        const apiURL = 'http://localhost:3000/user/login';
        const reqBody = {
            user: {
                email: this.state.email,
                password: this.state.password,
            }
        }

        try {
            const res = await fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const json = await res.json();
            const token = json.sessionToken
            this.props.updateToken(token);

            if (json.errors) {
                let errMsg = json.errors[0].message
                this.setState({ errorText: errMsg.charAt(0).toUpperCase() + errMsg.slice(1) + '.' })
                throw new Error(json.errors[0].message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="BackgroundImage">
                <div className="wrapper">
                    <div className="form-wrapper">
                        {this.state.register ?
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                this.handleRegister()
                            }}>
                                <h2 className="titleHeader" >Fan The Stan</h2>
                                <h4 className="headings" >Register</h4>
                                <div>
                                    <div>
                                        <label htmlFor='email'>Email: </label>
                                        <input type='email' id='email' name='email' title='Please enter a valid email address.' required pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor='password'>Password: </label>
                                        <input type='password' id='password' name='password' title='Password must be between 8 and 16 characters, and contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.' required pattern='^(?=.{5,10})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^+=]).*$' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }} />
                                    </div>
                                </div>
                                <button type='submit'>{this.state.register ? 'Click to Register' : 'Click to Login'}</button>
                                <button type="button" onClick={() => this.setState({ register: !this.state.register })}>{this.state.register ? 'Need to Login?' : 'New Here?'}</button>
                            </form> :
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                this.handleLogin()
                            }}>
                                <h2 className="titleHeader" >Fan The Stan</h2>
                                <h4 className="headings">Login</h4>
                                <div>
                                    <div>
                                        <label htmlFor='email'>Email: </label>
                                        <input type='email' id='email' name='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} title='Please enter the email address used to Register.' required />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor='password'>Password: </label>
                                        <input type='password' id='password' name='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }} title='Please enter your password.' required />
                                    </div>
                                </div>
                                <button type='submit'>{this.state.register ? 'Click to Register' : 'Click to Login'}</button>
                                <button type="button" onClick={() => this.setState({ register: !this.state.register })}>{this.state.register ? 'Need to Login?' : 'New Here?'}</button>
                            </form>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLogReg;