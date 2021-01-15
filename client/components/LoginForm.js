import React, { Component } from 'react'
import AuthForm from './AuthForm'

import mutation from '../mutations/Login'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class LoginForm extends Component {

    loginHandler({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm submitHandler={this.loginHandler.bind(this)} />
            </div>

        )
    }
}

export default graphql(mutation)(LoginForm)