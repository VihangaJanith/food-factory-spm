import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

function TableMenu() {
    const [tables, setTables] = useState();



    useEffect (() => {
           axios.get('http://localhost:5000/table/').then(res => {
               setTables(res.data)
               console.log(res.data)
           })
       },[])
  return (
    <div>

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
  )
}

export default TableMenu