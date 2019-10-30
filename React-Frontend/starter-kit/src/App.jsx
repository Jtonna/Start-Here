import React from 'react';
import NavagationBar from "./components/Shared/NavagationBar.jsx";

// Were probably going to need some crazy routing so were going to use BrowserRouter to use delcartive routing
// https://reacttraining.com/react-router/web/api/Route
import {BrowserRouter as Router} from "react-router-dom";

// Imports List Of Routes so this file doesnt get cluttered with future expansion
import {ListOfPublicRoutes} from './util/ListOfRoutes.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavagationBar />
        Main App Lives Here
        {/* We will eventually check to see if the user is authenticated, if so they get user routes, if they are an admin, they get admin routes. else they get public*/}
        <ListOfPublicRoutes />
      </div>
    </Router>
  );
}

export default App;
