import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <>
            <div className="container" id="home">
            <div className="col-12 text-center">
                <div className="tm-page-header">
                <i ><img src="logo.jpg" alt="logo" /></i>
                <h1 className="d-inline-block text-uppercase">Municipal Corporation Complain Management System</h1>
                </div>
            </div>
            </div>
            <div className="tm-nav-section">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#tmMainNav"
                            aria-controls="tmMainNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="tmMainNav">
                            <ul className="navbar-nav mx-auto tm-navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/"
                                >Home <span className="sr-only">(current)</span></a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admindashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/feeds">Complains Feed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#activities">Activities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registration">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Sign In</a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default NavBar;