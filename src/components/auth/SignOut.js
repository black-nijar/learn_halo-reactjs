import React from 'react';
import { Link } from 'react-router-dom';

const SignOut = ({ onSignOut }) => {
  return (
    <div>
      <Link to='/' onClick={onSignOut}>
        Sign Out
      </Link>
    </div>
  );
};

export default SignOut;
