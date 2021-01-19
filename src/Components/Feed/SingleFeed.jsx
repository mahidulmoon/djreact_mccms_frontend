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
                            <h4><FcList /> Two third width</h4>
                        </div>
                        <div className="widget-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                        <br />
                        <code><FcAddDatabase/> Mark as Agree</code>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default SingleFeed;