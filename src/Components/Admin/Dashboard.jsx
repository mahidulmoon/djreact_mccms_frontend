import React, { Component } from 'react';
import Cards from "./Cards";
import SideNotification from "./SideNotification";
import UserTable from "./UserTable";
import PreviligedUser from "./PreviligedUser";
import Complains from "./Complains";
import NoticeForm from "./NoticeForm";
class Dashboard extends Component {
    render() {
        return (
            <div className="customcontainer">
                <div className="row">
                    <Cards />
                    <SideNotification />
                </div>
                
                <div className="row">
                    <UserTable/>
                    <PreviligedUser />
                </div>
                <Complains />
                <NoticeForm />
            </div>
        );
    }
}

export default Dashboard;