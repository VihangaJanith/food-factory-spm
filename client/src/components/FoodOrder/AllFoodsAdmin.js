import React, { Component } from "react";
import axios from "axios";
import './food.css'

export default class AllFoodAdmin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          foods: [],
        };
      }
    
      componentDidMount() {
        this.retrievefood();
      }
    
      retrievefood() {
        axios.get("http://localhost:5000/food").then((res) => {
          if (res.data.success) {
            this.setState({
              foods: res.data.existingFood,
            });
          }
        });
      }
    
    
      filterData(foods, searchkey) {
        const result = foods.filter(
          (post) =>
            post.foodName.toLowerCase().includes(searchkey) ||
            post.foodName.toUpperCase().includes(searchkey)
        );
        this.setState({ foods: result });
      }
    
      handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
    
        axios.get("http://localhost:5000/food").then((res) => {
          if (res.data.success) {
            this.filterData(res.data.existingFood, searchkey);
          }
        });
      };
    

      onDelete = (id) =>{
        if(window.confirm("Confirm Delete")){
              axios.delete(`http://localhost:5000/food/admin/delete/${id}`).then((res)=>{
      
              alert("success Deleted");
              this.retrievefood();
          })}}


      render() {
    return(
      <div>
        <div >


<div     
              style={{
                
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
                
              }}
            >
              <button
              style={{marginLeft:"30px"}}
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i><a style={{textDecoration:"none",color:"white"}} href="/food/addfood">Add New Food</a>
                  </button>
           <div  style={{float:"right",marginRight:"20px"}}>
                    <input
                      id="search-input"
                      type="search"
                      style={{width:"400px"}}
                      placeholder="Search Food"
                      onChange={this.handleSearchArea}
                    />
                 
                  <button
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                  </div>
            </div>
           


            
           <br/> <br/>
 

<table class="table">
  <thead>
    <tr>
      <th scope="col">Food ID</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.foods.map((food, idx) => (
    <tr>
      <td>Ch_0{idx + 1}</td>
      <td>{food.foodName}</td>
      <td>{food.description}</td>
      <td>{food.price}</td>
      <td><button><a href={`/food/editfood/${food._id}`}>Edit</a></button>
      <button onClick={()=>this.onDelete(food._id)}>Delete</button></td>
  
    </tr>
  ))}
  </tbody>
</table>




<br/><br/>
</div>
        </div>
   );
}
}


