import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { addDon } from '../../redux/actions/user'

function Add() {
  const dispatch=useDispatch()
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const [newDon, setNewDon] = useState({
    name:"",
    description:"",
    datepublication:"",
    img:"",
    email:"",
    idu: localStorage.getItem('id_u')})
    const handleChange=(e)=>{setNewDon({...newDon,[e.target.name]:e.target.value})}
  return (
    <div>
      {isAuth?
      <div style={{backgroundColor:"#FEE7F0",height:450,padding:60}}>
        <div >
      <div style={{padding:10}}>
      <label style={{width:200,height:20,textAlign:"left"}} htmlFor='img'>Image:</label>
      <input type="img" placeholder='Enter your img here' name='img' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:20,textAlign:"left"}} htmlFor='name'>Name:</label>
      <input type="name" placeholder='Enter your name here' name='name' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:20,textAlign:"left"}} htmlFor='text'>Description:</label>
      <input type="description" placeholder='Enter description here' name='description' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:20,textAlign:"left"}} htmlFor='text'>Email de contact:</label>
      <input type="email" placeholder='Enter email here' name='email' onChange={handleChange}/>
      </div>

      <input type="text" name='idu' hidden onChange={handleChange} />


      <div style={{padding:10}}>
      <label style={{width:200,height:20,textAlign:"left"}} htmlFor='datepublication'>La date de publication:</label>
      <input type="text" placeholder='Enter your date de publication here' name='datepublication' onChange={handleChange}/>
      </div>
      </div>
      <div style={{padding:60}}>
      <Link to={"/listdonbyuser"}><button  style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} onClick={()=>dispatch(addDon(newDon))}>Valider l'ajout du don</button></Link>
      </div>
      </div>
      :<Navigate to="/signin"/>
      }
      
    </div>
  )
}

export default Add