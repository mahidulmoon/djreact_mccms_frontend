import React, { Component } from 'react';
import {FcBullish} from "react-icons/fc";
class ComplainTable extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <br />
                <br/>
                <div className="card-header">
                   <h4> <FcBullish /> Already Complained by You </h4>
                </div>
                <div className="card-body"></div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }
}

export default ComplainTable;