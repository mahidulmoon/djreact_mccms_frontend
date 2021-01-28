import React, { Component } from 'react';
import axios from 'axios';
class SideNotification extends Component {
    state = {
        notice:[],
        previous:'',
        next:'',
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/notice/notices/').then(resp => this.setState({notice:resp.data.results,next:resp.data.next})).catch(err=>console.log("cannot fetch notice",err))
        
    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({notice:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({notice:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    render() {
        return (
            <div className="col-lg-4">
                <br/>
                <br/>
                <br/>
                <div class="card mb-3">
                    <div class="card-header">
                    <i class="fa fa-bell-o"></i> Notices</div>
                    <div class="list-group list-group-flush small">
                    {this.state.notice.map(notice =>
                        <a class="list-group-item list-group-item-action" href="/">
                            <div class="media">
                            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="pic"/>
                            <div class="media-body">
                                <strong>{notice.subject}</strong> {notice.notice}
                                {/* <strong>David Miller Website</strong>. */}
                                <div class="text-muted smaller">{notice.created_at}</div>
                            </div>
                            </div>
                        </a>
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
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>
        );
    }
}

export default SideNotification;