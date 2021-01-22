import React, { Component } from 'react';

class NoticeBox extends Component {
    render() {
        return (
            <div>
                <br/>
                
                <div class="card mb-3">
                    <div class="card-header">
                    <i class="fa fa-bell-o"></i> Notice for You</div>
                    <div class="list-group list-group-flush small">
                    <a class="list-group-item list-group-item-action" href="/">
                        <div class="media">
                        <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="pic"/>
                        <div class="media-body">
                            <strong>David Miller</strong>posted a new article to
                            <strong>David Miller Website</strong>.
                            <div class="text-muted smaller"> 5m ago</div>
                        </div>
                        </div>
                    </a>
                    
                    </div>
                    <div class="card-footer small text-muted">MCCMS Authority</div>
                </div>
            </div>
        );
    }
}

export default NoticeBox;