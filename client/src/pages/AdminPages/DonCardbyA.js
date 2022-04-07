import React from 'react'
import { Card,} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteDon } from '../../redux/actions/admin'

function DonCardbyA({mondonA}) {
    const dispatch=useDispatch()
    
  return (
      <div style={{padding:20}}>
  <Card style={{ width: 400,height:750 }}>
      <div>
      <Card.Img variant="top" src={mondonA.img} />
      </div>
  <Card.Body>
  <div>
    <Card.Title style={{fontFamily: "cursive"}}>{mondonA.name}</Card.Title>
    </div>
    <div>
    <Card.Text style={{fontFamily: "cursive"}}> 
     {mondonA.description}
    </Card.Text>
    </div>
    <div>
    <Card.Text style={{fontFamily: "cursive"}}>
     Date de publication: {mondonA.datepublication}
    </Card.Text>
    </div>
    <div>
    <Card.Text style={{fontFamily: "cursive"}}>
    Email de contact: {mondonA.email}
    </Card.Text>
    </div>
  
    <div style={{padding:20}}>
    <button style={{fontFamily: "cursive",backgroundColor:"#CC4E5C",color:"black",width:200}} variant="primary" onClick={()=> dispatch (deleteDon(mondonA._id)) }>Supprimer</button>
    </div>
  </Card.Body>
  
</Card>
    </div>
  )
}

export default DonCardbyA