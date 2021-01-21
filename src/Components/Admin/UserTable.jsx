import React, { Component } from 'react';
import {FaUserPlus} from "react-icons/fa";
class UserTable extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                    <FaUserPlus /> User Table</div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            </tr>
                        </thead>
                        {/* <tfoot>
                            <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            </tr>
                            <tr>
                            <td>Donna Snider</td>
                            <td>Customer Support</td>
                            <td>New York</td>
                            <td>27</td>
                            <td>2011/01/25</td>
                            <td>$112,000</td>
                            </tr>
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                <a className="page-link" href="/feeds" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/feeds">1</a></li>
                                <li className="page-item"><a className="page-link" href="/feeds">2</a></li>
                                <li className="page-item"><a className="page-link" href="/feeds">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="/feeds">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>
        );
    }
}

export default UserTable;