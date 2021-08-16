
import { useHistory } from 'react-router-dom';
import { Registration } from '../../components/Form';
import { ActionTypes } from './action_types';
import {BrowserRouter as Router} from 'react-router-dom';
const initial_state = {
    employees: [{
    id : null,
    firstName: '',
    lastName: '',
    email :'',
    dob: '',
    phone : null,
    state : '',
    city: '',
    gender:'',
    language: '',

    }],
    loading:false,
    error:''
    
}
export const employee_reducer = (state = initial_state ,{type,payload}:any) => {
    
    
    switch (type) {
        case ActionTypes.SET_USER_LIST:
            alert("set employee");
            return {...state,employees:payload} 
            
        case ActionTypes.EDIT_USER:
            alert("edit employee sucessful")
            return {
                   ...state, employees:payload
                    
                   
            };
            
        case ActionTypes.REMOVE_USER:
            alert("remove employee succesful")
            const employeesfilter = state.employees.filter(employee => {
               return employee.id  !== payload.id ;
            })
            console.log(employeesfilter)    
            return {
                
                ...state, employees:employeesfilter
            };
            
    
        default:
            return state;
    }
}