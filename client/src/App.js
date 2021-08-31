import React from "react"
import {Switch, Route} from "react-router-dom"
import Login from "./components/Login/login"
function App() {
  return (
    <Switch>
      <Route path= "/" component={Login}/>
    </Switch>
  );
}

export default App;
