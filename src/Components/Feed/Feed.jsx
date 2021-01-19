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