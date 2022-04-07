//importation

import { FAIL_AUTH_ADMIN, FAIL_DON_ADMIN, FAIL_USER_ADMIN, GET_DON_ADMIN, GET_USER_ADMIN, LOAD_AUTH_ADMIN, LOAD_DON_ADMIN, LOAD_USER_ADMIN, LOG_OUT_ADMIN, SIGN_IN_ADMIN, SIGN_UP_ADMIN } from "../actionsTypes/admin"


//initialeState
const initiale={
    donList:[],
    userList:[], 
    error:null,
    admin:{},
    load:false,
    errors:[],
    isAuthAdmin:false
    

}

//pure function
const adminReducer=(state=initiale,{type,payload})=>
{
    switch(type){
        case LOAD_AUTH_ADMIN:
            return {...state,load:true}
        case SIGN_IN_ADMIN:
            localStorage.setItem("token",payload.token)

            return {...state,load:false,admin:payload.admin,isAuthAdmin:true}
        case SIGN_UP_ADMIN:
                 localStorage.setItem("token",payload.token)
             return {...state,load:false,admin:payload.admin,isAuthAdmin:true}
        case FAIL_AUTH_ADMIN:
            return {...state,load:false,errors:payload}
        case LOG_OUT_ADMIN:
            localStorage.removeItem("token")
            return{
                donList:[],
                userList:[], 
                error:null,
                admin:{},
                load:false,
                errors:[],
                isAuthAdmin:false
            }
        case LOAD_USER_ADMIN:
            return{...state,load:true};
        case GET_USER_ADMIN:
            return{...state,load:false,userList:payload.userList};
        case FAIL_USER_ADMIN:
            return {...state,load:false,error:payload};
        case LOAD_DON_ADMIN:
            return{...state,load:true};
        case GET_DON_ADMIN:
            return{...state,load:false,donList:payload.donList};
        case FAIL_DON_ADMIN:
            return {...state,load:false,error:payload};
        default:
            return state;
    }
}

export default adminReducer