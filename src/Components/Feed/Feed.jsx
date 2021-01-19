import React, { Component } from 'react';
import SingleFeed from "./SingleFeed";
import {Container} from "react-bootstrap";
class Feed extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <Container>
                    <SingleFeed />
                    <SingleFeed />
                </Container>
            </div>
        );
    }
}

export default Feed;