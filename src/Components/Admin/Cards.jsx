import React, { Component } from 'react';
import {AiOutlineMessage,AiOutlineSortAscending} from "react-icons/ai";
import {FaTicketAlt} from "react-icons/fa";
import axios from "axios";
class Dashboard extends Component {
    state={
        result:[],
    }
    componentWillMount(){
        axios.get('http://127.0.0.1:8000/api/user/admindashshort').then(res => this.setState({result:res.data})).catch(err => console.log("error fetch cards api data"));
    }
    render() {
        return (
            <div className="col-lg-8">
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineMessage />
                        </div>
                        <div className="mr-5">{this.state.result.approve_complains} Approved Complains!</div>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineSortAscending />
                        </div>
                        <div className="mr-5">{this.state.result.pendin_complains} Pending Complains!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fa fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">{this.state.result.solved_complains} Solved Complains!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <FaTicketAlt />
                        </div>
                        <div className="mr-5">{this.state.result.complains} Complains!</div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-info o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineMessage />
                        </div>
                        <div className="mr-5">{this.state.result.notices} Notices!</div>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-secondary o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineSortAscending />
                        </div>
                        <div className="mr-5">{this.state.result.normal_user} Verified Users!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-black bg-light o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fa fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">{this.state.result.prev_user} Preveliged Users!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-dark o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <FaTicketAlt />
                        </div>
                        <div className="mr-5">{this.state.result.admin_user} Authorized Users!</div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;