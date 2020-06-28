import React, { Component } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { userProfile } from '../actions/actions';

import { connect } from 'react-redux';

class GoogleAuth extends Component {
  componentDidMount() {
    const CLIENT_ID =
      '467256443726-gsfrf3e6a5uepdp5il8rso3sgfgcv1f0.apps.googleusercontent.com';
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          client_id: CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.le.Qt.JU;
      const userName = this.auth.currentUser.le.Qt.nW;
      const image = this.auth.currentUser.le.Qt.MK;
      const userEmail = this.auth.currentUser.le.Qt.Au;
      if (
        userId !== undefined &&
        userName !== undefined &&
        image !== undefined &&
        userEmail !== undefined
      ) {
        const userData = {
          userId,
          userName,
          userEmail,
          image
        };
        this.props.userProfile(userData);
      }
    } else {
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderButton = () => {
    const {
      user: { isSignedIn }
    } = this.props;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <h6
          style={{ color: 'white', paddingLeft: '10px', cursor: 'pointer' }}
          onClick={this.onSignOut}
        >
          <i className='material-icons'>person_outline</i>
          Sign out
        </h6>
      );
    } else {
      return (
        <div className='shadow-sm'>
          <div className='btn btn-danger' onClick={this.onSignIn}>
            Sign In with Google
          </div>
        </div>
      );
    }
  };
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <div>
          <SignIn onSignIn={this.onSignIn} />
          <SignOut onSignOut={this.onSignOut} />
        </div>
      </div>
    );
  }
}

export default connect(null, { userProfile })(GoogleAuth);
