import React, { useEffect, useState } from 'react';

const UserMessage = ({ location }) => {
  const [endUser, setEndUser] = useState({});
  console.log('location', location);
  useEffect(() => {
    const { user } = location;
    setEndUser(user);
  }, []);
  return (
    <div className='container'>
      <div className='card' style={{ marginTop: '20px', margin: 'auto'}}>
        <div className='card-header'>{endUser.name}</div>
        <div className='user-message'>

        </div>
      </div>
      <form className='form'>
        <div className='form-group col-md-9' style={{ margin: 'auto' }}>
          <div className='search-input '>
            <input className='form-control' placeholder='Type a message...' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserMessage;
