import React, { useEffect, useState } from 'react';
import UserMessage from './UserMessage';

const ChatBox = ({ location }) => {
  const [endUser, setEndUser] = useState({});

  useEffect(() => {
    const { user } = location;
    setEndUser(user);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container' style={{ marginTop: '20px' }}>
      <div className='card-header'>
        <div className='user-name'>{endUser.name}</div>
      </div>
      <div className='user-message'>
        <div className='innerContainer'>
          <UserMessage endUserId={endUser.id} />
          <form className='form'>
            <div className='form-group col-md-9' style={{ margin: 'auto' }}>
              <div className='search-input '>
                <input
                  className='form-control'
                  placeholder='Type a message...'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
