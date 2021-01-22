import React, { Component } from 'react';
import ProfileBasic from "./ProfileBasic";
import ComplainTable from "./ComplainTable";
import NoticeBox from "./NoticeBox";
class UserDashboard extends Component {
    render() {
        return (
            
            <div className="customcontainer">
                <div className="row">
                    <div className="col-lg-4">
                        <ProfileBasic />
                        <NoticeBox />
                    </div>
                    <ComplainTable />
                </div>
            </div>
            
        );
    }
}

export default UserDashboard;