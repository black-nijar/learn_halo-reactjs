import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users: { users } }) => {
  const list_users =
    users.length > 0 ? (
      users.map(user => {
        return (
          <div key={user.id} className='users-list'>
            <div
              className='card'
              style={{ flexDirection: 'row', padding: '1em' }}
            >
              <div className='user-picture-layout'>
                <img
                  src={user.photoUrl}
                  className='user-picture'
                  alt='user-snap'
                />
              </div>
              <div className='user-name'>{user.name}</div>
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
