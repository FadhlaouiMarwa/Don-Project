import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useMatch } from 'react-router-dom'
import { editProfil } from '../../redux/actions/user'

function EditProfil() {
  const match=useMatch("/editprofil/:id")
  const dispatch=useDispatch()
  const [profil, setProfil] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    dateofbirth:"",
    country:"",
    phone:""})
    
    const handleChange=(e)=>{setProfil({...profil,[e.target.name]:e.target.value})}
    const handleEdit=()=>{dispatch(editProfil(match.params.id,profil))}
    console.log(match.params)
  return (
    <div style={{backgroundColor:"#FEE7F0"}}>      
      
      <div>

       <div style={{padding:10}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='name'>Nom:</label>
       <input type="text" placeholder='Enter your name here' name='firstname' onChange={handleChange}/>
       </div>

       <div style={{padding:10}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='name'>Prénom:</label>
       <input type="text" placeholder='Enter your name here' name='lastname' onChange={handleChange}/>
       </div>

       <div style={{padding:10}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='country'>Pays:</label>
       <input type="text" placeholder='Enter your country here' name='country' onChange={handleChange}/>
       </div>

       <div style={{padding:10}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='phone'>Téléphone:</label>
       <input type="text" placeholder='Enter your number phone here' name='phone' onChange={handleChange}/>
       </div>

       <div style={{padding:10}}>
       <label style={{width:150,height:10,textAlign:"left",fontFamily:"cursive"}} htmlFor='date of birth'>Date de naissance:</label>
       <input type="text" placeholder='Enter your date of birth here' name='dateofbirth' onChange={handleChange}/>
       </div>
     
      <div style={{padding:10}}>
       <Link to={"/profile"}> <button style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} onClick={handleEdit}>Valider</button></Link>
      </div>
     
      </div>
        
      
      </div>
     
      
  )
}


export default EditProfil