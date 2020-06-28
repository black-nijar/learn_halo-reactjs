import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from '../auth/GoogleAuth';

const NavBar = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <Fragment>
      <li>
        <Link to='/chat'>Chat</Link>
      </li>
      <li>
        <Link to='/search-user'>Search</Link>
      </li>
      <li>
        <Link to='/user-profile'>Profile</Link>
      </li>

      <GoogleAuth />
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
    <div>
      <nav className='navbar navbar-light bg-light'>
        <Link to='/' className='navbar-brand'>
          HaloApp
        </Link>
        <ul className='navbar-nav mr-auto'>{isAuthenticated ? authLinks : guestLink}</ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
