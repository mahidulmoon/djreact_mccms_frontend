import React, { Component } from 'react';

class ProfileBasic extends Component {
    render() {
        return (
            <div >
                <div className="container mt-5 justify-content-center">
                    <div className="card p-3">
                        <div className="d-flex align-items-center">
                            <div className="image"> <img src="logo512.png" alt="logo" className="rounded" width="155" /> </div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0">Mahidul Moon</h4> <span>Software Engineer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                    <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                    <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                </div>
                                <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ProfileBasic;