import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { FETCH_USER } from "../actions/types"
import { headers, handleErrors } from "../actions/index"
import URL_ROOT from '../actions/URL'
import { Link } from 'react-router-dom'
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'

class Login extends Component {
    state = {
        username : "",
        password : "",
        errors: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state
        if(this.isFormValid(this.state)) {
            this.setState({ errors: [] })
            fetch(`${URL_ROOT}auth`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ username, password })
            }).then(handleErrors)
              .then(resp => resp.json())
              .then(resp => {
                  localStorage.setItem('token', resp.id)
                  window.location.href = '/';
                  this.props.dispatch({type: FETCH_USER, payload: resp})
              })
              .catch(err => {
                  this.setState({
                      errors: this.state.errors.concat(err),
                  })
              })
        }
    }

    isFormValid = ({ username, password }) => username && password;

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

    handleInputError = (errors, inputName) => {
        return errors.some(error =>
            error.message.toLowerCase().includes(inputName)) ?
            'error'
            :
            " "
    }

    render() {
        const { username, password, errors } = this.state
        return (
            <Grid textAlign = "center" verticalAlign="top">
                <Grid.Column style={{maxWidth: 450 }}>
                    <Header as="h2" icon color="blue" textAlign="center">
                        <Icon name="glass martini" color="brown" />
                        Login to Shak-r
                    </Header>
                    {errors.length > 0 && (
                        <Message error>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid name="user"
                                icon="user"
                                iconPosition="left"
                                placeholder="Username"
                                onChange={this.handleChange}
                                value={username}
                                className={this.handleInputError(errors, 'username' )}
                                type="username" />
                            <Form.Input
                                fluid name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={password}
                                className={this.handleInputError(errors, 'password')}
                                type="password" />
                            <Button> Submit </Button>
                        </Segment>
                    </Form>
                    <Message>Don't have an account? <Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect()(Login);
