import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDonsuser} from '../../redux/actions/user'
import {Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Profile = () => {
  const load=useSelector(state=>state.userReducer.load)
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const user=useSelector(state=>state.userReducer.user)
  const dispatch=useDispatch()
  const idu = localStorage.getItem('id_u')
  useEffect(() => {
    dispatch( getDonsuser (idu));
   }, [dispatch]);
    
  return (
    <div >
      <div style={{display:"flex"}}>
      <div style={{padding:20}}>
        <img style={{width:800,height:450}} src="https://img.freepik.com/free-photo/cute-romantic-young-woman-magnify-her-lips-with-magnifying-glass-making-kissing-face-standing-with-closed-eyes-against-pink-background_1258-54147.jpg?t=st=1649279140~exp=1649279740~hmac=aecfb926a55d8017f8fe81bea38130ebf267fc5074553bbd9be6fb70cb59e430&w=740"/>
      </div>


      <div style={{padding:60}}>
      {load? <p>Loading</p> :
      isAuth?
      <div>
        <h3 style={{fontSize:30,fontFamily: "cursive"}}>{user.lastname} {user.firstname} </h3>
        <div style={{padding:40}}> 
        <h2 style={{fontSize:20,fontFamily: "cursive"}}>Bienvenue dans votre profil</h2>
        </div>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontSize:30,fontFamily: "cursive"}}>Voir vos informations</Accordion.Header>
        <Accordion.Body>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Nom:  {user.firstname}</h5>
     </div>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Prénom:   {user.lastname}</h5>
     </div>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Adresse email:  {user.email}</h5>
     </div>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Date de naissance:  {user.dateofbirth}</h5>
     </div>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Numéro de téléphone:  {user.phone}</h5>
     </div>
     <div>
     <h5 style={{fontFamily:  "cursive",textAlign:"left"}}>Pays:  {user.country}</h5>
     </div>
     <LinkContainer style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} to={`/editprofil/${user._id}`}><button style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} variant="primary" >Modifier mon profil</button></LinkContainer>

       </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       <div style={{padding:80}}>
       <Link to={"/listdonbyuser"}><a style={{fontFamily: "cursive",fontSize:30}} href="">Voir vos dons</a></Link>
       </div>
        </div>
        :
      <div>
            {alert ("please check your email or your password")}
      </div>
      }
      </div>
        
      </div>
          
      </div>
    
    
  )
}

export default Profile