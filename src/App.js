import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from './Components/HomePage';
import DonateBookForm from './Components/DonateBookForm';
import YourDonations from './Components/YourDonations';

function App() {
  return (
    <Router>
      <div>
        <Route exact path = "/" component={HomePage}/>
        <Route exact path = "/donatebook" component={DonateBookForm}/>
        <Route exact path = "/yourdonations" component={YourDonations}/>
      </div>
    </Router>
  );
}export default App;