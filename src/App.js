import React, { Component } from 'react'; //!! we use destructturing here !! So down there line 4 we would have written React.Component instead of Component
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      // Fragment is a ghost ellement, we use it instead of a div for example.
      // ref: passing states to the child component (Users) from the parent component (App)

      //To understand how users are shearched check this link: https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969828#questions
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
