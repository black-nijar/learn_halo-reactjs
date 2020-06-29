import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = ({ auth: { user } }) => {
  return (
    <div className='container'>
      {user !== null ? (
        <div>
          <div className='user-profile' style={{ marginTop: '20px' }}>
            <div
              className='card col-md-8 col-sm-12 col-lg-6'
              style={{ padding: '20px', margin: 'auto' }}
            >
              <div className='card-header'>
                <h5>Profile</h5>
              </div>
              <div className='image'>
                <img src={user.photoUrl} className='user-image' alt='user' />
              </div>
              <h6>Name : {user.givenName}</h6>
              <h6>UserId : it's@{user.email}</h6>
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <h6>Loading...</h6>
        </Fragment>
      )}
    </div>
  );
};

Profile.propType = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Profile);
