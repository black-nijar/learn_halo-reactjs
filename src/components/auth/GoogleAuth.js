import React, { Component } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { userProfile } from '../../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GoogleAuth extends Component {
  componentDidMount() {
    const CLIENT_ID =
     
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
    const {
      auth: { isAuthenticated }
    } = this.props;
    console.log('isAuthenticated', isAuthenticated);
    return (
      <div>
        {isAuthenticated ? (
          <SignOut onSignOut={this.onSignOut} />
        ) : (
          <SignIn onSignIn={this.onSignIn} />
        )}
      </div>
    );
  }
}

GoogleAuth.propType = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { userProfile })(GoogleAuth);
