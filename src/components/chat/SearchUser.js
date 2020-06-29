import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataBase from '../../firebaseConfig/fbConfig';
import { usersData } from '../../actions/actions';
import Users from './Users';

const SearchUser = ({ users, usersData }) => {
  // Fetching users from firebase
  useEffect(() => {
    dataBase.on('value', snap => {
      const data = snap.val();
      usersData(data);
    });
    // eslint-disable-next-line
  }, []);
  //console.log('users', users)
  return (
    <div className='container'>
      <form className='form'>
        <div className='form-group col-md-6'>
          <div className='search-input '>
            <input className='form-control' placeholder='Search user' />
          </div>
        </div>
      </form>
      <Users users={users} />
    </div>
  );
};

SearchUser.propType = {
  users: PropTypes.object.isRequired,
  usersData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { usersData })(SearchUser);
