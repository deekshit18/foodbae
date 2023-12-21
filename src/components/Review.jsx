import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({revw}) {
  const [open, setOpen] = useState(false);
console.log(revw);
  return (
    <>
    <Button className='btn' onClick={() => setOpen(!open)}>
      Review
    </Button>

<Collapse in={open}>
<div className='mt-5'>

       {revw?.length>0?
       revw?.map((item)=>(<>
          <hr />
          <h6>Name:{item.name} - Date:{item.date}</h6>
          <p>Rating :{item.rating}</p>
          <p>Description:{item.comments}</p>
          </>   ))
        
      :<p>No Review</p>}
              </div>

      </Collapse>


    </>
  )
}

export default Review