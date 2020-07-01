import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const MessageItem = ({ message, userId }) => {

  return (
    <ScrollToBottom className='messages'>
      <div className='messageContainer'>
        <div style={{ flex: '1' }} className='messageBox'>
          <div>
            {message.message !== 'undefined' ? (
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                 // alignItems: message.from === userId ? 'flex-end': 'flex-start',
                // alignSelf: message.from === userId ? 'flex-end' : 'flex-start',
                  backgroundColor:
                    message.from === userId ? 'lightblue' : 'lightgrey',
                  borderRadius: 10,
                  padding: 5,
                  marginBottom: 10,
                  justifyContent: message.from === userId ? 'flex-end': 'flex-start'
                }}
              >
                {message.message}
              </div>
            ) : (
              <div>
                <span>Connecting...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollToBottom>
  );
};

export default MessageItem;
