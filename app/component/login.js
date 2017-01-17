import React from "react";
import Request from 'react-http-request';
class Login extends React.Component {


    render() {
        return (
            <div>
                <form action ="http://localhost:3000/login"method="post">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username"/>
                    </div>
                    < div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <input type="submit" name="login"/>
                </form>
            </div>

        );
    }
}


export default Login;