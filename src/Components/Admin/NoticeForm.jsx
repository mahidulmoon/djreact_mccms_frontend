import React, { Component } from 'react';
import axios from 'axios';
class NoticeForm extends Component {
    state ={
        notice:{
            subject:'',department:'',notice:''
        },
        token:[],
    }

    formInputChange = (e) =>{
        const cred = this.state.notice;
        cred[ e.target.name ] = e.target.value;
        this.setState({notice:cred});
    }
    submitButton = e =>{
        e.preventDefault();
        //console.log(this.state.notice)
        axios.post('http://127.0.0.1:8000/api/notice/notices/',this.state.notice,{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res => {alert("Notice added successfully.");window.location.reload()}).catch(err => {console.log(err);alert("An error occured while posting notice.")});

    }
    componentWillMount(){
        this.setState({token:localStorage.getItem('token')});
    }


    render() {
        return (
            <div>
                <div className="container"> <div className=" text-center mt-5 ">
                    <h1>Notice as Announcement</h1>
                </div>
                <br />
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div classNameName="container">
                                    <form id="contact-form">
                                        <div className="controls">
                                            
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label for="form_email">Subject *</label> <input id="form_email" type="email" name="subject" className="form-control" placeholder="Please enter notice subject here *" required="required" onChange={this.formInputChange} data-error="Valid email is required."/> </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label for="form_need">On the behalf of*</label> <select id="form_need" name="department" onChange={this.formInputChange} className="form-control" required="required" data-error="Please specify your need.">
                                                            <option value="" selected disabled>--Select Your Department--</option>
                                                            <option value="Building Development">Building Development</option>
                                                            <option value="Central store Department">Central store Department</option>
                                                            <option value="Drainage Department">Drainage Department</option>
                                                            <option value="Electrical Department">Electrical Department</option>
                                                            <option value="Environment Departmen">Environment Department</option>
                                                            <option value="Central store Department">Central store Department</option>
                                                            <option value="Encroachment Department">Encroachment Department</option>
                                                            <option value="Health Department">Health Department</option>
                                                            <option value="Municpal Secretary">Municpal Secretary</option>
                                                            <option value="Road Departmen">Road Department</option>
                                                            <option value="Solid waste Department">Solid waste Department</option>
                                                            <option value="Water supply and pumping Department">Water supply and pumping Department</option>
                                                            
                                                        </select> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_message">Notice *</label> <textarea id="form_message" name="notice" onChange={this.formInputChange} className="form-control" placeholder="Write your notice here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                </div>
                                                <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " onClick={this.submitButton} value="Send Notice"/> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        );
    }
}

export default NoticeForm;