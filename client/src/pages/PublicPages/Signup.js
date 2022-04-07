import React, { useState } from 'react'
import{useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { signup } from '../../redux/actions/user'
export const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
 
  return (
    
     <div>
       <div style={{backgroundColor:"#FEE7F0",height:450,padding:30,display:"flex"}}>
         <div style={{padding:"0px 100px 0px 0px"}}>
           <img style={{width:500,height:400}} src="https://img.freepik.com/free-photo/male-hand-pointing-showing-torn-coral-paper-hole-wall-copyspace_155003-39394.jpg?t=st=1649277698~exp=1649278298~hmac=7866863e2a735fe99d15f9aa1088fb0f2a7c6a8f00e7355149cfd100697054ed&w=740"/>
         </div>
         <div>
       <div >
       <div style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='name'>Nom: </label>
       <input type="text" placeholder='Enter your name here' name='firstname' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='name'>Pénom:</label>
       <input type="text" placeholder='Enter your name here' name='lastname' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='email'>Email:</label>
       <input type="email" placeholder='Enter your email here' name='email' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='password'>Mot de passe:</label>
       <input type="password" placeholder='Enter your password here' name='password' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='country'>Pays:</label>
       <input type="text" placeholder='Enter your country here' name='country' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='phone'>Téléphone:</label>
       <input type="text" placeholder='Enter your number phone here' name='phone' onChange={handleChange}/>
       </div>
       <div  style={{padding:5}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily: "HMSans-Regular, sans-serif"}} htmlFor='date of birth'>Date de naissance:</label>
       <input type="text" placeholder='Enter your date of birth here' name='dateofbirth' onChange={handleChange}/>
       </div>
       </div>
       <div style={{padding:30}}>
       <Link to ={"/confirmationsignup"}><button style={{fontSize:18,fontFamily: "cursive",width:200,backgroundColor:"#CC4E5C",color:"black",height:40}} onClick={()=>dispatch (signup(newUser))}>S'inscrire</button></Link>
       </div>
       </div>
     </div>
     </div>

  )
}
export default Signup
