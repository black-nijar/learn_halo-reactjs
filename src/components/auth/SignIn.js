import React from 'react';

const SignIn = ({ onSignIn }) => {
  return (
    <div>
      <h4 onClick={onSignIn}>Sign In with Google</h4>
    </div>
  );
};

export default SignIn;
