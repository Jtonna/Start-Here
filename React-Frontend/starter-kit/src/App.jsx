import React from 'react';
import NavagationBar from "./components/Shared/NavagationBar.jsx";

// Imports List Of Routes so this file doesnt get cluttered with future expansion
import {ListOfPublicRoutes} from './util/ListOfRoutes.js';

function App() {
  return (
    <div className="App">
      <NavagationBar />
      Main App Lives Here
      {/* We will eventually check to see if the user is authenticated, if so they get user routes, if they are an admin, they get admin routes. else they get public*/}
      <ListOfPublicRoutes />
    </div>
  );
}

export default App;
