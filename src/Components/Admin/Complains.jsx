import React, { Component } from 'react';
import {FcAddDatabase} from "react-icons/fc";
import axios from "axios";
import jsPDF from 'jspdf';
class Complains extends Component {
    state = {
        complains:[],
        next:'',
        previous:'',
        count: 0,
        token: localStorage.getItem('token')
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/complain/complains/').then(res => {this.setState({complains: res.data.results,next:res.data.next,previous:res.data.previous,count:res.data.count})}).catch(err => {console.log(err);alert("error to fetch complain")});

    }
    nextpage = () =>{
        axios.get(this.state.next).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    previouspage = () =>{
        axios.get(this.state.previous).then(res => this.setState({complains:res.data.results,next:res.data.next,previous:res.data.previous}))
    } 
    approveButton(id){
        axios.put(`http://127.0.0.1:8000/api/complain/updatestatus/${id}`,{status:"approved"},{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res =>{this.componentDidMount(); console.log(res.data)}).catch(err=>console.log('can not approve complain'));
    }
    solveButton(id){
        axios.put(`http://127.0.0.1:8000/api/complain/updatestatus/${id}`,{status:"solved"},{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res =>{this.componentDidMount(); console.log(res.data)}).catch(err=>console.log('can not solved complain'));
    }
    dpdf = (complain) => {
        var doc = new jsPDF(); 
        var today = new Date();   
        doc.setTextColor(165, 0, 0);  
        doc.setFont("bold");
        doc.text(50, 10, 'Municipal Corporation Complain Management System');  
        doc.setTextColor(0, 0, 0); 
        doc.setFont("times");   
        doc.text(10, 20, 'Complain Details:');   
        doc.setFont("italic"); 
        doc.text(20, 30, `Subject: ${complain.complain_subject}`);     
        doc.text(140, 30, `Address : ${complain.complaint_address}`); 
        doc.setTextColor(255, 0, 0);
        doc.text(20, 40, `Status:${complain.status}`);     
        //doc.text(140, 40, `Time of :${this.state.registeredfir.timeofincedence}`);    
        doc.setTextColor(0, 0, 0); 
        doc.text(20, 50, `Complain : ${complain.complain}`); 
        doc.setTextColor(0,0,0);
        //doc.text(20, 60, `Address:${complain.complaint_address}`);     
        //doc.text(20, 90, `Complain Registration Time:${complain.created_at}`);
        doc.setFont("bold");
        doc.text(10, 110, `Complain Registration Time:${complain.created_at}`);
        doc.text(10, 130, 'Complainer Information:');   
        doc.setFont("italic"); 
        doc.text(20, 140, `Name: ${complain.complainer_name}`);     
        //doc.text(130, 140, `Father's Name:${this.state.complainerinfo.fathername}`); 
        doc.text(20, 160, `Email: ${complain.complainer_email}`);     
        doc.text(20, 150, `Phone:${complain.complainer_phone}`);    
        doc.setFont("bold");
        doc.text(10,170,"Short Report(optional):")
        doc.text(10,250,`Signature of Investigation Officer: `);
        doc.setFont("italic"); 
        doc.text(20,260,`Date:${today}`);
        doc.save('document.pdf'); // Save the PDF with name "katara"...    
    }
    render() {
        return (
            <div>
                <div className="container" id="activities">
                    <div className="row">
                        <div className="col-12">
                        <div className="tm-parallax">
                            <header className="tm-parallax-header">
                            <h2 className="">Complains</h2>
                            </header>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.complains.map(complain =>
                        <div className="col-lg-6">
                            <div className="tm-activity-block">
                                <div className="tm-activity-img-container">
                                    <img src={complain.image_field} height="60" width="160" alt="logo" className="tm-activity-img" />
                                    <br/>
                                    <p className="text-danger bg-light"> {complain.status}</p>
                                    <p>{complain.created_at.slice(11,19)} <br/>{complain.created_at.slice(0,10)}</p>
                                    <div className="row">
                                        <button onClick={() => this.approveButton(complain.id)} className="col-lg-6 btn-outline-primary">approve</button>
                                        <button onClick={() => this.solveButton(complain.id)} className="col-lg-6 btn-outline-success">solved</button>
                                    </div>
                                
                                </div>
                                <div className="tm-activity-block-text" style={{width: 300}}>
                                <h3 className="tm-text-blue">{complain.complain_subject}</h3>
                                <p>
                                    {complain.complain}
                                </p>
                                
                                <code className="col-lg-6"><FcAddDatabase/> ({complain.avg_rating}) Agree</code>
                                    
                                
                                </div>
                                <div onClick={() => this.dpdf(complain)} style={{float:"right"}}>
                                    <img src="print.png" alt="nothing" />
                                </div>
                                
                            </div>   
                        </div>
                        )}
                        
                    </div>
                    </div>
                    <nav className="container" aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item ">
                                <button className="page-link" tabindex="-1" onClick={this.previouspage}>Previous</button>
                                </li>
                                
                                <li className="page-item">
                                <button className="page-link" onClick={this.nextpage}>Next</button>
                                </li>
                            </ul>
                        </nav>
            </div>
        );
    }
}

export default Complains;