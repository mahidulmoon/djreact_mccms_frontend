import React, { Component } from 'react';
import {FaUserSecret} from "react-icons/fa";
import {FcApproval,FcBookmark} from "react-icons/fc";
import axios from 'axios';
class PreviligedUser extends Component {
    state = {
        userlist : [],
        next:'',
        previous:'',
        searchvalue:'',
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/user/previligeduser/').then(res => this.setState({userlist:res.data.results,next:res.data.next}))
    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({userlist:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({userlist:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    searchResult = () =>{
        axios.get('http://127.0.0.1:8000/api/user/previligeduser/?search='+this.state.searchvalue).then(res => this.setState({userlist:res.data.results}))
    }
    render() {
        return (
            <div className="col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                    <FaUserSecret /> Previliged User Table</div>
                    <div className="col-md-4">
                            <label for="validationDefaultUsername" className="form-label"></label>
                            <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2" onClick={this.searchResult}>search</span>
                            <input type="text" className="form-control" placeholder="email or username" id="validationDefaultUsername" onChange={e => this.setState({searchvalue:e.target.value})}  aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Usename</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Super User</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {this.state.userlist.map(user =>
                               {while (user.is_staff===true || user.is_superuser===true){
                                   return (
                                    <tr>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.is_staff && <FcApproval/>}</td>
                                        <td>{user.is_superuser && <FcApproval/>} {!user.is_superuser && <FcBookmark/>}</td>
                                        <td>
                                        <button type="button" class="btn btn-danger">Manage</button></td>
                                   </tr> 
                                   )
                               }}
                                
                            )}
                            
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item ">
                                <button className="page-link" tabindex="-1" onClick={this.previouspage}>Previous</button>
                                </li>
                                
                                <li className="page-item">
                                <button className="page-link" onClick={this.nextpage}>Next</button>
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

export default PreviligedUser;