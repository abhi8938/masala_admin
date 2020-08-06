/*TODO:
   -Filters(Toggle - on/off)(DONE)
      -All(DONE)
      -Vendors(DONE)
      -Customers(DONE)
      -Valet/Delivery(DONE)
      -Search Text Input(Text Input)(DONE)
   -User Table (List containing users like in COCOCARS or better) (Create Random user Data (Atleast 100) and populate database with it)
      -Button to disable/ban user
   -Pagination for User Table(Next, Previous)
   -After Finishing Copy Code to Products and Orders
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from "react-bootstrap";
import DataTable from '../components/Table/Table';
import ROUTES from "../constants/routes";
import services from "../service";
import sampledata from '../constants/MOCK_DATA';

const service = new services();
const Filters = ['All', 'Vendor', 'Customer', 'Delivery'];
// const column = [
//         {
//             Header: 'User Details',
//             columns: [
//                 {
//                     Header: 'Index',
//                     accessor: 'index',
//                 },
//                 {
//                     Header: 'Full Name',
//                     accessor: 'fullName',
//                 },
//                 {
//                     Header: 'Contact',
//                     accessor: 'contactNumber',
//                 },
//                 {
//                     Header: 'Email',
//                     accessor: 'email',
//                 },
//                 {
//                     Header: 'Role',
//                     accessor: 'role',
//                 },
//                 {
//                     Header: 'Address',
//                     columns: [
//                         {
//                             Header:'Address',
//                             accessor: 'address',
//                         },
//                         {
//                             Header:'City',
//                             accessor: 'city',
//                         },
//                         {
//                             Header:'State',
//                             accessor: 'state'
//                         },
//                         {
//                             Header:'Pin Code',
//                             accessor: 'pinCode'
//                         },
//                     ],
//                 },
//                 {
//                     Header: 'Profile Pic',
//                     accessor: 'profilePic',
//                 },
//                 {
//                     Header: 'Status',
//                     accessor: 'status',
//                 },
//                 {
//                     Header: 'On Duty',
//                     accessor: 'onDuty',
//                 },
//                 {
//                     Header: 'Date of Joining',
//                     accessor: 'dateOfJoining',
//                 }
//
//             ]
//         }
//     ];

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'All',
            searchText: '',
            loading: false,
            users: [],
        }
    }

    getusers = async () => {
        this.setState({loading: true});
        const result = await service.getUsers();
        this.setState({loading: false});
        if (result.name === 'Error') {
            alert(result.message);
            return
        }
        if (result.status === 200) {
            this.setState({users: sampledata});
        } else if (result.status !== 200) {
            alert(result.data);
            return
        }
    }

     searchUsers = async (search) => {
         this.setState({loading: true});
         const response = await service.searchUsers('', search);
        console.log('search', response);
         this.setState({loading: false});
         if (response.status == 200) {
             this.setState({users: sampledata});
        } else {
            alert(JSON.stringify(response.data));
        }
    };

    componentDidMount() {
        this.getusers()
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12} className='table_Column'>
                            <DataTable
                                // columns={column}
                                list={this.state.users}
                                handleSearch={(e => this.setState({searchText: e.target.value}))}
                                searchvalue={this.state.searchText}
                                filters={Filters}
                                selected={this.state.selected}
                                handleToggle={label => {
                                    this.setState({selected: label})
                                    let y = [];
                                    if(label === 'All') return this.getusers()
                                    sampledata.map(value => {
                                        if (label.toUpperCase() === value.role) {
                                            y.push(value);
                                            return
                                        }
                                        return;
                                    });
                                    console.log('label',y);
                                    this.setState({users:y});
                                }
                                }/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

Users.propTypes = {};

export default Users;
