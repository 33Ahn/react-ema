import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';


const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, email}
        // console.log(employee);

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate.push('/employees')
            }).catch(error => {
                console.log(error);
            })
        } else {
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate.push('/employees')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const changeHeader = () => {
        if (id) {
            return <h2 className="text-center mt-4">Update Employee</h2>
        } else {
            return <h2 className="text-center mt-4">Add Employee</h2>
        }
    }

    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3 mt-3 shadow p-3 mb-5 bg-white rounded">
                    
                    {/* <h2 className="text-center mt-4">Add Employee</h2> */}
                    {
                        changeHeader()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group md-3">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text" 
                                    placeholder="Enter your first name" 
                                    name="firstName" 
                                    className="form-control" 
                                    value={firstName} 
                                    onChange = {(e) => setFirstName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group md-3">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text" 
                                    placeholder="Enter your last name" 
                                    name="lastName" 
                                    className="form-control" 
                                    value={lastName} 
                                    onChange = {(e) => setLastName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group md-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="text" 
                                    placeholder="Enter your email address" 
                                    name="email" 
                                    className="form-control" 
                                    value={email} 
                                    onChange = {(e) => setEmail(e.target.value)}>
                                </input>
                            </div>

                            <button type="button" className="btn btn-outline-success mt-2 mb-2 mr-3" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                            <Link to='/employees' className="btn btn-outline-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddEmployeeComponent