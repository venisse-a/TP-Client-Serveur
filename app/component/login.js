import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_login: false,
            username: "",
            password: ""
        };
        this.onLogin = this.onLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    onLogin() {
        this.setState({is_login: true});
    }1


    handleChange(event) {
        this.state[event.target.id] = event.target.value;
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="medium-6 medium-centered large-4 large-centered columns">

                        {/*<form>*/}
                        <div className="row column log-in-form">
                            <label>Username
                                <input id="username" type="text" placeholder="Username" onChange={this.handleChange}/>
                            </label>
                            <label>Password
                                <input id="password" type="text" placeholder="Password" onChange={this.handleChange}/>
                            </label>
                            <p><button className="button expanded" onClick={this.onLogin}>Log In</button></p>
                            <p><button className="button expanded" onClick={this.onLogin()}>Register</button></p>
                        </div>
                        {/*</form>*/}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.user.username,
    userId: state.user.userId
});

const mapDispatchToProps = dispatch => ({
    onUserLoggedIn : (user) => {
        dispatch({
            type: "LOGIN",
            user
        })
    },
});

export default Login;