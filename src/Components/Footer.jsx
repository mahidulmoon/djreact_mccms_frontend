import React, { Component } from 'react';
import { DiGithubBadge } from "react-icons/di";
import { AiFillFacebook,AiFillLinkedin } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
class Footer extends Component {
    render() {
        return (
            <footer class="footer-distributed" id="contact">
 
            <div class="footer-left">
     
            <h3>M4h1DuL<span>MooN</span></h3>
     
            <p class="footer-links">
            <a href="/">Home</a>
        
            </p>
     
            <p class="footer-company-name">DIU &copy; 2021</p>
            </div>
     
            <div class="footer-center">
     
            <div>
            <BiBuilding/>
            <p><span>YounusKhan Scholars Garden(DIU Boys Hostel,Ashulia)</span> Dhaka, Bangladesh</p>
            </div>
     
            <div>
            <BiBuilding/>
            <p>+8801771042196</p>
            </div>
     
            <div>
            <BiBuilding/>
            <p><a href="mailto:mahidulmoon@gmail.com">mahidul35-219@diu.edu.bd</a></p>
            </div>
     
            </div>
     
            <div class="footer-right">
     
            <p class="footer-company-about">
            <span>About Me</span>
        Studying in Dept. of Software Engineering at Daffodil Internation University
            </p>
     
            <div class="footer-icons">
     
            <a href="https://www.facebook.com/mdmahidul.moon/"><AiFillFacebook/></a>
            
            <a href="https://www.linkedin.com/in/mahidul-moon-281509144/"><AiFillLinkedin/></a>
            <a href="https://github.com/mahidulmoon"><DiGithubBadge/></a>
            
            </div>
     
            </div>
     
            </footer>
        );
    }
}

export default Footer;