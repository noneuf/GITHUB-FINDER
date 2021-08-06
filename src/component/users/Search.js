import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired, //ptbr
    setAlert: PropTypes.func.isRequired, //ptfr
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //e.target.name helps us to target which form field we want to update, maybe we have another field for email for example
    // but here in our case, e.taget.name will be 'text' because we only have one input
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a value to search', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button
            className='btn btn-light btn-block'
            style={{ backgroundColor: '#dc3545', color: 'white' }}
            onClick={clearUsers} //this will fire off the clearUsers function which is passed as a prod from App.js to this component
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
