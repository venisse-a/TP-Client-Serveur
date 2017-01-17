import React from "react";
import Request from 'react-http-request';

class Register extends React.Component {

    render() {
        return (
            <div>
                <form action ="http://localhost:3000/login"method="post">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" name="username"/>
                    </div>
                    < div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"/>
                    </div>
                    <input type="submit" name="register"/>
                </form>
            </div>

        );
    }
}

export default Register;
