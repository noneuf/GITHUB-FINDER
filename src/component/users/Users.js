import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';

// class Users extends Component {
//   //was a class based component, now is a functional component since we do not use states in it
//   // state = { //this is no longer used since we pass our state from the main component (App) as props in this component
//   //   users: [
//   //     {
//   //       id: '1',
//   //       login: 'mojombo',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //       html_url: 'https://github.com/mojombo',
//   //     },
//   //     {
//   //       id: '2',
//   //       login: 'defunkt',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//   //       html_url: 'https://github.com/defunkt',
//   //     },
//   //     {
//   //       id: '3',
//   //       login: 'pjhyett',
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//   //       html_url: 'https://github.com/pjhyett',
//   //     },
//   //   ],
//   // };
//   render() {
//     return (
//       <div style={userStyle /* ref=style as a variable*/}>
//         {this.props.users.map(
//           (
//             user //it was "this.state.users..." when the state was comming from this component
//           ) => (
//             <UserItem key={user.id} user={user} /> //here user is a prop that is passed to the userItem
//           )
//         )}
//       </div>
//     );
//   }
// }

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle /* ref=style as a variable*/}>
      {users.map(
        (
          user //it was "this.state.users..." when the state was comming from this component
        ) => (
          <UserItem key={user.id} user={user} /> //here user is a prop that is passed to the userItem
        )
      )}
    </div>
  );
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
