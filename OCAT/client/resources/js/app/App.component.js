import React, {useState, useEffect}from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardBulletin  from "../components/Dashboard/bulletin";
import AssessmentNew from "../components/Assessments/new";
import AssessmentList from "../components/Assessments/list";
import Login from "../components/Users/Login"
import Register from "../components/Users/Register"
import NavBar from "../components/Dashboard/navbar";
import { AssessmentsContextProvider } from "../components/shared/services/assessment.service";
import axios from 'axios';

export function App() {
  //authentication routes
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  useEffect(() => {
    isAuth();
  })

  //Checks authentication on page refresh
  async function isAuth(){
    try{
      const response = await axios.get("http://localhost:3000/user/is-verify", {
        headers: {
          token: localStorage.token
        }
      });
      console.log(response.data);

      response.data === true ? setIsAuthenticated(true): setIsAuthenticated(false);
    }catch(err){
      console.error(err.message);
    }
  }

  return (
    <AssessmentsContextProvider>
    <div>
      <NavBar isAuthenticated={isAuthenticated}/>
      <main className="container">
        {/* Switch for routes */}
        <Switch>
          <Route path="/assessment/new" render={props => isAuthenticated ? <AssessmentNew {...props}/> : <Redirect to="/login"/> } />
          <Route path="/assessment/list" render={props => isAuthenticated ? <AssessmentList {...props}/> : <Redirect to="/login"/> }/>
          <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/"/> }/>
          <Route path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth}/> : <Redirect to="/"/> }/>
          <Route path="/" render={props => isAuthenticated ? <DashboardBulletin {...props} setAuth={setAuth}/> : <Redirect to="/login"/> }/>
        </Switch>
      </main>
    </div>
    </AssessmentsContextProvider>
    
  );
}
