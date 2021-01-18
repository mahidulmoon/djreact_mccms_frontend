import React, { Component } from 'react';
import {Container} from "react-bootstrap";
class Body extends Component {
    render() {
        return (
            <div className={Container}>
                {this.props.children}
            </div>
        );
    }
}

export default Body;