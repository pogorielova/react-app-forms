import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import BookingForm from "./containers/BookingForm";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav>
        <Link to="/" className='nav-link'>Registration</Link>
        <Link to="/booking" className='nav-link'>Booking form</Link>
      </Nav>
      <Switch>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/booking" component={BookingForm} />
      </Switch>
    </div>
  );
}

export default App;
