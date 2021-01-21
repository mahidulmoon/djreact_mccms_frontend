import React, { Component } from 'react';

class SideNotification extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <br/>
                <br/>
                <br/>
                <div class="card mb-3">
                    <div class="card-header">
                    <i class="fa fa-bell-o"></i> Feed Example</div>
                    <div class="list-group list-group-flush small">
                    <a class="list-group-item list-group-item-action" href="/">
                        <div class="media">
                        <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="pic"/>
                        <div class="media-body">
                            <strong>David Miller</strong>posted a new article to
                            <strong>David Miller Website</strong>.
                            <div class="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                        </div>
                        </div>
                    </a>
                    
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>
        );
    }
}

export default SideNotification;