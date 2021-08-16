import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserList, editUser, removeUser } from "../../Store/userList/actions";
import '../../styles/Employees/Employee.css';
import { RootState } from "../../Store/userList/store";
import { Registration } from "../Form";
import {BrowserRouter as  Router} from 'react-router-dom';

export const EmployeeTable = () => {

  const employees = useSelector((state:RootState) => state.employees);
  const dispatch = useDispatch();
  console.log("helloemployees",employees)
  // const setPath  = (path :string)=> {
  //   history.push(path)
  // }
    return (
      <div>
          <div style={{float:'left',margin:'20px'}}>
             <Router><Link to="/edit"><button className="btn btn-secondary">Add Employee</button></Link> </Router>
          </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Gender</th>
              <th scope="col">lanugage</th>
            </tr>
          </thead>
          <tbody>
              {employees.map((employee:any) =>
              <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob}</td>
              <td>{employee.state}</td>
              <td>{employee.city}</td>
              <td>{employee.gender}</td>
              <td>{employee.language}</td>
              <td className=" text-center" onClick={
                () =>{
                   dispatch(editUser([employee]))
              }
              }>
              <Router>
                <Link to={`/edit/:${employee.id}`}>
                <button className="btn btn-primary">Edit</button>
                </Link>
                </Router> 
              
                </td>
              <td style={{cursor:'pointer'}} onClick={() => dispatch(removeUser(employee))}><button className="btn btn-danger">Delete</button></td> 
            </tr>
              )}
            
         </tbody>
        </table>
      </div>
    );
 
  
};

