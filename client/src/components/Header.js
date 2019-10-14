import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return [
                    <Link
                        key="1"
                        className="item"
                        to="/register"
                    >
                        Sign Up
                    </Link>,
                    <Link
                        key="2"
                        className="item"
                        to="/signin"
                    >
                        Login
                    </Link>
                ]
            case false:
                return [
                    <Link
                        key="1"
                        className="item"
                        to="/register"
                    >
                        Sign Up
                    </Link>,
                    <Link 
                        key="2"
                        className="item"
                        to="/signin"
                    >
                        Login
                    </Link>
                ]
            default:
                return [
                    <Link
                        key="1"
                        to="/drinks"
                        className="item"
                    >
                        Find Drinks
                    </Link>,
                    <Link
                        key="3"
                        to="/mydrinks"
                        className="item"
                    >
                        My Drinks
                    </Link>,
                    <Link
                        key="4"
                        onClick={() => this.props.logout()}
                        to="/"
                        className="item"
                    >
                        Log Out
                    </Link>
                    
                ]
        }
    }

    render() {
        return (
            <div className="ui teal inverted menu" > 
                <Link 
                    to={'/'}
                    className="ui header item large"
                    style={{ fontFamily: 'Faster One, cursive', color: "green", fontSize: '55px', padding: '20px 35px'}}
                >  
                    Shak-r
                    <div style={{ color: 'blue', fontSize: '55px' }}>
                    Cocktail App
                    </div>
                </Link>
                <div className="right item" style={{fontSize: '18px'}}>
                    {this.renderContent()}
                </div>
          </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps, actions)(Header);