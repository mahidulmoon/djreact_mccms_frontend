import React, { Component } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Body from "./Body";
import Home from "./Home/home";
import Login from "./Login/login";
class MainBody extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Body>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login} />
                        </Switch>
                    </Router>
                </Body>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default MainBody;