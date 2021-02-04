import React, { Component } from 'react';
import Cards from "./Cards";
import SideNotification from "./SideNotification";
import UserTable from "./UserTable";
import PreviligedUser from "./PreviligedUser";
import Complains from "./Complains";
import NoticeForm from "./NoticeForm";
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Dashboard extends Component {
    state={
        isAdmin: "",
    }
    componentWillMount(){
        if(localStorage.getItem('userid')){
            axios.get(`http://127.0.0.1:8000/api/user/previligeduser/${localStorage.getItem('userid')}/`).then(resp => this.setState({isAdmin:resp.data.is_staff})).catch(err=>this.setState({isAdmin:"false"}))
        }
    }
    render() {
        if(this.state.isAdmin === "false"){
            return <Redirect path="/userdashboard" />
        }
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