import React, { Component } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Body from "./Body";
import Home from "./Home/home";
import Login from "./Authentication/login";
import Registration from "./Authentication/Registration";
import Feed from "./Feed/Feed";
import Dashboard from "./Admin/Dashboard";
import UserDashboard from "./User/Dashboard";
import ComplainForm from "./ComplainForm/Form";
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
                            <Route path="/feeds" exact component={Feed} />
                            <Route path="/admindashboard" exact component={Dashboard} />
                            <Route path="/userdashboard" exact component={UserDashboard}/>
                            <Route path="/complainform" exact component={ComplainForm}/>
                        </Switch>
                    </Router>
                </Body>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default MainBody;