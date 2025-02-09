import React, { Component } from 'react'
import AuthForm from './AuthForm'

import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'
import SignupMutation from '../mutations/Signup'

import { hashHistory } from 'react-router'

class SignupForm extends Component {

    constructor(props) {
        super(props)

        this.state = { errors: [] }
    }

    componentWillUpdate(nextProps) {
        // this.props = old props
        // nextProps = new, incoming props

        if (!this.props.data.currentUser && nextProps.data.currentUser) {
            // redirect to dashboard!
            hashHistory.push('/dashboard')
        }
    }

    signupHandler({ email, password }) {
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
                <h3>Signup</h3>
                <AuthForm submitHandler={this.signupHandler.bind(this)} errors={this.state.errors} />
            </div>
        )
    }
}

export default graphql(query)(graphql(SignupMutation)(SignupForm))