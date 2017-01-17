import React from "react";
import Request from 'react-http-request';

class Profile extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <p> You successfully log in!</p>
                </div>
                <div>
                    <li><a href="/vehicle">Add A New Car</a></li>
                </div>
            </div>

        );

    }
}

export default Profile;