import React, { Component } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Body from "./Body";
import Home from "./Home/home";
import Login from "./Authentication/login";
import Registration from "./Authentication/Registration";
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
                            <Route path="/registration" exact component={Registration} />
                        </Switch>
                    </Router>
                </Body>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default MainBody;