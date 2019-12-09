import React from 'react';
import NavagationBar from "./components/Shared/NavagationBar.jsx";

// Were probably going to need some crazy routing so were going to use BrowserRouter to use delcartive routing
// https://reacttraining.com/react-router/web/api/Route
import {BrowserRouter as Router} from "react-router-dom";

// Imports List Of Routes so this file doesnt get cluttered with future expansion
import {ListOfPublicRoutes} from './util/ListOfRoutes.js';

function App() {

  const tokenChecker = () => {

    // If the user has a token
    //     ping the server (CTOS URL)
    //     save the response in a variable
    //     if the response is true 
    //         create a variable isTokenValid
    //         set isValid to True
    //     else
    //         create a variable isTokenValid
    //         set isValid to false
    //
    // return isTokenValid

    const isTokenValid = True
    return isTokenValid
  }

  return (
    <Router>
      <div className="App">
        <NavagationBar />
        Main App Lives Here
        {/* We will eventually check to see if the user is authenticated, if so they get user routes, if they are an admin, they get admin routes. else they get public*/}
        <ListOfPublicRoutes />

        {
          tokenChecker ? (<div>isValid is true</div>):(<div> isValid is false</div>)
        }
      </div>
    </Router>
  );
}

export default App;
