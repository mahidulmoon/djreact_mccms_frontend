import React, { Component } from 'react';
import axios from "axios";
import {FcList,FcAddDatabase} from "react-icons/fc";
class SingleFeed extends Component {
    state = {
        token: localStorage.getItem('token'),
        rating:{
            user_id:parseInt(localStorage.getItem('userid')),complain_id:0,rating:1
        },
        button: false,
        id: 0
    }
    componentDidMount(){
        console.log("token",this.state.token);
    }
    DisLikeButton(id){
        //this.setState({button:false});
        axios.delete(`http://127.0.0.1:8000/api/complain/ratecomplain/${this.state.id}`,{
            headers:{
                Authorization: `Token ${this.state.token}`
            }
        }).then(res => this.setState({button: false})).catch(err => console.log('error',err));
    }
    LikeButton(id) {
        this.setState({rating:{...this.state.rating,complain_id:id}});
        if(this.state.token === null){
            alert("Please login first");
            //console.log(this.state.rating);
        }else{
            if(this.state.rating.complain_id > 0){
                //this.setState({button: true});
                // console.log(this.state.rating);
                axios.post('http://127.0.0.1:8000/api/complain/ratecomplain/',this.state.rating,{
                    headers:{
                        Authorization: `Token ${this.state.token}`
                    }
                }).then(res => {console.log(res);this.setState({button: true,id: res.data.id})}).catch(err => console.log('error',err));
            }
        }
    }
    render() {
        const complain = this.props.complain;
        return (
            <div>
                <div >
                            <div >
                                <div className="span8">
                                    <div className="widget-box">
                                    <div className="widget-title"> <span className="icon"> <i className="icon-list"></i> </span>
                                        <h3 className="bg-light"><FcList /> <i>{complain.complain_subject}</i> </h3>
                                        <br/>
                                        <div className="row">
                                            <h6 className="col-lg-8"><button>Complained By:</button> {complain.complainer_name}</h6>
                                            <h6 className={complain.status == 'approved' ? "col-lg-4 text-success" : "col-lg-4 text-danger"}><button>Status: </button> {complain.status}</h6>
                                        </div>
                                        <div className="row">
                                            <h6 className="col-lg-8"><button>Place:</button> {complain.complaint_address}</h6>
                                            <h6 className="col-lg-4"><button>Date:</button> {complain.created_at}</h6>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="widget-content text-info"> ** {complain.complain} </div>
                                    <br />
                                    {/* <div>
                                        <img className="img-fluid" src={complain.image_field} alt="image" />
                                    </div> */}
                                    {(complain.image_field.includes(".jpg") || complain.image_field.includes(".jpeg") || complain.image_field.includes(".png") || complain.image_field.includes(".webp")) && <div>
                                        <img className="img-fluid" src={complain.image_field} alt="image" />
                                    </div>}
                                    { !(complain.image_field.includes(".jpg") || complain.image_field.includes(".jpeg") || complain.image_field.includes(".png") || complain.image_field.includes(".webp"))
                                        && <div><center>
                                        <video width="500" height="540" controls>
                                            <source src={complain.image_field} type="video/mp4"/>
                                            <source src={complain.image_field} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video> 
                                    </center></div> 
                                    }
                                    <br/>
                                    {!this.state.button &&<button onClick={() => this.LikeButton(complain.id)} ><code><FcAddDatabase/>({complain.avg_rating}) Mark as Agree</code></button>}
                                    {this.state.button &&<button onClick={() => this.DisLikeButton(complain.id)} ><code><FcAddDatabase/>({complain.avg_rating+1}) Agreed</code></button>}

                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </div>
            </div>
        );
    }
}

export default SingleFeed;