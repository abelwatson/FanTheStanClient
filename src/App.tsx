import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAuth from './components/auth'
import Main from './components/centerSection/'

type AppProps = {

}

type AppState = {
  sessionToken: string | null
  role: string | null
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      sessionToken: "",
      role: ""
    }
    this.updateToken = this.updateToken.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ sessionToken: localStorage.getItem("token") });
    }
    if (localStorage.getItem("role")) {
      this.setState({ role: localStorage.getItem("role") });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
  }

  updateRole = (newRole: string) => {
    localStorage.setItem("role", newRole);
    this.setState({ role: newRole });
  }

  protectedViews() {
    return (this.state.sessionToken === localStorage.getItem("token") ? 
    <Main sessionToken={this.state.sessionToken} /> :
    <UserAuth updateToken={this.updateToken} updateRole={this.updateRole}/>)
  }

  render() {
    return (
      <div className="App">
        {this.protectedViews()}
      </div>
    );
  }
}

export default App