//import React, { Component } from 'react'; // was used when we add a class based component
import React from 'react';
import PropTypes from 'prop-types'; //shortcut imt

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
