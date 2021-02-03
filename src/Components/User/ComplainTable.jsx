import React, { Component } from 'react';
import {FcBullish} from "react-icons/fc";
import axios from "axios";
class ComplainTable extends Component {
    state = {
        ownComplains:[],
    }
    componentWillMount(){
        axios.get('http://127.0.0.1:8000/api/complain/postcomplain/',{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).then(res => this.setState({ownComplains:res.data})).catch(err => {console.log(err);alert("could not fetch own complain")});
    }
    render() {
        return (
            <div className="col-lg-8">
                <br />
                <br/>
                <div className="card-header">
                   <h4> <FcBullish /> Already Complained by You </h4>
                </div>
                <div className="card-body"></div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Complain ID</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Status</th>
                        <th scope="col">Post time</th>
                        <th scope="col">Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ownComplains.map(complain =>
                            <tr>
                                <th scope="row">{complain.id}</th>
                                <td>{complain.complain_subject}</td>
                                <td style={{ color: 'red'}}>{complain.status}</td>
                                <td>{complain.created_at}</td>
                                <td>{complain.avg_rating}</td>
                            </tr>    
                        )}
                    </tbody>
                    </table>
            </div>
        );
    }
}

export default ComplainTable;