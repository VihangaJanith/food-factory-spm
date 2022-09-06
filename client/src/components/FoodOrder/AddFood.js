import React,{useState} from "react"
import axios from "axios";
import { Form } from "react-bootstrap";
import './food.css'

const AddFood = ()=>{

     const [validated, setValidated] = useState(false);



     const[foodName,setName]=useState("");
     const[description,setDescription]=useState("");
     const[price,setPrice]=useState("");
     const[,setMessage]=useState("");
     const[foodImage,setFileName]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

else{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("foodName",foodName);
       formData.append("description",description);
       formData.append("price",price);
       formData.append("foodImage",foodImage);
   
       setName("");
       setDescription("");
       setPrice("");
       
   
       axios
       .post("http://localhost:5000/food/admin/add",formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       window.location.replace("/food/add");
       alert("New Food Added Successful")
      }
      setValidated(true);
   };
    return (
      <div className=""> 
      <div>
      <br/>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Food</h2>





          
          <Form noValidate validated={validated} class="signup-form" onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group" controlId="validationCustom01">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Food Name"
                name="foodName"
                value={foodName}
                onChange={(e)=>setName(e.target.value)}
                required
              />
               <Form.Control.Feedback type="invalid">
              Please provide a valid Name. 
            </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                rows="6"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Description
            </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please provide Price 
            </Form.Control.Feedback>
            </div>

            <lable class="label-title"><b>Add an Image*</b>
            <div class="mb-3">
            <input class="form-control" required type="file" id="formFile" filename="foodImage" onChange={onChangeFile}/>
            <Form.Control.Feedback type="invalid">
              Please provide Image. 
            </Form.Control.Feedback>
            </div></lable>

            <button className="btn btn-primary btn-block">Done</button>
          </Form>
        </div>
      </div>
      </div>
      <br/>
      </div>
    );
};

export default AddFood;