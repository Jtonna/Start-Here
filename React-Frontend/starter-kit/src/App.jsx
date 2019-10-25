import React from 'react';
import NavagationBar from "./components/Shared/NavagationBar.jsx";
import {Route} from "react-router-dom";

import PublicIndex from "./components/public/PublicIndex";
import Login from "./util/auth/Login"

// Imports components
// import ListOfRoutes from './util/ListOfRoutes.js';

function App() {
  return (
    <div className="App">
      <NavagationBar />
      <Route exact path="/" component={PublicIndex} />
			<Route path="/login" component={Login} />
      Main App Lives Here
    </div>
  );
}

export default App;
