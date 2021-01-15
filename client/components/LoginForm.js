import React, { Component } from 'react'
import AuthForm from './AuthForm'

import mutation from '../mutations/Login'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = { errors: [] }
    }

    loginHandler({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({ errors })
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm submitHandler={this.loginHandler.bind(this)} errors={this.state.errors} />
            </div>

        )
    }
}

export default graphql(mutation)(LoginForm)