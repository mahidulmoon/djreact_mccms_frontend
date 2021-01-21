import React, { Component } from 'react';
import {FcAddDatabase} from "react-icons/fc";
class Complains extends Component {
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
                        <div className="col-lg-6">
                        <div className="tm-activity-block">
                            <div className="tm-activity-img-container">
                            <img src="favicon.ico" alt="logo" className="tm-activity-img" />
                            </div>
                            <div className="tm-activity-block-text">
                            <h3 className="tm-text-blue">Lorem ipsum dolor sit amet</h3>
                            <p>
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Sed eu turpis nec sem lacinia
                                condimentum et a orci.
                            </p>
                            <code><FcAddDatabase/> Mark as Agree</code>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <nav className="col-lg-6" aria-label="Page navigation example">
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
            </div>
        );
    }
}

export default Complains;