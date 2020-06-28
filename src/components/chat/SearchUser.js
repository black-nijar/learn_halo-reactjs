import React, { useState } from 'react';

const SearchUser = () => {
  const [text, setText] = useState('');
  
  return (
    <div className='container'>
      <form className='form'>
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

export default SearchUser;
