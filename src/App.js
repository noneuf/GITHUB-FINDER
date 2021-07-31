import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import React, { Component } from 'react'; //!! we use destructturing here !! So down there line 4 we would have written React.Component instead of Component

class App extends Component {
  render() {
    return (
      // Fragment is a ghost ellement, we use it instead of a div for example.
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
