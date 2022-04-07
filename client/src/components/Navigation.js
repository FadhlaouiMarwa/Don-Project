import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAdmin } from '../redux/actions/admin'
import { logOut } from '../redux/actions/user'
function Navigation() {
  const dispatch=useDispatch()
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const isAuthAdmin=useSelector(state=>state.adminReducer.isAuthAdmin)

  return (
    <div style={{ backgroundColor: "#11F5CF"}}>
    <header >
 
    <Navbar bg="light" variant="light"   >
    <Container>
    <Navbar.Brand href="#home" style={{fontFamily: "cursive"}}>DONATE</Navbar.Brand>
    <Nav className="me-auto">
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div style={{padding:10}}>
      <Link to={"/"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#home">Accueil</Nav.Link></Link>
      </div>
      <div style={{padding:10}}>
      <Link to={"/listdons"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Nos Dons</Nav.Link></Link>
      </div>
     
      <div style={{padding:10}}>
      {isAuth?(
      <Link to={"/profile"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Mon profil</Nav.Link></Link>
      ):isAuthAdmin?<Link to={"/profileadmin"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Profil Admin</Nav.Link></Link>:<div>
      <Link to={"/signin"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Se connecter</Nav.Link></Link>
      </div>}
      </div>
      
      <div style={{padding:10}}>
        {isAuth?(
      <Link to={"/signin"} onClick={()=>dispatch(logOut())}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Se déconnecter</Nav.Link></Link>
      ):<div>
      <Link to={"/signin"}></Link>
      </div>}
      </div>
      <div style={{padding:5}}>
      {isAuthAdmin?(
      <Link to={"/signin"} onClick={()=>dispatch(logOutAdmin())}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}} href="#pricing">Se déconnecter</Nav.Link></Link>
      ):<div>
      <Link to={"/signin"}></Link>
      </div>}
      </div>
      <div style={{padding:10}}>
      <Link to={"/signup"}><Nav.Link style={{fontFamily: "HMSans-Regular, sans-serif",fontSize:15}}  href="#pricing">S'inscrire</Nav.Link></Link>      </div>
      <div style={{padding:'0px 0px 0px 200px'}}>
      <Link to={"/add"}><button style={{height:50,width:400,fontFamily:"cursive",fontSize:25,color:"black",backgroundColor:"#CC4E5C"}} variant="success">Je fais un don</button>{' '}</Link>  
      </div>
      
      </div> 
    </Nav>
    </Container>
  </Navbar>

  
    </header>
    </div>
  )
}

export default Navigation