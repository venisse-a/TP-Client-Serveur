import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="top-bar" id="realEstateMenu">
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><a href="/login">Log In</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;