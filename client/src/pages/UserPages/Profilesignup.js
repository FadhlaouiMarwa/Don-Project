import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Profilesignup = () => {
const load=useSelector(state=>state.userReducer.load)
  const isAuth=useSelector(state=>state.userReducer.isAuth)
//   const user=useSelector(state=>state.userReducer.user)
  return (
    <div style={{height:465}}>
          
      {load? <p>Loading</p> :
      isAuth?
      <div style={{display:"flex"}}>
        <div>
        <img style={{width:700,height:400}} src="https://img.freepik.com/free-photo/young-caucasian-man-isolated-pink-bakcground-pointing-with-finger-you-as-if-inviting-come-closer_1187-173762.jpg?w=740"/>
        </div>
        <div>

        <div style={{padding:100}}>
        <h2  style={{fontFamily:  "cursive"}}>Confirmation de votre compte
        <br/>
        Bravo, votre compte est validé !</h2> 
        </div>
        <div>
        <Link to={"/profile"}><a style={{fontSize:25,fontFamily: "Arima Madurai"}} href="Voir votre profile">Voir votre profil</a></Link>
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

export default Profilesignup