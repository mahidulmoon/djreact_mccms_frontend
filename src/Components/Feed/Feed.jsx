import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import {FcList,FcAddDatabase} from "react-icons/fc";
import SingleFeed from "./SingleFeed";
class Feed extends Component {
    state = {
        complains:[],
        next:'',
        previous:'',
        count: 0,
        token: localStorage.getItem('token'),
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
                        <SingleFeed complain={complain} />  
                    )}
                    <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
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