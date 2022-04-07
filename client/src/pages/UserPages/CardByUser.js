import React from 'react'
import {Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { deleteDon } from '../../redux/actions/user'
function CardByUser({donuser}) {
    const dispatch=useDispatch()
  return (
    <div style={{height:1000}}> 
  <Card style={{ width: '20rem',height:'30rem' }}>
      <Card.Img variant="top" src={donuser.img} />
  <Card.Body>
    <Card.Title style={{fontFamily: "cursive"}}> {donuser.name}</Card.Title>
    <Card.Text style={{fontFamily: "cursive"}}>
     {donuser.description}
    </Card.Text>
    <Card.Text style={{fontFamily: "cursive"}}>Email de contact: 
     {donuser.email}
    </Card.Text>
    <Card.Text style={{fontFamily: "cursive"}}>
     Date de publication: {donuser.datepublication}
    </Card.Text>

    <div style={{display:"flex",justifyContent:"space-around"}}>
    <button style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black"}} variant="primary" onClick={()=> dispatch (deleteDon(donuser._id)) }>Supprimer</button>

    <LinkContainer style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black"}} to={`/edit/${donuser._id}`}><button  variant="primary" >Editer</button></LinkContainer>
    </div>
  </Card.Body>
  
</Card>
    </div>
  )
}

export default CardByUser