import React from 'react'

function Navbar() {
  return (
    <div>

   <head>
    
      <title>Responsive Navigation Menu</title>
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      
   </head>
   <body>
      <nav>
         <div class="logo">
            Food Factory
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="#">Menu</a></li>
            <li><a href={"/tablemenu"}>Table Booking</a></li>
            <li><a href="#">Inquiry</a></li>
            <li><a href="#">Sign in</a></li>
            
         </ul>
      </nav>
      <div class="content">
         {/* <div>
            Responsive Navigation Menu Bar Design
         </div>
         <div>
            using only HTML & CSS
         </div> */}
      </div>
   </body>



        
    </div>
  )
}

export default Navbar