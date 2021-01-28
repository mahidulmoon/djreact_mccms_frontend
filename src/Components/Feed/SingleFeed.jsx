import React, { Component } from 'react';
import {FcList,FcAddDatabase} from "react-icons/fc";
class SingleFeed extends Component {
    render() {
        return (
            <div >
                <div >
                    <div className="span8">
                        <div className="widget-box">
                        <div className="widget-title"> <span className="icon"> <i className="icon-list"></i> </span>
                            <h3 className="bg-light"><FcList /> <i>{this.props.complain.complain_subject}</i> </h3>
                            <br/>
                            <h6><button>Complained By:</button> {this.props.complain.complainer_name}</h6>
                            <div className="row">
                                <h6 className="col-lg-6"><button>Place:</button> {this.props.complain.complaint_address}</h6>
                                <h6 className="col-lg-6"><button>Date:</button> {this.props.complain.created_at}</h6>
                            </div>
                        </div>
                        <div className="widget-content text-info"> ** {this.props.complain.complain} </div>
                        <br />
                        <div>
                            <img className="img-fluid" src={this.props.complain.image_field} alt="image" />
                        </div>
                        <br/>
                        <button ><code><FcAddDatabase/>({this.props.complain.avg_rating}) Mark as Agree</code></button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default SingleFeed;