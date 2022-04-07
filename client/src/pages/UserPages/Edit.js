import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editDon } from '../../redux/actions/user'
import{Link, Navigate, useMatch} from'react-router-dom'


function Edit() {
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const match=useMatch("/edit/:id")
  const dispatch=useDispatch()
  const [newdon, setNewdon] = useState({
    name:"",
    description:"",
    datepublication:"",
    img:"",
    email:"",
    idu: localStorage.getItem('id_u')})

    const handleChange=(e)=>{setNewdon({...newdon,[e.target.name]:e.target.value})}
    const handleEdit=()=>{dispatch(editDon(match.params.id,newdon))}
    console.log(match.params.id)
  return (
    <div style={{backgroundColor:"#FEE7F0"}}>
      
      {isAuth?
      <div>
      <div style={{padding:10}}>
      <label style={{width:200,height:10,textAlign:"left"}} htmlFor='img'>Image:</label>
      <input type="img" placeholder='Enter your img here' name='img' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:10,textAlign:"left"}} htmlFor='name'>Name:</label>
      <input type="name" placeholder='Enter your name here' name='name' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:10,textAlign:"left"}} htmlFor='text'>Description:</label>
      <input type="description" placeholder='Enter description here' name='description' onChange={handleChange}/>
      </div>
      <input style={{width:200,height:10,textAlign:"left"}} type="text" name='idu' hidden onChange={handleChange} />
      <div style={{padding:10}}>
      <label style={{width:200,height:10,textAlign:"left"}} htmlFor='text'>Email de contact:</label>
      <input type="email" placeholder='Enter email here' name='email' onChange={handleChange}/>
      </div>
      <div style={{padding:10}}>
      <label style={{width:200,height:10,textAlign:"left"}} htmlFor='datepublication'>La date de publication:</label>
      <input type="text" placeholder='Enter your date de publication here' name='email' onChange={handleChange}/>
      </div>
      <Link to={"/listdonbyuser"}> <button style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} onClick={handleEdit}>Valider</button></Link>

      </div>
        :<Navigate to="/signin"/>}
</div>
  )
}

export default Edit