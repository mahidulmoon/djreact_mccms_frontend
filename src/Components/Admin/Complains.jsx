import React, { Component } from 'react';
import {FcAddDatabase} from "react-icons/fc";
import axios from "axios";
class Complains extends Component {
    state = {
        complains:[],
        next:'',
        previous:'',
        count: 0,
        token: localStorage.getItem('token')
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/complain/complains/').then(res => {this.setState({complains: res.data.results,next:res.data.next,previous:res.data.previous,count:res.data.count})}).catch(err => {console.log(err);alert("error to fetch complain")});

    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    approveButton(id){
        axios.put(`http://127.0.0.1:8000/api/complain/updatestatus/${id}`,{status:"approved"},{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res =>{this.componentDidMount(); console.log(res.data)}).catch(err=>console.log('can not approve complain'));
    }
    solveButton(id){
        axios.put(`http://127.0.0.1:8000/api/complain/updatestatus/${id}`,{status:"solved"},{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res =>{this.componentDidMount(); console.log(res.data)}).catch(err=>console.log('can not solved complain'));
    }
    render() {
        return (
            <div>
                <div className="container" id="activities">
                    <div className="row">
                        <div className="col-12">
                        <div className="tm-parallax">
                            <header className="tm-parallax-header">
                            <h2 className="">Complains</h2>
                            </header>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.complains.map(complain =>
                        <div className="col-lg-6">
                            <div className="tm-activity-block">
                                <div className="tm-activity-img-container">
                                    <img src={complain.image_field} height="60" width="160" alt="logo" className="tm-activity-img" />
                                    <br/>
                                    <p className="text-danger bg-light"> {complain.status}</p>
                                    <p>{complain.created_at.slice(11,19)} <br/>{complain.created_at.slice(0,10)}</p>
                                    <div className="row">
                                        <button onClick={() => this.approveButton(complain.id)} className="col-lg-6 btn-outline-primary">approve</button>
                                        <button onClick={() => this.solveButton(complain.id)} className="col-lg-6 btn-outline-success">solved</button>
                                    </div>
                                
                                </div>
                                <div className="tm-activity-block-text">
                                <h3 className="tm-text-blue">{complain.complain_subject}</h3>
                                <p>
                                    {complain.complain}
                                </p>
                                
                                <code className="col-lg-6"><FcAddDatabase/> ({complain.avg_rating}) Agree</code>
                                    
                                
                                </div>
                                
                            </div>   
                        </div>
                        )}
                        
                    </div>
                    </div>
                    <nav className="container" aria-label="Page navigation example">
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
        );
    }
}

export default Complains;