import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="top-bar" id="realEstateMenu">
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><a href="/vehicles">My Vehicles</a></li>
                            <li><a href="/trips">My Trips</a></li>
                            <li><a href="/">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;