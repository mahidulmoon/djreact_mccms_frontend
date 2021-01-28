import React, { Component } from 'react';
import SingleFeed from "./SingleFeed";
import {Container} from "react-bootstrap";
import axios from "axios";
class Feed extends Component {
    state = {
        complains:[],
        next:'',
        previous:'',
        count: 0,
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/complain/complains/').then(res => {this.setState({complains: res.data.results,next:res.data.next,previous:res.data.previous,count:res.data.count})}).catch(err => {console.log(err);alert("error to fetch complain")});

    }
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <Container>
                    {this.state.complains.map(complain =>
                        <SingleFeed complain={complain}/>    
                    )}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                            <a className="page-link" href="/feeds" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/feeds">1</a></li>
                            <li className="page-item"><a className="page-link" href="/feeds">2</a></li>
                            <li className="page-item"><a className="page-link" href="/feeds">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="/feeds">Next</a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </div>
        );
    }
}

export default Feed;