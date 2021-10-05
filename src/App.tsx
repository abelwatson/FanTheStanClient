import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAuth from './components/auth'
import Main from './components/centerSection/'

type AppState = {
  sessionToken: string | null,
  role: string | null,
  apiErr: string,
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      sessionToken: '',
      role: "",
      apiErr: ', our apologies. Please try again later. If this is persistent, please submit an issue on Github.'
    }
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
      <Main apiErr={this.state.apiErr} sessionToken={this.state.sessionToken} /> :
      <UserAuth updateToken={this.updateToken} updateRole={this.updateRole} />)
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