import React from "react";
import Main from "./components/main.js";
import Projects from "./components/projects.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App(){
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}
