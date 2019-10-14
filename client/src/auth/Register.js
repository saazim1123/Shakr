import React, { Component } from 'react'
import { FETCH_USER } from "../actions/types"
import { headers, handleErrors } from "../actions/index"
import URL_ROOT from '../actions/URL'
import { connect } from 'react-redux'
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends Component {
    state = {
        username: "",
        password: "",
        errors: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.isFormValid()) {
            this.setState({ errors: [] })
            const { username, password } = this.state
            const user = { username, password }
            console.log(user)
            fetch(`${URL_ROOT}users`, {
                method: 'POST',
                headers: headers,
                data: {},
                dataType: "JSON",
                body: JSON.stringify({ user })
            }).then(handleErrors)
              .then(resp => resp.json())
              .then(resp => {
                  localStorage.setItem('token', resp.id)
                  window.location.href ='/my-bar';
                  this.props.dispatch({type: FETCH_USER, payload: resp})
              })
              .catch(err => {
                  this.setState({
                      errors: this.state.errors.concat(err)
                  })
              })
        }
    }

    isFormValid = () => {
        let errors = []
        let error;

        if(this.isFormEmpty(this.state)) {
            error = { message: "Fill in all fields"}
            this.setState({errors: errors.concat(error)})
            return false
        } 
        return true;  
    }

    isFormEmpty = ({ username, password }) => {
        return !username.length || !password.length
    }

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

        return(
            <Grid textAlign = "center" verticalAlign="top">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="blue" textAlign="center">
                        <Icon name="martini glass" color="brown" />
                        Sign Up to Shak-r
                    </Header>
                    {errors.length > 0 && (
                        <Message error>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid name= "username"
                                icon="user"
                                iconPosition="left"
                                placeholder="username"
                                onChange={this.handleChange}
                                value={username}
                                className={this.handleInputError(errors,'username')}
                                type="text" />
                            <Form.Input
                                fluid name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={password}
                                className={this.handleInputError(errors, 'password')}
                                type="password" />
                            <Button color="green"> Submit </Button>
                        </Segment>
                    </Form>
                    <Message> Already Have an Account? <Link to="/signin">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect()(Register);