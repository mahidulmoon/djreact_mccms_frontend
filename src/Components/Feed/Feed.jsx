import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import {FcList,FcAddDatabase} from "react-icons/fc";
class Feed extends Component {
    state = {
        complains:[],
        next:'',
        previous:'',
        count: 0,
    }
    componentWillMount(){
        axios.get('http://127.0.0.1:8000/api/complain/complains/').then(res => {this.setState({complains: res.data.results,next:res.data.next,previous:res.data.previous,count:res.data.count})}).catch(err => {console.log(err);alert("error to fetch complain")});

    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <Container>
                    {this.state.complains.map(complain =>
                        <div >
                            <div >
                                <div className="span8">
                                    <div className="widget-box">
                                    <div className="widget-title"> <span className="icon"> <i className="icon-list"></i> </span>
                                        <h3 className="bg-light"><FcList /> <i>{complain.complain_subject}</i> </h3>
                                        <br/>
                                        <div className="row">
                                            <h6 className="col-lg-8"><button>Complained By:</button> {complain.complainer_name}</h6>
                                            <h6 className="col-lg-4 text-danger"><button>Status: </button> {complain.status}</h6>
                                        </div>
                                        <div className="row">
                                            <h6 className="col-lg-8"><button>Place:</button> {complain.complaint_address}</h6>
                                            <h6 className="col-lg-4"><button>Date:</button> {complain.created_at}</h6>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="widget-content text-info"> ** {complain.complain} </div>
                                    <br />
                                    <div>
                                        <img className="img-fluid" src={complain.image_field} alt="image" />
                                    </div>
                                    <center>
                                        <video width="500" height="540" controls>
                                            <source src={complain.image_field} type="video/mp4"/>
                                            <source src={complain.image_field} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video> 
                                    </center>
                                    <br/>
                                    <button ><code><FcAddDatabase/>({complain.avg_rating}) Mark as Agree</code></button>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </div>   
                    )}
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
                </Container>
            </div>
        );
    }
}

export default Feed;