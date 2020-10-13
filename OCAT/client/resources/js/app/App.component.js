import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { DashboardBulletin } from "../components/Dashboard/bulletin";
import AssessmentNew from "../components/Assessments/new";
import AssessmentList from "../components/Assessments/list";
import NavBar from "../components/Dashboard/navbar";
import { AssessmentsContextProvider } from "../components/shared/services/assessment.service";

export function App() {
  return (
    <AssessmentsContextProvider>
    <div>
      <NavBar />
      <main className="container">
        {/* Switch for routes */}
        <Switch>
          <Route path="/assessment/new" component={AssessmentNew} />
          <Route path="/assessment/list" component={AssessmentList} />
          <Route path="/" exact component={DashboardBulletin} />
        </Switch>
      </main>
    </div>
    </AssessmentsContextProvider>
    
  );
}
