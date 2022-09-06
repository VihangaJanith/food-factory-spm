import React,{useState,useEffect} from "react"
import axios from "axios";
import { Form } from "react-bootstrap";
import {useParams } from "react-router-dom";
//import Select from "react-select";
import './food.css'

const Restration = (props)=>{

    const [validated, setValidated] = useState(false);

    
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // const [quantity1, setQuantity] = useState(1);
    const [foodImage, setFoodimage] = useState("");

// const optionList = [
//   {  value: "Bicycle", label: "Bicycle" },
//   {  value: "Car", label: "Car" },
//   {  value: "Van", label: "Van" },
//   {  value: "Bus", label: "Bus" },
//   {  value: "Lorry", label: "Lorry" },
//   {  value: "Treeweel", label: "Treeweel" },
//   {  value: "Truck", label: "Truck" },
//   {  value: "Tracter", label: "Tracter" }
// ];

// function handleSelect(data) {
//   addfoodOrder({ ...foodOrder, ["model"]: data.value });
  
// } 

  const [foodOrder, addfoodOrder] = useState({
    name: "",
    address: "",
    phone: "",
    foodname:"",
    quantity:1,
    total:''
  });

  const { name,address,phone,foodname,quantity,total} = foodOrder;

  const onInputChange = (e) => {
    addfoodOrder({ ...foodOrder, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
    else{
    e.preventDefault();
    await axios.post("http://localhost:5000/foodorder/add", foodOrder);
    alert("Your Order Successfully Completed")
    window.location.replace("/");
    }
    setValidated(true);
  };

  const { id } = useParams();
  useEffect (() => {
    axios.get(`http://localhost:5000/food/${id}`).then(res => [
        
        addfoodOrder({
          foodname:res.data.food.foodName,
          quantity:1,
          total:res.data.food.price
        }),
        setDescription(res.data.food.description),
        setPrice(res.data.food.price),
        setFoodimage(res.data.food.foodImage)
  ])
  .catch((error) => console.log(error));
},[])

const onclickplus = ()=>{
  if(quantity>=10)
  addfoodOrder({...foodOrder,quantity:10,total:(price*10)})
  else
  addfoodOrder({...foodOrder,quantity:quantity+1,total:(price*(quantity+1))})
}

const onclickminus = ()=>{
  if(quantity<=1)
  addfoodOrder({...foodOrder,quantity:1,total:(price*1)})
  else
  addfoodOrder({...foodOrder,quantity:quantity-1,total:(price*(quantity-1))})
}



    return (
      <div >

    
    <div className="" >

<div class="card-sl" style={{backgroundColor:"hsl(0,0%,75%,0.5)",paddingTop:"20px",paddingBottom:"20px",paddingInlineStart:"50px",paddingInlineEnd:"50px"}}>    
  <div class="card-body" >
       <div class="row" >
          
           <div class="col-md-5" >
               <div class="righta border" style={{backgroundColor:"white",borderRadius:"10px"}}>
                  
               <div class="text-center "> <h2>Your Order Details</h2> </div>
               <hr  class="text-center mb-2"/>
                   <h4 style={{color:"hsl(0,0%,0%,0.6)"}}>{foodname}</h4>
                   <div >
                       <div class="col-12 "><img class="img-fluid" src={`/uploads/${foodImage}`} style={{height:"170px",width:"290px",marginLeft:"70px"}} /></div>
                       
                   </div>
                  
                   <hr/>
                   <div class="row lower">
                       <div class="col text-lefta" style={{fontSize:"12px"}}>{description}</div>
                      
                   </div>
                   <div class="row lower mt-2">
                       <div class="col text-lefta">Price :- Rs. {price}</div>
                       <div class="col text-lefta">Quantity :- <button class="fa fa-minus ml-3 mr-2" style={{border:"0px" , background:"white"}} onClick={onclickminus}>  </button> <input value={quantity} style={{width:"30px",textAlign:"center"}} disabled/> <button class="fa fa-plus ml-2" style={{border:"0px" , background:"white"}} onClick={onclickplus}> </button></div>
                   </div>
                   
                   
                   <hr/>
                   <div class="row lower">
                       <div class="col text-lefta"><b>Total Amount</b></div>
                       <div class="col text-righta ml-5"><b className="ml-5" style={{fontSize:"20px"}}> Rs. {price*quantity}   </b></div>
                   </div>
                   <br/> 
                   <h6 class="text-muted text-center">Apply Terms and Condition</h6>
               </div>
           </div>


           <div class="col-md-7">
           
               <div class="lefta border" style={{backgroundColor:"hsl(0,0%,99% ,0.8",borderRadius:"15px"}}>
              
                   <div class="row"> <span class="text-center mb-1" style={{fontSize:"40px"}}>Delivery Details </span>
                   <div class="d-flex  mb-3">
                   <p class="fw-bold  payicon">We Accept</p>
                       <div >&nbsp;&nbsp; &nbsp;&nbsp; 
                            <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                 </div></div>
                   <Form noValidate validated={validated} onSubmit={onSubmit} encType="multipart/form-data">
           

           <div class="row mb-2" >
   <div class="col">

<div class="input-group mb-3" style={{width:"250px"}}>
 <div class="input-group-prepend">
   <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Food</span>
 </div>
 <input type="text" className="form-control" name="foodname"  value={foodname}   onChange={onInputChange} disabled />
</div></div>

<div class="col" >
<div class="input-group mb-3" style={{width:"140px"}} >
 <div class="input-group-prepend">
   <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Quantity</span>
 </div>
 <input type="text" className="form-control" name="quantity" value={quantity} onChange={onInputChange} disabled   />
</div></div>

<div class="col">
<div class="input-group mb-3" style={{width:"200px"}}>
 <div class="input-group-prepend">
   <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Total Price</span>
 </div>
 
 <input type="text" className="form-control" name="total" value={total} onChange={onInputChange}  disabled  />
</div></div>

</div>


    

<div class="d-flex flex-row align-items-center mb-4">
             
          <label class="form-label fw-bold" style={{width:"300px"}} ><i class="fas fa-plane mr-2"></i> Your Name &nbsp; </label>  
               <div class="form-outline mb-2 col-9">
                  <input 
                   type="text"
                   id="formControlLgXc"
                   class="form-control form-control-lg"
                   value={name}
                   name="name" placeholder="Enter Your Name" required
                   onChange={onInputChange} 
                 />
                <Form.Control.Feedback type="invalid">
             Please provide Your Name
           </Form.Control.Feedback> </div>
              
           </div>


          

           <div class="d-flex flex-row align-items-center mb-4">
        
          <label class="form-label fw-bold" style={{width:"300px"}}> <i class="fas fa-plane mr-2"></i>Your Address</label>  
               <div class="form-outline mb-2 col-9">
                  <input 
                   type="text"
                   id="formControlLgXc"
                   class="form-control form-control-lg"
                   name="address" placeholder="Enter your Address"
                   required ="required"
                   onChange={onInputChange}
                   value={address}
                 /> 
                 <Form.Control.Feedback type="invalid">
             Please provide a address
           </Form.Control.Feedback></div>
              
           </div>

           <div class="d-flex flex-row align-items-center mb-4">
        
          <label class="form-label fw-bold" style={{width:"300px"}}> <i class="fas fa-plane mr-2"></i>Mobile Number</label>  
               <div class="form-outline mb-2 col-9">
                
                  <input 
                   type="tel"
                   id="formControlLgXc"
                   class="form-control form-control-lg"
                   name="phone" placeholder="Enter your phone Number"
                    required ="required"
                    pattern="[0-9]{9,10}"
                    maxLength={10}
                    minLength={9}
                    value={phone}
                    onChange={onInputChange}
                 /> 
                 <Form.Control.Feedback type="invalid">
             Please provide a phone number
           </Form.Control.Feedback></div>
              
           </div>



     

           <button type="submit" class="btn btn-danger btn-lg btn-block" style={{height:"43px"}}><b>Order Now</b></button>
         </Form>

               </div>
           </div>
       </div>
   </div>
   <div> </div>
</div>
    </div>
    
    </div>
    );
};

export default Restration;
