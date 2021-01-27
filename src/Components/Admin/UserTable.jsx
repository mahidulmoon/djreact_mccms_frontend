import React, { Component } from 'react';
import {FaUserPlus} from "react-icons/fa";
import axios from 'axios';
class UserTable extends Component {
    state = {
        userlist : [],
        next:'',
        previous:'',
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/user/registeruser/').then(res => this.setState({userlist:res.data.results,next:res.data.next}))
    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({userlist:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({userlist:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    render() {
        return (
            <div className="col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                    <FaUserPlus /> User Table</div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Usename</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        {/* <tfoot>
                            <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            {this.state.userlist.map(user =>
                               {if (user.user.is_staff===false && user.user.is_superuser===false){
                                   return (
                                    <tr>
                                        <td>{user.user.first_name} {user.user.last_name}</td>
                                        <td>{user.user.username}</td>
                                        <td>{user.user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>$320,800</td>
                                   </tr> 
                                   )
                               }}
                                
                            )}
                            
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item ">
                                <a className="page-link" tabindex="-1" onClick={this.previouspage}>Previous</a>
                                </li>
                                
                                <li className="page-item">
                                <a className="page-link" onClick={this.nextpage}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>
        );
    }
}

export default UserTable;