import React from 'react';
import NavagationBar from "./components/Shared/NavagationBar.jsx";

// Imports List Of Routes so this file doesnt get cluttered with future expansion
import ListOfRoutes from './util/ListOfRoutes.js';

function App() {
  return (
    <div className="App">
      <NavagationBar />
      Main App Lives Here
      <ListOfRoutes />
    </div>
  );
}

export default App;
