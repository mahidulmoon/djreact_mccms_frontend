import React, { Component } from 'react';
import { Form,Col,Button,Container,Modal } from 'react-bootstrap';
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
        isAdmin: false,
        otp_verify: false,
        otp: '',
        new_otp: 0
    }
    componentWillMount(){
        if(localStorage.getItem('userid')){
            axios.get(`http://127.0.0.1:8000/api/user/previligeduser/${localStorage.getItem('userid')}/`).then(resp => this.setState({isAdmin:resp.data.is_staff})).catch(err=>this.setState({isAdmin:false}))
        }
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
    onsubmit = e =>{
        e.preventDefault();
        if(this.state.register.phone ==='' || this.state.register.user.email ==='' || this.state.register.user.password.length < 8 ){
            alert("Please check your Inputs");
        }else{
            //console.log(this.state.register);
            this.setState({otp_verify:true});
            axios.post('http://127.0.0.1:8000/api/user/otp',this.state.register).then(res => 
                {
                    //console.log(res.data);
                    this.setState({otp_verify:true,otp:res.data.otp});
                }
            ).catch(err => alert("Failed to register this number"))
        }
    }
    otpSubmit = () => {
        
        if(parseInt(this.state.otp) == parseInt(this.state.new_otp)){
            //console.log("otp match")
            axios.post('http://127.0.0.1:8000/api/user/registeruser/',this.state.register).then(resp => {
                //console.log(resp.data);
                this.setState({otp_verify:false})
                alert("Registration successful");
                window.location.reload(true)}).catch(err=>{console.log(err);alert("Registration successful")});

        }else{
            alert("You have send wrong otp")
        }
    }

    render() {
    
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <Modal show={this.state.otp_verify} onHide={() => this.setState({otp_verify:false})}>
                    <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>OTP Verification</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>An One Time Password has been sent to Your Number Please Submit it.</p>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            
                                            <Form.Control type="password" placeholder="OTP" name="otp" value={this.state.register.new_otp} onChange={e => this.setState({new_otp: e.target.value})} />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.setState({otp_verify:false})}>Close</Button>
                                {this.state.new_otp > 0 && <Button variant="primary" onClick={this.otpSubmit}>Save changes</Button>}
                            </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
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

                            {this.state.isAdmin && <Form.Row>
                                <Col><Form.Check aria-label="is_staff" onClick={this.checkboxinputAuthority} value={this.state.register.user.is_staff} />
                                <Form.Label>Authority</Form.Label></Col>
                                <Col><Form.Check aria-label="is_supseruser" onClick={this.checkboxinputAdmin} value={this.state.register.user.is_supseruser}  />
                                <Form.Label>Admin</Form.Label></Col>
                            </Form.Row>}
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