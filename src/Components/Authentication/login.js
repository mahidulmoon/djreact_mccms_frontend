import React, { Component } from 'react';
import { Form,Container,Button,Col } from 'react-bootstrap';
import axios from 'axios';
class Login extends Component {
    state = {
        login:{
            username:'',password:''
        },
    }
    inputchange = e =>{
        const cred = this.state.login;
        cred[ e.target.name ] = e.target.value;
        this.setState({ login: cred });
    }
    login = e =>{
        e.preventDefault();
        if(this.state.login.username ==='' || this.state.login.password ===''){
            alert("Input valid username and password");
        }else{
            //console.log(this.state.login);
            axios.post('http://127.0.0.1:8000/api/user/login',this.state.login).then(res => {localStorage.setItem('userid',res.data.id);localStorage.setItem('token',res.data.token);alert("Login Successfull");window.location.reload()}).catch(err => alert("Error",err))
        }
    }
    render() {
        
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <Form>
                    <Form.Row>
                    <Form.Group>
                        <Form.Label><img alt="policelogo" className="loginpiclogo" src="./loginlogo.png" /></Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.login.username} onChange={this.inputchange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.login.password} onChange={this.inputchange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login} >
                            Submit
                        </Button>
                    </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Login;