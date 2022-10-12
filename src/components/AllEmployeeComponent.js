import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

function AllEmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className="container">
            <h2>Employee Lists</h2>
            <table className=" table table-bordered table-hover">
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllEmployeeComponent
