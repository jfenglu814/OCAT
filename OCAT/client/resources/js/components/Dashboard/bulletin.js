import React from "react";
import { Link, NavLink } from "react-router-dom";

export class DashboardBulletin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div>
        <h1 className="font-weight-light display-1 text-center">
          OCAT Dashboard
        </h1>
        <ul>
          <li>
            <Link to="/assessment/new">New Assessment</Link>
          </li>
          <li>
            <Link to="/assessment/list">Assessment List</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
