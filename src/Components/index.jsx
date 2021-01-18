import React, { Component } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Body from "./Body";
import Home from "./Home/home";
class MainBody extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Body>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </Router>
                </Body>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default MainBody;