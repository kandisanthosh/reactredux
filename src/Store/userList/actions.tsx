import { ActionTypes } from './action_types'



 export const setUserList = (employee:any) =>{
        return {
            type : ActionTypes.SET_USER_LIST,
            payload: employee
        }
    }
export const editUser = (employee:any) => {
    return{
        type : ActionTypes.EDIT_USER,
        payload: employee
    }
}
export const removeUser = (employee:any) =>{
    return{
        type: ActionTypes.REMOVE_USER,
        payload: employee
    }
}
    
