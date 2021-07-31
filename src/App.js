import React, { Component } from 'react'; //!! we use destructturing here !! So down there line 4 we would have written React.Component instead of Component
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
    console.log(this.users);
  }
  render() {
    return (
      // Fragment is a ghost ellement, we use it instead of a div for example.
      // ref: passing states to the child component (Users) from the parent component (App)
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
