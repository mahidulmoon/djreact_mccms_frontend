import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class ComplainForm extends Component {
    state = {
        userinfo:[],
        complain:{
            complainer_name:'',complainer_email:'',complainer_phone_number:'',complaint_address:'',complaint_postal_code:'',complain_subject:'',complain:'',image_field:null
        },
        token:[],
    }
    componentWillMount(){
        axios.get(`http://127.0.0.1:8000/api/user/registeruser/${localStorage.getItem('userid')}/`).then(res => this.setState({userinfo:res.data,token:localStorage.getItem('token'),complain:{complainer_name:res.data.user.username,complainer_email:res.data.user.email,complainer_phone_number:res.data.phone}})).catch(err => {console.log(err);alert("error to fetch userinfo")})
    }

    inputChange = e =>{
        const cred = this.state.complain;
        cred[e.target.name] = e.target.value;
        this.setState({complain:cred});
    }
    fileuploadchange=e=>{
        this.state.complain.image_field = e.target.files[0];
    }
    submitbutton=(e)=>{
        e.preventDefault();
        //console.log(this.state.complain);
        if(this.state.complain.image_field){
            const uploadFormData = new FormData();
            uploadFormData.append('complainer_name',this.state.complain.complainer_name);
            uploadFormData.append('complainer_email',this.state.complain.complainer_email);
            uploadFormData.append('complainer_phone_number',this.state.complain.complainer_phone_number);
            uploadFormData.append('complaint_address',this.state.complain.complaint_address);
            uploadFormData.append('complaint_postal_code',this.state.complain.complaint_postal_code);
            uploadFormData.append('complain_subject',this.state.complain.complain_subject);
            uploadFormData.append('complain',this.state.complain.complain);
            uploadFormData.append('image_field',this.state.complain.image_field,this.state.complain.image_field.name);
        //console.log(uploadFormData);
            axios.post('http://127.0.0.1:8000/api/complain/postcomplain/',uploadFormData,{
                headers: {
                  Authorization: `Token ${this.state.token}`
                }
              }).then(res => alert("Complain uploaded successful",res)).catch(err => {console.log(err);alert("Cannot post the complain")});
        }else{
            alert("You forgot to attach file");
        }
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
                            <form enctype="multipart/form-data">
                            
                            <label for="name">Your Name (Username)</label>
                            <input type="text" name="complainer_name" id="name" required="required" autocomplete="off"  value={this.state.userinfo.user.username} disabled/>
                            <label for="email">Your Email </label>
                            <input type="email" name="complainer_email" id="email"  autocomplete="off" value={this.state.userinfo.user.email}  disabled/>
                            <label for="phone-number">Your Phone Number </label>
                            <input type="text" name="complainer_phone_number" id="phone-number"  required="required" autocomplete="off"   value={this.state.userinfo.phone} disabled/>
                            <label for="area">Your Area Name or Address </label>
                            <input type="text" name="complaint_address" id="area" onChange={this.inputChange} required="required" autocomplete="off"   placeholder="Complaint area name"/>
                            <label for="pincode">Area Postal Code </label>
                            <input type="number" required="required" id="pincode" onChange={this.inputChange}  name="complaint_postal_code" autocomplete="off"  placeholder="Enter area postal code"/>
                            <label for="comoplainsubject">Complain Subject </label>
                            <input type="text" required="required" id="comoplain_subject" onChange={this.inputChange}  name="complain_subject" autocomplete="off"  placeholder="Enter your complain subject here "/>
                            <label for="complain">Your Complain Here </label>
                            <textarea  required="required" id="complain" name="complain" onChange={this.inputChange} autocomplete="off" placeholder="Enter your complain here"> </textarea>
                            <label for="file">Upload File/Image </label>
                            <input type="file" onChange={this.fileuploadchange}   name="image_field" multiple />
                            
                            
                            <input type="submit" value="Submit" onClick={this.submitbutton} required />
                            
                        </form>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default ComplainForm;