import React from 'react'

const SignIn = ({onSignIn}) => {
  return (
    <div>
      <button className='btn btn-primary' onClick={onSignIn}>
        Sign In with Google
      </button>
    </div>
  )
}

export default SignIn
