import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Chat from './components/chat/Chat';
import Profile from './components/chat/Profile';
import SearchUser from './components/chat/SearchUser';
import NavBar from './components/layout/NavBar';
import PrivateRoute from './routing/PrivateRoute';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={Landing} />
        <section>
          <Switch>
            <PrivateRoute exact path='/chat' component={Chat} />
            <PrivateRoute exact path='/user-profile' component={Profile} />
            <PrivateRoute exact path='/search-user' component={SearchUser} />
          </Switch>
        </section>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
