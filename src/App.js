import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AddService from './components/Admin/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import DeleteService from './components/Admin/DeleteService/DeleteService';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Checkout from './components/Home/Services/Checkout/Checkout';
import OrderStatus from './components/Admin/OrderStatus/OrderStatus';
import YourOrder from './components/Home/Services/YourOrder/YourOrder';
import AddReview from './components/Home/Services/AddReview/AddReview';
import DeleteReviews from './components/Admin/DeleteReview/DeleteReviews';
export const userContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard">
            <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/deleteService">
            <DeleteService></DeleteService>
        </PrivateRoute>
        <PrivateRoute path="/OrderStatus">
            <OrderStatus></OrderStatus>
        </PrivateRoute>
        <PrivateRoute path="/yourOrder">
            <YourOrder></YourOrder>
        </PrivateRoute>
        <PrivateRoute path="/addReview">
            <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/deleteReviews">
            <DeleteReviews></DeleteReviews>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;