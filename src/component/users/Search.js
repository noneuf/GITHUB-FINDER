import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value); //e.target.name helps us to target which form field we want to update, maybe we have another field for email for example
    // but here in our case, e.taget.name will be 'text' because we only have one input
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a value to search', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired, //ptbr
  setAlert: PropTypes.func.isRequired, //ptfr
};

export default Search;
