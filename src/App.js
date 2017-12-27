import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Booking from './components/booking';
import Footer from './components/footer';
import Hotel from './components/hotel';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <Switch>
              <Route path="/booking" component={Booking} />
              <Route path="/" exact component={Hotel} />
            </Switch>
            <Footer/>

            </div>
        );
    }
}

export default App;
