import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const SearchUser = () => {
  const [text, setText] = useState('');
  
  return (
    <div className='container'>
      <form className='form' >
        <div className='search-input'>
          <input
            className='form-control'
            placeholder='Search user'
            onChange={text => setText(text)}
          />
        </div>
      </form>
    </div>
  );
};

SearchUser.propType = {

}

const mapStateToProps = state => ({
  
})
export default connect(mapStateToProps)(SearchUser);
