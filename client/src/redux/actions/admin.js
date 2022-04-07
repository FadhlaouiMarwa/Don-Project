import axios from "axios"
import { FAIL_AUTH_ADMIN, FAIL_DON_ADMIN, FAIL_USER_ADMIN, GET_DON_ADMIN, GET_USER_ADMIN, LOAD_AUTH_ADMIN, LOAD_DON_ADMIN, LOAD_USER_ADMIN, LOG_OUT_ADMIN, SIGN_IN_ADMIN, SIGN_UP_ADMIN } from "../actionsTypes/admin"





//SignUP

export const signup=(newAdmin)=>async(dispatch)=>
{
    dispatch({type:LOAD_AUTH_ADMIN})
        try {
            let result=await axios.post("api/admin/signup",newAdmin)
            dispatch({type:SIGN_UP_ADMIN,payload:result.data})
        } catch (error) {
            dispatch({type:FAIL_AUTH_ADMIN,payload:error.response.data.errors})


            
        }
}

//Signin
export const signin=(admin)=>async(dispatch)=>
{
    dispatch({type:LOAD_AUTH_ADMIN})
        try {
            let result=await axios.post("/api/admin/signin",admin)
            dispatch({type:SIGN_IN_ADMIN, payload:result.data})
        } catch (error) {
            console.log(error)
            dispatch({type:FAIL_AUTH_ADMIN,payload:error})  
        }
}

//get Dons
export const getDonsAdmin=()=>async(dispatch)=>
{
    dispatch ({type:LOAD_DON_ADMIN})
    try {
        let result= await axios.get("/api/admin/")
        dispatch ({type: GET_DON_ADMIN ,payload:result.data})
    } catch (error) {
        dispatch ({type: FAIL_DON_ADMIN ,payload:error.reponse})
    }
}


//LOG_OUT


export const logOutAdmin=()=>
{
    return {type:LOG_OUT_ADMIN}
}

//delete Don
export const deleteDon=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/del/${id}`)
        dispatch (getDonsAdmin())

    } catch (error) {
        dispatch({type:FAIL_DON_ADMIN,payload:error.response})

    }
}
//get all users

export const getUser=()=>async(dispatch)=>
{
    dispatch ({type:LOAD_USER_ADMIN})
    try {
        let result= await axios.get("/api/admin/userlist")
        dispatch ({type: GET_USER_ADMIN ,payload:result.data})
    } catch (error) {
        dispatch ({type: FAIL_USER_ADMIN ,payload:error.reponse})
    }
}


//delete User
export const deleteuser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/admin/deluser/${id}`)
        dispatch (getUser())

    } catch (error) {
        dispatch({type:FAIL_USER_ADMIN,payload:error.response})

    }
}

