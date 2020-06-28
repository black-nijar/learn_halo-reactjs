import React from 'react';

const SignIn = ({ onSignIn }) => {
  return (
    <div>
      <h6 onClick={onSignIn} style={{ color: 'black' }}>
        Sign In with Google
      </h6>
    </div>
  );
};

export default SignIn;
