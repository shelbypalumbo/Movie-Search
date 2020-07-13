import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  console.log("hello");
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/Home" component={Home} />
    </Router>
  );
}

export default App;
