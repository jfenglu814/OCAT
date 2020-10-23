import React, {useState, useEffect}from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import DashboardBulletin  from "../components/Dashboard/bulletin";
import AssessmentNew from "../components/Assessments/new";
import AssessmentList from "../components/Assessments/list";
import Login from "../components/Users/Login"
import Register from "../components/Users/Register"
import NavBar from "../components/Dashboard/navbar";
import { AssessmentsContextProvider } from "../components/shared/services/assessment.service";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  //authentication check to reroute pages depending if logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  toast.configure({
    autoClose: 4000,
    hideProgressBar: true,
  });

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  //On page reload
  useEffect(() => {
    isAuth();
  })

  //Checks authentication on page refresh
  async function isAuth(){
    try{
      //Checks if token is valid with backend
      const response = await axios.get("http://localhost:3000/user/is-verify", {
        headers: {
          token: localStorage.token
        }
      });
      
      //if token is valid, authentication is true or else it's false
      response.data === true ? setIsAuthenticated(true): setIsAuthenticated(false);
    }catch(err){
      console.error(err.message);
    }
  }

  return (
    
    <div>
      <NavBar isAuthenticated={isAuthenticated}/>
      <main className="container">
        {/* Switch for routes */}
        <AssessmentsContextProvider>
        <Switch>
          <Route path="/assessment/new" render={props => isAuthenticated ? <AssessmentNew {...props}/> : <Redirect to="/login"/> } />
          <Route path="/assessment/list" render={props => isAuthenticated ? <AssessmentList {...props}/> : <Redirect to="/login"/> }/>
          <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/"/> }/>
          <Route path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth}/> : <Redirect to="/"/> }/>
          <Route path="/" render={props => isAuthenticated ? <DashboardBulletin {...props} setAuth={setAuth}/> : <Redirect to="/login"/> }/>
        </Switch>
        </AssessmentsContextProvider>
      </main>
    </div>
    
    
  );
}
