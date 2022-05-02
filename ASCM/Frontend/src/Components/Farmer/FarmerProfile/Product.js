import React from 'react'
import {Card} from 'react-bootstrap'

const Product = (props) => {
  return (
    <div>
        <Card style={{ width: '12rem' , 	marginRight: '10px'}}>
        <Card.Img variant="top" src="https://5.imimg.com/data5/WT/EQ/BN/SELLER-7734044/fresh-wheat-500x500.png" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
             <span><bold>Category: </bold></span>{props.category} <br/>
             <span><bold>Price: </bold></span>{props.price} <br/>
             <span><bold>Quantity: </bold></span>{props.quantity} <br/>
        </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
        <br></br>
    </div>
  )
}

export default Product