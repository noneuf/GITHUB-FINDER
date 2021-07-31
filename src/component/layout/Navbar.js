import React, { Component } from 'react';
import PropTypes from 'prop-types'; //shortcut imt

export class Navbar extends Component {
  static defaultProps = {
    //this is used as default props in case we do not pase the props within the render function
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {
            this.props
              .title /* this is what we call a prop in react, it is defined in App.js within the Navbar class tag */
          }
        </h1>
      </nav>
    );
  }
}

export default Navbar;
