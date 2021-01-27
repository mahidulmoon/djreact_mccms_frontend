import React, { Component } from 'react';
import { Form,Col,Button,Container } from 'react-bootstrap';
import axios from 'axios';
class Registration extends Component {
    state = {
        register: {
            user:{
                username:'',password:'',email:'',first_name: '', last_name: '',is_staff: false,is_supseruser: false
            },
            phone:'',
            address:'',
        },
        isadmin:'true',
    }
    inputchangeUser = e =>{
        const cred = this.state.register.user;
        cred[ e.target.name ] = e.target.value;
        this.setState({ register:{user: cred}});
    }
    inputchange = e =>{
        const cred = this.state.register;
        cred[ e.target.name ] = e.target.value;
        this.setState({ register: cred});
    }
    checkboxinputAuthority = e =>{
        if(e.target.checked){
            //this.state.register.is_staff = true;
            this.setState(prevState => ({register:{user:{...prevState.register.user,is_staff:true}}}));
        }else{
            this.setState(prevState => ({register:{user:{...prevState.register.user,is_staff:false}}}));
        }
        
    }
    checkboxinputAdmin = e =>{
        if(e.target.checked){
            //this.state.register.is_staff = true;
            this.setState(prevState => ({register:{user:{...prevState.register.user,is_superuser:true}}}));
        }else{
            this.setState(prevState => ({register:{user:{...prevState.register.user,is_superuser:true}}}));
        }
        
    }
    componentDidMount(){
        if(localStorage.getItem('admin')==='true'){
            this.setState({isadmin:'true'});
        }else{
            this.setState({isadmin:'false'});
        }
    }
    onsubmit = e =>{
        e.preventDefault();
        if(this.state.register.phone ==='' || this.state.register.user.email ==='' ){
            alert("Please check your Inputs");
        }else{
            //console.log(this.state.register);
            axios.post('http://127.0.0.1:8000/api/user/registeruser/',this.state.register).then(resp => {console.log(resp.data);alert("Registration successful")}).catch(err=>{console.log(err);alert("Registration successful")});
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
                        <Form.Group >
                            <Form.Label><img alt="policelogo" className="loginpiclogo" src="./registerlogo.png" /></Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="email" placeholder="User Name" name="username" value={this.state.register.username} onChange={this.inputchangeUser} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.register.password} onChange={this.inputchangeUser} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" name="email" value={this.state.register.email} onChange={this.inputchangeUser} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.register.first_name} onChange={this.inputchangeUser} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.register.last_name} onChange={this.inputchangeUser} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Col><Form.Check aria-label="is_staff" onClick={this.checkboxinputAuthority} value={this.state.register.user.is_staff} />
                                <Form.Label>Authority</Form.Label></Col>
                                <Col><Form.Check aria-label="is_supseruser" onClick={this.checkboxinputAdmin} value={this.state.register.user.is_supseruser}  />
                                <Form.Label>Admin</Form.Label></Col>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="(+88)01" name="phone" value={this.state.register.phone} onChange={this.inputchange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" name="address" value={this.state.register.address} onChange={this.inputchange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary" type="submit" onClick={this.onsubmit}>
                                    Submit
                                </Button>
                            </Form.Row>
                        </Form.Group>
                        
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Registration;