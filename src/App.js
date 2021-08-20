import React, { Fragment, Component } from 'react'; //!! we use destructturing here !! So down there line 4 we would have written React.Component instead of Component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import User from './component/users/User';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ alert: null });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
    );
    this.setState({ user: res.data, loading: false });
  };

  // Get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` //global variable that are defined in the local.env file
    );
    this.setState({ repos: res.data, loading: false });
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } }); //could be simplified using msg, type since the key and the value are the same
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading, user, repos } = this.state;
    return (
      // Fragment is a ghost ellement, we use it instead of a div for example.
      // ref: passing states to the child component (Users) from the parent component (App)

      //To understand how users are shearched check this link: https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969828#questions
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              {/**There is only one component in this Route so we can implement it like that: component={About} instead of: render={(props) => <About />} */}
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
              {/** ...props ==>> spread operator, go here to remind what it is: https://www.youtube.com/watch?v=iLx4ma8ZqvQ*/}
              {/**user and loading are destructured at the renders begening so we do not need to write this.state.user/loading*/}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
