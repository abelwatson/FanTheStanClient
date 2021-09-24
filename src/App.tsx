import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAuth from './components/auth'
import Main from './components/centerSection/'
import { Token } from './types'

type AppProps = {
  clearToken: () => void
}
type AppState = {
  token: Token
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      token: '',
    }
  }

  componentDidMount(): void {
    if (localStorage.getItem('token')) {
      this.setState({
        token: localStorage.getItem('token')!,
      })
    }
  }

  updateToken = (newToken: Token): void => {
    localStorage.setItem('token', newToken)
    this.setState({ token: newToken })
  }

  clearToken = (): void => {
    localStorage.clear()
    this.setState({ token: '' })
    window.location.href = "/"
  }

  protectedViews = (): JSX.Element => {
    return this.state.token === localStorage.getItem('token') ?
      <Main 
      // token={this.state.token} 
      /> :
      <UserAuth updateToken={this.updateToken} />
  }

  render() {
    return (
      <div className='App'>
        {this.state.token === localStorage.getItem('token') ? 
        <Main token={this.state.token} clearToken={this.clearToken} /> : 
        <UserAuth updateToken={this.updateToken} />}
      </div>
    )
  }
}

export default App