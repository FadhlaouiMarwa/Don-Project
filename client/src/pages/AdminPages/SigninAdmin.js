import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../redux/actions/admin';


function SigninAdmin() {
  const [admin, setAdmin] = useState({});
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value})
  }
  return (
    <div style={{height:470,padding:60,backgroundColor:"#FEE7F0",display:"flex"}}>
  <div>
    <img style={{width:500,height:400}} src="https://as1.ftcdn.net/v2/jpg/02/31/55/94/1000_F_231559417_RqWgtcuEfKIXYgSfN1tnALohIebZgGry.jpg"/>
  </div>
  <div>
 <div style={{padding:20}}>
 <label style={{width:100,height:10,textAlign:"left"}} htmlFor='email'>Email:</label>
 <input type="email" placeholder='Enter your email here' name='email' onChange={handleChange}/>
 </div>
 <div>
 <label style={{width:100,height:10,textAlign:"left"}} htmlFor='password'>Password:</label>
 <input type="password" placeholder='Enter your password here' name='password' onChange={handleChange}/>
 </div>
 <div style={{padding:'20px 20px 20px 100px'}}>
 <Link to={"/profileadmin"}><button style={{backgroundColor:"#CC4E5C",color:"black",fontFamily: "cursive"}} onClick={()=>dispatch(signin(admin))}>Se connecter</button></Link>
 </div>
 </div>
</div>
   
  )}      
    
   
export default SigninAdmin