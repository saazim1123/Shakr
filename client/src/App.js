import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './auth/Login'
import Register from './auth/Register'
import * as actions from './actions'

import Header from './components/Header'
import Landing from './components/Landing'

class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')
    if(token) {
      this.props.getCurrentUser()
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="app"> 
          <Header />
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }


}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, actions)(App);

