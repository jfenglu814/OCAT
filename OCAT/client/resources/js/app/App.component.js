import React, {useState}from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { DashboardBulletin } from "../components/Dashboard/bulletin";
import AssessmentNew from "../components/Assessments/new";
import AssessmentList from "../components/Assessments/list";
import Login from "../components/Users/Login"
import Register from "../components/Users/Register"
import NavBar from "../components/Dashboard/navbar";
import { AssessmentsContextProvider } from "../components/shared/services/assessment.service";

export function App() {
  //authentication routes
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <AssessmentsContextProvider>
    <div>
      <NavBar />
      <main className="container">
        {/* Switch for routes */}
        <Switch>
          <Route path="/assessment/new" component={AssessmentNew} />
          <Route path="/assessment/list" render={props => !isAuthenticated ? <AssessmentList {...props}/> : <Redirect to="/login"/> }/>
          <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/"/> }/>
          <Route path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth}/> : <Redirect to="/login"/> }/>
          <Route path="/" render={props => isAuthenticated ? <DashboardBulletin {...props} setAuth={setAuth}/> : <Redirect to="/login"/> }/>
        </Switch>
      </main>
    </div>
    </AssessmentsContextProvider>
    
  );
}
