
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function AllEmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();

        // EmployeeService.getAllEmployees().then((response) => {
        //     setEmployees(response.data)
        //     console.log(response.data);
        // }).catch(error => {console.log(error);
        // })
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {console.log(error);
        })
    }


    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container  table-responsive-sm">
            <h2 className="text-center mt-3">Employee Lists</h2>
            <Link to= "/add-employee" className="btn btn-success mb-2 ">Add Employee</Link>            
            <table className="table table-bordered table-hover">
                <thead className="table-success">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr  key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link className="btn btn-outline-success mr-2 btn-sm" to={`/update-employee/${employee.id}`} >Update</Link>
                                    <button className="btn btn-outline-danger btn-sm" onClick={()=> deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllEmployeeComponent
