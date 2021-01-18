import React, { Component } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
class MainBody extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default MainBody;