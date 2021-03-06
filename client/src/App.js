import React from "react"
import {Switch, Route} from "react-router-dom"
import Login from "./components/Login/login"
import Profile from "./components/Profile/profile";
import SignUp from "./components/SignUp/signup";
//redux
import {Provider} from "react-redux"
import store from "./store";
import Posts from "./components/Posts/posts";


function App() {
  return (
    <Provider store={store}>
    <Switch>
      <Route exact path= "/" component={Login}/>
      <Route exact path= "/sign_up" component={SignUp}/>
      <Route exact path= "/profile" component={Profile}/>
      <Route exact path= "/posts" component={Posts}/>
    </Switch>
    </Provider>
  );
}

export default App;
