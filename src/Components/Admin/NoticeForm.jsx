import React, { Component } from 'react';

class NoticeForm extends Component {
    render() {
        return (
            <div>
                <div className="container">] <div className=" text-center mt-5 ">
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
                                                    <div className="form-group"> <label for="form_email">Subject *</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter notice subject here *" required="required" data-error="Valid email is required."/> </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                            <option value="" selected disabled>--Select Your Issue--</option>
                                                            <option>Demo 1</option>
                                                            <option>Demo 2</option>
                                                            
                                                        </select> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_message">Notice *</label> <textarea id="form_message" name="message" className="form-control" placeholder="Write your notice here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                </div>
                                                <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Send Message"/> </div>
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