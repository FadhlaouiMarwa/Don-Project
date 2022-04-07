//importation

import { LOAD_USER,FAIL_USER,GET_USER,FAIL_AUTH, FAIL_DON,  GET_DON,  LOAD_AUTH,  LOAD_DON, LOG_OUT, SIGN_IN, SIGN_UP } from "../actionsTypes/user"

//initialeState
const initiale={
    userList:[], 
    donList:[],                 
    error:null,
    load:false,
    user:{},
    errors:[],
    isAuth:false
    
}

//pure function
const userReducer=(state=initiale,{type,payload})=>
{
    switch(type){
        case LOAD_AUTH:
            return {...state,load:true}
        case SIGN_IN:
            localStorage.setItem("token",payload.token)
            localStorage.setItem("id_u",payload.user._id)
            return {...state,load:false,user:payload.user,isAuth:true}
        case SIGN_UP:
                localStorage.setItem("token",payload.token)
            return {...state,load:false,user:payload.user,isAuth:true}
        case FAIL_AUTH:
            return {...state,load:false,errors:payload}
        case LOG_OUT:
            localStorage.removeItem("token")
            return{
            user:{},
            load:false,
            errors:[],
            isAuth:false
            }
        case LOAD_USER:
            return{...state,load:true};
        case GET_USER:
            return{...state,load:false,userList:payload.userList};
        case FAIL_USER:
            return {...state,load:false,error:payload};
        case LOAD_DON:
            return{...state,load:true};
        case GET_DON:
            return{...state,load:false,donList:payload.donList};
        case FAIL_DON:
            return {...state,load:false,error:payload};
        default:
            return state;
    }
}

export default userReducer