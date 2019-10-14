import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './auth/Login'
import Register from './auth/Register'
import * as actions from './actions'

import Header from './components/Header'
import Landing from './components/Landing'
import MyBarPage from './containers/MyBarPage'
import DrinkShow from './containers/DrinkShow'
import DrinkRandom from './containers/DrinkRandom'
import DrinksIndex from './containers/DrinksIndex'
import URL from './actions/URL'

class App extends Component {

  state = {
    username: ''
  }

  componentDidMount () {
    if (localStorage.getItem('token') !== undefined) {
      URL.validate()
        .then(data => {
          if (data.error) {
            throw Error(data.error)
          } else {
            this.signIn(data)
            this.props.history.push('/mybar')
          }
        })
        .catch(error => {
          alert(error)
        })
    }
  }
  signIn = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="app"> 
          <Header username={this.state.username}/>
          <Route exact path="/" component={Landing}/>
          <Route path='/signin'component={routerProps => (
              <Login {...routerProps} signIn={this.signIn} />
            )}
          />
          <Route path="/register" component={Register}/>
          <Route path ='/mybar' component={MyBarPage}/>
          <Route exact path="/drinks" component={DrinksIndex} />
          <Route exact path="/drinks/random" component={DrinkRandom} />
          <Route exact path='/drinks/:id' component={DrinkShow} />
          </div>
        </BrowserRouter>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}


export default connect(mapStateToProps)(App)
