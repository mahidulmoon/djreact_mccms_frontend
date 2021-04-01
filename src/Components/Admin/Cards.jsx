import React, { Component } from 'react';
import {AiOutlineMessage,AiOutlineSortAscending} from "react-icons/ai";
import {FaTicketAlt} from "react-icons/fa";
class Dashboard extends Component {
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
                        <div className="mr-5">26 New Messages!</div>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineSortAscending />
                        </div>
                        <div className="mr-5">11 New Tasks!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fa fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">123 New Orders!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <FaTicketAlt />
                        </div>
                        <div className="mr-5">13 New Tickets!</div>
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
                        <div className="mr-5">26 New Messages!</div>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-secondary o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <AiOutlineSortAscending />
                        </div>
                        <div className="mr-5">11 New Tasks!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-black bg-light o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fa fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">123 New Orders!</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-dark o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <FaTicketAlt />
                        </div>
                        <div className="mr-5">13 New Tickets!</div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;