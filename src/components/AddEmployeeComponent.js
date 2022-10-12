import React, { useState } from 'react'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, email}

        console.log(employee);
    }

    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center mt-4">Add Employee</h2>
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

                            <button className="btn btn-success mt-2 mb-2" onClick={(e) => saveEmployee(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddEmployeeComponent