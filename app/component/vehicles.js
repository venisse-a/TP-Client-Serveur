import React from 'react';

class Vehicles extends React.Component {
    render() {
        return (
            <div>
                <form action ="http://localhost:3000/vehicle"method="post">
                    <div className="form-group">
                        <label>Car's Reference</label>
                        <input type="text" className="form-control" name="reference"/>
                    </div>
                    <div className="form-group">
                        <label>Trip's Start</label>
                        <input type="text" className="form-control" name="start"/>
                    </div>
                    < div className="form-group">
                        <label>Trip's End</label>
                        <input type="password" className="form-control" name="end"/>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="text" className="form-control" name="date"/>
                    </div>
                    <input type="submit" name="save"/>
                </form>
            </div>

        );
    }
}

export default Vehicles;