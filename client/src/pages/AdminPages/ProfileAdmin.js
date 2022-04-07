import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileAdmin = () => {
  const load=useSelector(state=>state.adminReducer.load)
  const isAuthAdmin=useSelector(state=>state.adminReducer.isAuthAdmin)
  const admin=useSelector(state=>state.adminReducer.admin)
    return (
      <div>
       {
       load? <p>Loading</p> :
       isAuthAdmin ?
      
     <div style={{height:460}} >
     
     <h5 style={{fontFamily: "cursive",fontSize:30}}>Bonjour Admin: {admin.name}</h5>
     <div style={{display:"flex"}}>
     <div>
     <img style={{width:500,height:400}} src="https://as1.ftcdn.net/v2/jpg/02/13/80/50/1000_F_213805044_cl8NCnrJWKywGI0lsIQNj9Fs0PzWGeAj.jpg"/>
     </div>
     <div style={{padding:"80px 0px 0px 300px"}}>
     <Link to={"/listdonadmin"}><a style={{fontFamily: "cursive",fontSize:30}} href="">La liste des dons</a></Link>
     <div style={{padding:20}}>
     <Link to={"/listofusers"}><a style={{fontFamily: "cursive",fontSize:30}} href="">La liste des utilisateurs </a></Link>
    </div>
    </div>
    </div>
    </div>
     
      
        :
      <div>
            {alert ("please check your email or your password")}
      </div>
      }   
      </div>   
  )
}

export default ProfileAdmin