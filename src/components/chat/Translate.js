import React, { useState } from 'react';

const Translate = () => {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <div className='container'>
      <form className='form'>
        <div className='form-group col-md-6'>
          <div className='search-input '>
            <input
              className='form-control'
              placeholder='Translate'
              onChange={onChange}
            />
          </div>
        </div>
      </form>
      {text}
    </div>
  );
};

export default Translate;
