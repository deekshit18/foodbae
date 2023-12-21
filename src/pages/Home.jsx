import React, { useEffect } from 'react'
import Restcard from '../components/Restcard'
import { Col, Row } from 'react-bootstrap'
import { fetchfood } from '../redux/foodslice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const allrest=useSelector((state)=>
  state.foodslice.allrest)
  console.log(allrest);
  const dispatch=useDispatch()
useEffect(()=>
{
  dispatch(fetchfood())
},[])

  return (
    <div><Row className="px-5 py-3">
    
   {allrest?.length>0?
   allrest.map((item)=>(
    <Col sm={6} md={4}>
    <Restcard rest={item}/>  
    </Col>
    )):<p>Nothing</p>}

  </Row>
</div>
  )
}

export default Home