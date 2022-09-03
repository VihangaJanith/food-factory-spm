import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

function BookTable() {

    const [name , setName] = useState('');
    const [tabletype, setTabletype] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');

    const [validated, setValidated] = useState(false);

    const ref = React.useRef();

    const tname = useParams().name;

    const addBooking = async(e) => {
       
        const form = e.currentTarget;
    if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }
else{
    e.preventDefault();
        const booking = {
            name,
            tabletype:tname,
            id,
            date,
            time,
        }
    
      await  axios.post('http://localhost:5000/tablebooking/add', booking).then((res)=>{
            console.log(res.data)
            alert("Booking Added")
            
        })
    
    
    }
    setValidated(true);
}



const reset = () => {
    setName('');
    setTabletype('');
    setId('');
    setDate('');
    setTime('');
    setPhone('');

    };


  return (
    <div className="one" >
        <div className="formw" >
            <h1>Book Table</h1>
            <hr/>

            <Form noValidate validated={validated} onReset={reset} 
             onSubmit={(e) => addBooking(e)}>
          
          <div>
            <label  for="name">Name</label>
            <input type="text"
            id="name"
            className="form-control mb-3"
            placeholder="Your Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name
            </Form.Control.Feedback>
</div>



            <div>
 <label  for="date">Date</label>
<input type="date"
            id="description"
            className="form-control mb-3"
            placeholder="date"
            value={date} 
            onChange={(e)=> setDate(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Date
            </Form.Control.Feedback>
</div>


            <div>


 <label  for="time">Time</label>
<input type="time"
            id="users"
            className="form-control mb-3"
            placeholder="time"
            value={time}
            onChange={(e)=> setTime(e.target.value)} 
            
            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Time
            </Form.Control.Feedback>


</div>


            <div>

 <label  for="Phone">Phone Number</label>
<input type="text"
            id="phone"
            className="form-control mb-3"
            placeholder="Phone Number"
            value={phone} 
            onChange={(e)=> setPhone(e.target.value)} 


            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Phone
            </Form.Control.Feedback>
            
</div>
<div className="row">
            <div className="col">

            <button type="submit"style={{width:"525px"}} className="button1">
                          
                          Book Table
                           </button>
            </div>
            <div className="col">

                           <button type="reset"style={{width:"140px"}} className="button1">
                          
                        Reset
                           </button>
            </div>
            </div>

                           

        </Form>

        </div>

        
    </div>
  )
}

export default BookTable