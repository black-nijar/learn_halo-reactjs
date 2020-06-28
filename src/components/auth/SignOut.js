import React from 'react';
import { Link } from 'react-router-dom';

const SignOut = ({ onSignOut }) => {
  return (
    <div>
      <Link to='/' onClick={onSignOut} style={{color: 'black'}}>
        Sign Out
      </Link>
    </div>
  );
};

export default SignOut;
