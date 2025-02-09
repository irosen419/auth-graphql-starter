import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'
import Logout from '../mutations/Logout'

class Header extends Component {

    handleLogout() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }

    renderButtons() {
        const { loading, currentUser } = this.props.data
        if (loading) {
            return <div />;
        }

        if (currentUser) {
            return (
                <li><a onClick={this.handleLogout.bind(this)}>Logout</a></li>
            )
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">Home</Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )


    }
}

export default graphql(Logout)(graphql(query)(Header))