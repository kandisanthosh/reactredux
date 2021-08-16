import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserList, editUser, removeUser } from "../../Store/userList/actions";
import { RootState } from "../../Store/userList/store";
import { EmployeeTable } from "./EmployeeTable";



export const EmployeeList = () =>{
    const employees = useSelector((state:RootState) => state.employees);
    const dispatch = useDispatch();
    const fetchEmployees = async () => {
      const response: any= await axios
        .get("https://my-json-server.typicode.com/rahulchintu/testing/employees")
        .catch((err : string) => {
          console.log("Err: ", err);
        });
      dispatch(setUserList(response.data));
    };

  useEffect(() => {
   fetchEmployees();
  }, [])

  console.log("employees :", employees);
  if(employees){
  return <>
    <EmployeeTable />
   </>
  } 
  return<> </>
  
}
