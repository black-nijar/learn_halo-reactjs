import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Users = ({ users: { users } }) => {
  const list_users =
    users.length > 0 ? (
      users.map(user => {
        return (
          <div key={user.id} className='users-list'>
            <div
              className='card'
              style={{
                flexDirection: 'row',
                padding: '1em',
                alignItems: 'center'
              }}
            >
              <div className='user-picture-layout'>
                <img
                  src={user.photoUrl}
                  className='user-picture'
                  alt='user-snap'
                />
              </div>
              <div className='user-name'>{user.name}</div>
              <div className='message-text-layout'>
                <Link
                  to={{ pathname: `/message/${user.name}`, user: user }}
                  className='message-text'
                >
                  Message
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No Contacts...</div>
    );
  return <div>{list_users}</div>;
};

Users.propTypes = {
  users: PropTypes.object.isRequired
};

export default Users;
