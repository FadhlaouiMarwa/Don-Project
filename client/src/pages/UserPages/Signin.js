import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/actions/user';
import {Link} from "react-router-dom" 

function Signin() {
  const [newUser, setNewUser] = useState({});
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  return (
    
        <div style={{height:470,padding:60,backgroundColor:"#FEE7F0",display:"flex"}}>
         <div>
    <img style={{width:500,height:400}} src="https://img.freepik.com/free-photo/happy-young-woman-with-clothes-donation-standing-pink-wearing-casual-outfit-keeps-one-hand-chin_176532-9700.jpg?w=740&t=st=1649273724~exp=1649274324~hmac=f37441beda60089c06afafc2a90f4c959fe51ed03f1ad9c30122a8a6d0570de7"/>
         </div>
         <div>
       <div style={{padding:20}}>
       <label htmlFor='email' style={{width:100,height:10,textAlign:"left"}}>Email:</label>
       <input type="email" placeholder='Enter your email here' name='email' onChange={handleChange}/>
       </div>
       <div>
       <label htmlFor='password' style={{width:100,height:10,textAlign:"left"}}>Password:</label>
       <input type="password" placeholder='Enter your password here' name='password' onChange={handleChange}/>
       </div>
       <div style={{padding:'20px 20px 20px 100px'}}>
       <Link to ={"/profile"}><button style={{backgroundColor:"#CC4E5C",color:"black",fontFamily: "cursive"}} onClick={()=>dispatch (signin(newUser))}>Se connecter</button></Link>
       </div>
       <div style={{padding:'100px 20px 20px 100px'}}><Link to={"/signinadmin"}><a href="vous êtes l'admin de la page">Vous êtes l'admin de la page?</a></Link></div>
       </div>
     </div>
    
   )
 }

export default Signin

