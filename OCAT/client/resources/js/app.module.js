import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app/App.component";
import AssessmentNew from "./components/assessments/new.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById(`app-root`)
);
