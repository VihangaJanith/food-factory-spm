import React , {useState}from 'react'
import axios from 'axios'
import { Form } from "react-bootstrap";

function AddTable() {
    const [name , setName] = useState('');
    const [description, setDescription] = useState('');
    const [users, setUsers] = useState('');
    const [image, setImage] = useState('');

    const [validated, setValidated] = useState(false);

    const addTable = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
    else{
    
        const newStudent = {
            name,
            description,
            users,
            image,
        }
    
        axios.post('http://localhost:5000/table/add', newStudent).then((res)=>{
            console.log(res.data)
            alert("Table Added")
            
        })
    
    
    }
    setValidated(true);
}




  return (
    <div className="one">
        <div className="formw">
            <h1>Add New Table</h1>
            <hr/>

            <Form noValidate validated={validated} onSubmit={(e) => addTable(e)}>
            <div>
                <label  for="name">Name</label>
            <input type="text"
            id="name"
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid" className=" mb-2">
              Please provide a valid Name
            </Form.Control.Feedback>
</div>



            <div>
            <label  for="description">Description</label>
<input type="text"
            id="description"
            className="form-control mb-3"
            placeholder="Description"
            value={description} 
            onChange={(e)=> setDescription(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid"className=" mb-2">
              Please provide a description
            </Form.Control.Feedback>
</div>

            <div>
            <label  for="users">How Many People can use the table </label>
<input type="text"
            id="users"
            className="form-control mb-3"
            placeholder="Size of People"
            value={users}
            onChange={(e)=> setUsers(e.target.value)} 
            required />
            <Form.Control.Feedback type="invalid" className=" mb-2">
              Please provide user count
            </Form.Control.Feedback>
</div>

            <div>

            <label  for="image">Image</label>
            <input type="text"
            id="image"
            className="form-control mb-3"
            placeholder="Image"
            value={image} 
            onChange={(e)=> setImage(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid"className=" mb-2">
              Please provide an image
            </Form.Control.Feedback>

</div>
            <button style={{width:"100%"}} type="submit" className="button1" > Add Table</button>


        </Form>

        </div>


    </div>
  )
}

export default AddTable