import React, { Component } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { userProfile } from '../../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataBase from '../../firebaseConfig/fbConfig';

class GoogleAuth extends Component {
  componentDidMount() {
    // CLIENT ID
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

  // Auth status
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const id = this.auth.currentUser.le.Qt.JU;
      const givenName = this.auth.currentUser.le.Qt.nW;
      const photoUrl = this.auth.currentUser.le.Qt.MK;
      const email = this.auth.currentUser.le.Qt.Au;
      const familyName = this.auth.currentUser.le.Qt.nU;
      const name = this.auth.currentUser.le.Qt.Bd;
      if (
        id !== undefined &&
        givenName !== undefined &&
        photoUrl !== undefined &&
        email !== undefined
      ) {
        const userData = {
          id,
          givenName,
          email,
          photoUrl,
          familyName,
          name
        };
        // Upload user data to firebase
        dataBase
          .child('users')
          .child(id)
          .set(userData);

        // Send user data to redux
        this.props.userProfile(userData);
      }
    } else {
    }
  };

  // Sign In
  onSignIn = () => {
    this.auth.signIn();
  };

  // Sign Out
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

GoogleAuth.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { userProfile })(GoogleAuth);
