import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTable from './components/Table Booking/AddTable';
import TableMenu from './components/Table Booking/TableMenu';
import BookTable from './components/Table Booking/BookTable';
import Register from './components/User/Register';
import Login from './components/User/login';
import Profile from './components/User/profile';
import AllTable from './components/Table Booking/AllTable';
import AllBookings from './components/Table Booking/AllBookings';
import EditTable from './components/Table Booking/EditTable';
import MyBookings from './components/Table Booking/MyBookings'
import BookingReport from './components/Table Booking/BookingReport';
import Footer from './components/Footer';
import FoodMenu from './components/FoodOrder/FoodList';
import AddFood from './components/FoodOrder/AddFood';
import OrderFood from './components/FoodOrder/OrderFood';
import AllOrders from './components/FoodOrder/AllOrders';
import AllFoodAdmin from './components/FoodOrder/AllFoodsAdmin';
import EditFood from './components/FoodOrder/EditFood';


import Posts from './components/Table Booking/ex.js';
import Edit from './components/User/update';


function App() {


console.log(window.location.pathname)
 






  return (
    <div >
      <Navbar/>
      <Router>

        <Routes>
          
          <Route path="/addtable" element={<AddTable/>} />
          <Route path="/tablemenu" element={<TableMenu/>} />
          <Route path="/booktable/:name" element={<BookTable/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/alltable" element={<AllTable/>} />
          <Route path="/allbookings" element={<AllBookings/>} />
          <Route path="/edittable/:id" element={<EditTable/>} />
          <Route path="/mybookings" element={<MyBookings/>} />
          <Route path="/bookingreport" element={<BookingReport/>} />
          <Route path="/" element={<FoodMenu/>} />
          <Route path="/food/order/:id" element={<OrderFood/>} />
          <Route path="/food/add" element={<AddFood/>} />
          <Route path="/food/allorders" element={<AllOrders/>} />
          <Route path="/food/allfood" element={<AllFoodAdmin/>} />
          <Route path="/edit" element={<Edit/>} />

          <Route path="/posts" element={<Posts/>} />
=======
          <Route path="/food/edit/:id" element={<EditFood/>} />
         

          

        </Routes>
      </Router>

      {window.location.pathname === "/tablemenu" || window.location.pathname === "/posts"?  null : <Footer/>}

    

      




     
    </div>
  );
}

export default App;
