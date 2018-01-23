import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import SignUpPage from './components/signup';
import SignInPage from './components/signin';
import Booking from './components/booking';
import PasswordForgetPage from './components/password-forget';
import AccountPage from './components/account';
import Navigation from './components/navigation';
import { firebase, auth } from '../src/firebase';
import { Route, Switch } from 'react-router-dom';
import * as routes from './constants/routes';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          authUser: null,
        };
      }
      componentDidMount() {
        auth.doOnStateChange((authUser) => {
          if (authUser) {
            this.setState({ authUser });
          } 
        });
      }
      login() {
        auth.doSignInGoogle()
          .then((result) => {
            const authUser = result.authUser;
            this.setState({authUser}, () => {
              console.log(this.state.authUser);
            });
          });
      }
      logout() {
        auth.doSignOut()
          .then(() => {
            this.setState({authUser: null});
          });
      }
    render() {
        return ( 
        <div>
          <Header authUser={this.state.authUser} login={this.login.bind(this)} logout={this.logout.bind(this)}/>
          <button onClick={this.login.bind(this)}>Login</button>
          <div className="content">
          <div className="sidebar">
                    <Navigation authUser={this.state.authUser}/>
                </div>
          <Switch>
              <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUpPage />}
              />
              <Route
                exact path={routes.SIGN_IN}
                component={() => <SignInPage />}
              />
              <Route
                exact path={routes.PASSWORD_FORGET}
                component={() => <PasswordForgetPage />}
              />
              <Route
                exact path={routes.BOOKING}
                component={() => <Booking authUser={this.state.authUser} />}
              />
              <Route
                exact path={routes.ACCOUNT}
                component={() => <AccountPage authUser={this.state.authUser}/>}
              />
              <Route
                exact path={routes.HOTEL}
                component={() => <Main authUser={this.state.authUser}/>}
              />
              <Route 
                exact path='/'
                component={() => <Main authUser={this.state.authUser}/>}
              />
          </Switch>
           </div> 
            <Footer/>

        </div>
        );
    }
}

export default App;
