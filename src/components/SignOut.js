import React from 'react';

const SignOut = ({ onSignOut }) => {
  return (
    <div>
      <button className='btn btn-danger' onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
