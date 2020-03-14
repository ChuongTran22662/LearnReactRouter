import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassWord: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { txtUserName, txtPassWord } = this.state;
        if (txtUserName === "admin" && txtPassWord === "admin") {
            localStorage.setItem('user', JSON.stringify({
                username: txtUserName,
                password: txtPassWord
            }))
        }

    }

    render() {

        var { txtUserName, txtPassWord } = this.state;
        var { location } = this.props;
        var loggedInUser = localStorage.getItem('user');
        if (loggedInUser !== null) {
            return (
                <Redirect to={{
                    pathname: '/Product',
                    state: {
                        from: location,

                    }
                }} />
            )
        }

        return (

            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form action="" method="POST" role="form" onSubmit={this.onSubmit}>
                        <legend>Form Login</legend>

                        <div class="form-group">
                            <label for="">userName</label>
                            <input
                                type="text"
                                class="form-control"
                                name="txtUserName"
                                value={txtUserName}
                                onChange={this.onChange}
                            />
                        </div>

                        <div class="form-group">
                            <label for="">passWord</label>
                            <input
                                type="password"
                                class="form-control"
                                name="txtPassWord"
                                value={txtPassWord}
                                onChange={this.onChange}
                            />
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
