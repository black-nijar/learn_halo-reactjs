import React, { useEffect, useState } from 'react';
import UserMessage from './UserMessage';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatBox = ({ location }) => {
  const [endUser, setEndUser] = useState({});
  useEffect(() => {
    const { user } = location;
    setEndUser(user);
  }, []);
  return (
    <div className='container' style={{ marginTop: '20px' }}>
      <div className='card' style={{ marginTop: '20px', margin: 'auto' }}>
        <div className='card-header'>
          <div className='user-name'>{endUser.name}</div>
        </div>
        <div className='user-message'>
          
          <UserMessage endUserId={endUser.id} />
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

export default ChatBox;
