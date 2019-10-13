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
                        to="/login"
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
                        to="/login"
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
                        to="/my_drinks"
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
                    style={{ fontFamily: 'Faster One, cursive', color: "orange", fontSize: '55px', padding: '20px 35px'}}
                >  
                    S
                    <div style={{ color: 'teal', fontSize: '55px' }}>
                        T
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