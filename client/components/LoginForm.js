import React, { Component } from 'react'
import AuthForm from './AuthForm'

import LoginMutation from '../mutations/Login'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

import { hashHistory } from 'react-router'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = { errors: [] }
    }

    componentWillUpdate(nextProps) {
        // this.props = old props
        // nextProps = new, incoming props

        if (!this.props.data.user && nextProps.data.currentUser) {
            // redirect to dashboard!
            hashHistory.push('/dashboard')
        }
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

export default graphql(query)(graphql(LoginMutation)(LoginForm))