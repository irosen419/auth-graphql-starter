import React, { Component } from 'react'

class AuthForm extends Component {

    constructor(props) {
        super(props);

        this.state = { email: "", password: "" }
    }


    submitHandler(e) {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        const { errors } = this.props.errors
        return (
            <div className="row">
                <form className="col s4" onSubmit={e => this.submitHandler(e)}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm