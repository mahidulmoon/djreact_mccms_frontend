import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class ComplainForm extends Component {
    state = {
        userinfo:[],
    }
    componentWillMount(){
        axios.get(`http://127.0.0.1:8000/api/user/registeruser/${localStorage.getItem('userid')}/`).then(res => this.setState({userinfo:res.data})).catch(err => {console.log(err);alert("error to fetch userinfo")})

    }
    render() {
        if(!localStorage.getItem('token')){
            return <Redirect path="/login" />
        }
        return (
            <div>
                <div class="container">
                    <br/>
                    <br/>
                    <div class="complainPage">
                        <h2> Complain Page </h2>
                        {this.state.userinfo.user && 
                            <form method="post" enctype="multipart/form-data">
                            
                            <label for="name">Your Name (Username)</label>
                            <input type="text" name="name" id="name" required="required" autocomplete="off"  value={this.state.userinfo.user.username} disabled/>
                            <label for="email">Your Email </label>
                            <input type="email" name="email" id="email"  autocomplete="off"   value={this.state.userinfo.user.email}  disabled/>
                            <label for="phone-number">Your Phone Number </label>
                            <input type="text" name="phone-number" id="phone-number" required="required" autocomplete="off"   value={this.state.userinfo.phone} disabled/>
                            <label for="area">Your Area Name or Address </label>
                            <input type="text" name="area" id="area" required="required" autocomplete="off"   placeholder="Complaint area name"/>
                            <label for="pincode">Area Postal Code </label>
                            <input type="number" required="required" id="pincode"  name="pincode" autocomplete="off"  placeholder="Enter area postal code"/>
                            <label for="holdingno">Your Holding Number </label>
                            <input type="number" required="required" id="holdingno"  name="holdingno" autocomplete="off"  placeholder="Enter your holding number "/>
                            <label for="comoplainsubject">Complain Subject </label>
                            <input type="text" required="required" id="comoplainsubject"  name="comoplainsubject" autocomplete="off"  placeholder="Enter your complain subject here "/>
                            <label for="complain">Your Complain Here </label>
                            <textarea  required="required" id="complain" name="complainmsg" autocomplete="off" placeholder="Enter your complain here"> </textarea>
                            <label for="file">Upload File/Image </label>
                            <input type="file"  name="photo" multiple />
                            
                            
                            <input type="submit" value="Submit" required />
                            
                        </form>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default ComplainForm;