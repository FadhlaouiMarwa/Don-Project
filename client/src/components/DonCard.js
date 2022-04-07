import React from 'react'
import {Card,} from 'react-bootstrap'

function DonCard({mondon}) {

  return (
    <div style={{padding:20}}>
      <Card style={{ width: '20rem',height:'40rem' }}>
      <Card.Img variant="top" src={mondon.img} />
  <Card.Body>
    <Card.Title  style={{fontFamily: "cursive"}}>{mondon.name}</Card.Title>
    <Card.Text  style={{fontFamily: "cursive"}}> 
     {mondon.description}
    </Card.Text>
    <Card.Text  style={{fontFamily: "cursive"}}>
     Date de publication: {mondon.datepublication}
    </Card.Text>
    <Card.Text  style={{fontFamily: "cursive"}}>
    Email de contact: {mondon.email}
    </Card.Text>
   
  </Card.Body>
  
</Card>
    </div>
  )
}

export default DonCard