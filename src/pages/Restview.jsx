import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Review from '../components/Review';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchfood } from '../redux/foodslice';
function Restview() {
    const [show, setShow] = useState(false);
const {id}=useParams()

const allrest=useSelector((state)=>
  state.foodslice.allrest)
  console.log(allrest);
  const dispatch=useDispatch()
useEffect(()=>
{
  dispatch(fetchfood())
},[])


console.log(id);
  const allrests = useSelector((state)=>state.foodslice.allrest.find(item=>item.id==id))
  console.log(allrests);

  useEffect(()=>
  {
    
  },[])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div><Container>
    <Row className="my-4">
      <Col md={4}>
        <img src={allrests?.photograph} alt="Image" className="img-fluid rounded" />
      </Col>
      <Col md={8}>
        <h2 className="text-center">Restaurent Details:</h2>
        <hr />
        <Card className=''>
          <Card.Body>
            <h3 className="text-center">{allrests?.name}</h3>
            <hr />
            <ul className="list-unstyled">
              <li >Neighborhood:{allrests?.neighborhood}</li>
              <hr />

              <li>Cusine Type:{allrests?.cuisine_type}</li>
              <hr />

              <li>Address:{allrests?.address}</li>
            </ul>
            <div className="text-center p-4">
  <Button onClick={handleShow} variant="primary">Operating Hours</Button>{' '}
  <Review revw={allrests?.reviews} style={{ marginLeft: '10px', /* Adjust margin as needed */ }} />
</div>

          </Card.Body>
        </Card>
        <hr />
      </Col>
    </Row>
  </Container>
  
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="list-unstyled">
              <li >Monday:{allrests?.operating_hours.Monday}</li>
              <hr />

              <li >Tuesday:{allrests?.operating_hours.Tuesday}</li>
              <hr />

              <li >Wednesday:{allrests?.operating_hours.Wednesday}</li>
              <hr /> <li >Thursday:{allrests?.operating_hours.Thursday}</li>
              <hr /> <li >Friday:{allrests?.operating_hours.Friday}</li>
              <hr /> <li >Saturday:{allrests?.operating_hours.Saturday}</li>
              <hr /> 
              <li >Sunday:{allrests?.operating_hours.Sunday}</li>
                  </ul>
        </Modal.Body>
      </Modal>

</div>
  )
}

export default Restview