import React, { Component } from 'react';
import ProfileBasic from "./ProfileBasic";
import ComplainTable from "./ComplainTable";
class UserDashboard extends Component {
    render() {
        return (
            <div className="row">
                <ProfileBasic />
                <ComplainTable />
            </div>
        );
    }
}

export default UserDashboard;