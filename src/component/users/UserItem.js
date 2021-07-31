//We generated a class bassed component using rce shortcut
import React, { Component } from 'react';

class UserItem extends Component {
  //   state = {
  //     id: '1',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo',
  //   };  >> was the example to use state
  render() {
    const { avatar_url, login, html_url } = this.props.user; // was "state" //!! destructuring !! this.props.user is passed in in the User.js file (User component)

    return (
      <div className='card text-center'>
        <img
          src={avatar_url} //when we access a state within a class (UserItem), we need to use "this".our_state
          className='round-img'
          style={{ width: '60px' }} //This is inline style syntax in jsx
          alt=''
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
