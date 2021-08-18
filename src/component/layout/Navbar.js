//import React, { Component } from 'react'; // was used when we add a class based component
import React from 'react';
import PropTypes from 'prop-types'; //shortcut imt
import { Link } from 'react-router-dom'; //we need {} because this component 'Link' is not a default exported component such as Navbar is at the end of this file for example.

// export class Navbar extends Component { //this is the classe based component version that we refactor to a functional component
//   static defaultProps = {
//     //this is used as default props in case we do not pase the props within the render function
//     title: 'Github Finder',
//     icon: 'fab fa-github',
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon} />
//           {
//             this.props
//               .title /* this is what we call a prop in react, it is defined in App.js within the Navbar class tag */
//           }
//         </h1>
//       </nav>
//     );
//   }
// }

const Navbar = ({ icon, title }) => {
  //destructuring here instead of using props and then destructure within the function, ref: simple destrucutring
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {
          title /* this is what we call a prop in react, it is defined in App.js within the Navbar class tag */
        }
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          {/*We use Link since that way we keep the content of the main page (for example if we add searched for a user in Github and got result than went to the about page and going back to the main page we will still see the results of our search because we use link instead of a simple a tag)*/}
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

//ref: defaultProps & propTypes in functional components
Navbar.defaultProps = {
  //this is used as default props in case we do not pase the props within the render function
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
