import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Restcard({rest}) {
  return (
    <div>   
         <Link to={`/rest/${rest.id}`} style={{textDecoration:"none"}}>
             <Container>
        <Card className="my-4">
          <Card.Img variant="top" src={rest.photograph} alt="Card Image" className="img-square p-2" />
          <Card.Body>
            <Card.Title>{rest.name}</Card.Title>
            <hr />
            <Row className=''> 
              <Col md={4}>
                <Card.Text>{rest.neighborhood}</Card.Text>
              </Col>
              <Col md={4}>
    </Col>
              <Col md={4}>
                <Card.Text >{rest.cuisine_type}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
         </Link>
</div>
  )
}

export default Restcard