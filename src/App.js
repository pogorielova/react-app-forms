import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import RegistrationForm from "./containers/RegistrationForm";
import BookingForm from "./containers/BookingForm";
import MoviesTable from "./containers/MoviesTable";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav>
        <Link to="/" className='nav-link'>Registration</Link>
        <Link to="/booking" className='nav-link'>Booking form</Link>
        <Link to='/movies' className='nav-link'>Some movies</Link>
      </Nav>
      <Switch>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/booking" component={BookingForm} />
        <Route path="/movies" component={MoviesTable} />
      </Switch>
    </div>
  );
}

export default App;
