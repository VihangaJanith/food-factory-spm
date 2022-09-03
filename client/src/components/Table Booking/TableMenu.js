import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

function TableMenu() {
    const [tables, setTables] = useState();
    const [searchkey, setsearchkey] = useState('');



    useEffect (() => {
           axios.get('http://localhost:5000/table/').then(res => {
               setTables(res.data)
               console.log(res.data)


              


               
           })


       },[])



       const filterPackages = async (e) => {
        console.log(searchkey)

        const response = await axios.get(
            'http://localhost:5000/table/'
          );
        const  filteredPackages = response.data.filter((tables) =>
          tables.name.toLowerCase().includes(searchkey)
          );
          if (filteredPackages.length > 0) {
            setTables(filteredPackages);
          }
            else{
                alert("Search Not Found")
            }


    }
   





  return (
    <div style={{justifyContent: 'center'}}  >
    <div  >

      <div  className="container">  
    <div  className="row">

<input type="text" className="form-control col-4 mt-1"  onChange={(e) => {setsearchkey(e.target.value)} }
                 placeholder="Search Tables"   style={{ width: "200px", borderRadius: "10px"}} />
                <div className="col-6 col-md-4">
                 <button className="btn btn-secondary mt-1" style={{marginLeft: "10px"}}
                 onClick={()=>filterPackages(searchkey)}>Search</button>
                
                 </div>

</div>
</div>

{tables && tables.map((table , index) => (
                       <div>

<div class="containerR">
  <div class="cardR">
    <div class="cardR-header" style={{textAlign: 'center'}}>
      <img className='p-2'
      
      src={table.image} alt="rover" />
    
    </div>
    <div class="cardR-body">
    
      <h3 style={{textTransform:"uppercase"}}>
        {table.name}
      </h3>
   
    
<p className='mt-2' scope="row"> {table.description}</p>

    
      <div className="userR" >
     <a href={`/booktable/${table.name}`}>
  <button style={{width:"325px"}} className="button1">
                          
 Book Table
  </button>
</a>

  
      </div>
    </div>
  </div>
  </div>



                       </div>

                    ))}










    </div>
    </div>
  )
}

export default TableMenu