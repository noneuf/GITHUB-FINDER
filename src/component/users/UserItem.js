//We generated a class bassed component using rce shortcut
//import React, { Component } from 'react'; // was used when we add a class based component
import React from 'react';
import PropTypes from 'prop-types';

// class UserItem extends Component {
//   //   state = {
//   //     id: '1',
//   //     login: 'mojombo',
//   //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //     html_url: 'https://github.com/mojombo',
//   //   };  >> was the example to use state
//   render() {
//     const { avatar_url, login, html_url } = this.props.user; // was "state" //!! destructuring !! this.props.user is passed in in the User.js file (User component)

//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url} //when we access a state within a class (UserItem), we need to use "this".our_state
//           className='round-img'
//           style={{ width: '60px' }} //This is inline style syntax in jsx
//           alt=''
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// } //this class based component was used before we refactored it to a functional component (doable since we dont use classes in it)

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  //this is a even more simple way of destructuring, instead of passing props and then destructure (line 37), we can do it right here  ref: simple destrucutring
  //this is a functional component.

  //const { avatar_url, login, html_url } = props.user; // when it was a class based component we used to acces props with the "this.props..." syntax, now we do not need because we are in a functional component

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
};

UserItem.prototype = {
  user: /* shortcut ptor */ PropTypes.object.isRequired, //user is an object that as several props so we defined it as an object that is required
};

export default UserItem;
