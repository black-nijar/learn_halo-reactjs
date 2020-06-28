import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from '../auth/GoogleAuth';

const NavBar = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <Fragment>
      <ul className='nav'>
        <li className='nav-link'>
          <Link to='/chat' style={{ color: 'black' }}>
            Chat
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/search-user' style={{ color: 'black' }}>
            Search
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/user-profile' style={{ color: 'black' }}>
            Profile
          </Link>
        </li>
        <li className='nav-link' style={{ color: 'black' }}>
          <GoogleAuth />
        </li>
      </ul>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <Link to='/'>
        <GoogleAuth />
      </Link>
    </Fragment>
  );
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          HaloApp
        </Link>
        {isAuthenticated ? authLinks : guestLink}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
