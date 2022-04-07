import axios from "axios"
import { FAIL_AUTH, FAIL_DON, FAIL_USER, GET_DON, GET_USER, LOAD_AUTH, LOAD_DON, LOAD_USER, LOG_OUT, SIGN_IN, SIGN_UP } from "../actionsTypes/user"

//SignUp

export const signup=(newUser)=>async(dispatch)=>
{
    dispatch({type:LOAD_AUTH})
        try {
            let result=await axios.post("api/user/signup",newUser)
            dispatch({type:SIGN_UP,payload:result.data})
        } catch (error) {
            dispatch({type:FAIL_AUTH,payload:error.response})


            
        }
}

//SignIn
export const signin=(user)=>async(dispatch)=>
{
    dispatch({type:LOAD_AUTH})
        try {
            let result=await axios.post("api/user/signin",user)
            dispatch({type:SIGN_IN,payload:result.data})
        } catch (error) {
            dispatch({type:FAIL_AUTH,payload:error.response.data.errors})


            
        }
}


//LOG_OUT


export const logOut=()=>
{
    return {type:LOG_OUT}
}

//get Dons by IDU
export const getDonsuser=(idu)=>async(dispatch)=>
{
    dispatch ({type:LOAD_DON})
    try {
        let result= await axios.get(`/api/user/${idu}`)
        dispatch ({type: GET_DON ,payload:result.data})
    } catch (error) {
        dispatch ({type: FAIL_DON ,payload:error.reponse})
    }
}

//get all Dons
export const getDons=()=>async(dispatch)=>
{
    dispatch ({type:LOAD_DON})
    try {
        let result= await axios.get("/api/user/")
        dispatch ({type: GET_DON ,payload:result.data})
    } catch (error) {
        dispatch ({type: FAIL_DON ,payload:error.reponse})
    }
}

//add Don
export const addDon =(newDon)=>async(dispatch)=>
{
    try {
        await axios.post("/api/user/add",newDon)
        dispatch (getDons())
    } catch (error) {
        dispatch({type:FAIL_DON,payload:error.response})
        
    }
}


//delete Don
export const deleteDon=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/del/${id}`)
        dispatch (getDons())

    } catch (error) {
        dispatch({type:FAIL_DON,payload:error.response})

    }
}

//edit Don /edit/:_id

export const editDon=(id,editDon)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/edit/${id}`,editDon)
        dispatch(getDons())
        
    } catch (error) {
        dispatch ({type:FAIL_DON,payload:error.response})
        
    }
}




export const editProfil=(id,editProfil)=>async(dispatch)=>{
    try {
       const result=  await axios.put(`/api/user/editprofil/${id}`,editProfil)
      dispatch({type:GET_USER,payload:result.data})
        
    } catch (error) {
        dispatch ({type:FAIL_USER,payload:error.response})
            
        
    }
}