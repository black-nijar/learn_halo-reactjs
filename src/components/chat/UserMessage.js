import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import dataBase from '../../firebaseConfig/fbConfig';
import MessageItem from './MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';

const UserMessage = ({ endUserId, auth: { user } }) => {
  const [allMessages, setAllMessages] = useState([]);

  const convoIdFrom = user.id + endUserId;
  const convoIdTo = endUserId + user.id;

  // Fetching Messages
  useEffect(() => {
    var msgs = [];
    fetchingFromMessages(msgs, convoIdFrom);
    fetchingToMessages(msgs, convoIdTo);
    // eslint-disable-next-line
  }, [endUserId]);

  // Fetching ConvoIDFrom Messages
  const fetchingFromMessages = (msgs, convoIdFrom) => {
    dataBase
      .child('messages')
      .child(convoIdFrom)
      .on('child_added', snap => {
        const snapValue = snap.val();
        msgs.push({
          from: snapValue.from,
          createdAt: snapValue.createdAt,
          message: snapValue.message
        });

        setAllMessages(msgs);
      });
  };

  // Fetching ConvoIDTo Messages
  const fetchingToMessages = (msgs, convoIdTo) => {
    dataBase
      .child('messages')
      .child(convoIdTo)
      .on('child_added', snap => {
        const snapValue = snap.val();
        msgs.push({
          from: snapValue.from,
          createdAt: snapValue.createdAt,
          message: snapValue.message
        });
        setAllMessages(msgs);
      });
  };
  return (
    <ScrollToBottom className='messages'>
      {allMessages.length > 0 ? (
        allMessages
          .sort((a, b) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          })
          .map(message => (
            <MessageItem
              key={message.createdAt}
              message={message}
              userId={user.id}
            />
          ))
      ) : (
        <div>
          <h5>Start Conversation...</h5>
        </div>
      )}
    </ScrollToBottom>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserMessage);
