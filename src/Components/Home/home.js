import React, { Component } from 'react';
import { FaFan } from "react-icons/fa";
import axios from 'axios';
class Home extends Component {
    state = {
        covernewz: [],
    }
    componentWillMount(){
        axios.get('http://127.0.0.1:8000/api/home/').then(res => this.setState({covernewz: res.data}));
        //console.log(this.state.covernewz);
    }
    render() {
        return (
            <>
            <div className="container tm-features-section" id="features">
                <div className="row tm-features-row">
                    {this.state.covernewz.map(items => 
                        <section className="col-md-6 col-sm-12 tm-feature-block">
                        <header className="tm-feature-header">
                            
                            <h3 className="tm-feature-h"><FaFan /> {items.subject}</h3>
                        </header>
                        <p>
                            {items.description}
                        </p>
                        </section>
                    )}
                    
                </div>
                </div>

            </>
        );
    }
}

export default Home;