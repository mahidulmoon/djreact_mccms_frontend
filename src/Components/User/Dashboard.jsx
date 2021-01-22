import React, { Component } from 'react';
import ProfileBasic from "./ProfileBasic";
class UserDashboard extends Component {
    render() {
        return (
            <div className="row">
                <ProfileBasic />
            </div>
        );
    }
}

export default UserDashboard;