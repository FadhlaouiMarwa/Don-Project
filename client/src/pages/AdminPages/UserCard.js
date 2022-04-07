import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteuser } from '../../redux/actions/admin'
function UserCard({user}) {
  const dispatch=useDispatch()
  return (
    
    <div >
        
        <div style={{padding:20}}>
        <Card style={{ width: 400,height:200 }}>
          
    <Card.Body>
      <div>
    <Card.Title style={{fontSize:30,fontFamily: "cursive"}}>{user.lastname} {user.firstname} </Card.Title>
    </div>
    <div>
    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:20,fontFamily: "cursive"}}>L'adresse email:  {user.email}</Card.Subtitle>
    </div>
    <div>
    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:20,fontFamily: "cursive"}}>Le numéro de téléphone: {user.phone}</Card.Subtitle>
    </div>
    <div>
    <button style={{fontSize:18,fontFamily: "cursive",width:150,backgroundColor:"#CC4E5C",color:"black",height:40}} variant="primary" onClick={()=> dispatch (deleteuser(user._id)) }>Supprimer</button>
    </div>
    

  </Card.Body>
</Card>
</div>
    </div>
  )
}

export default UserCard