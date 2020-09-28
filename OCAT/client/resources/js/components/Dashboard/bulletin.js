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
        <h1>OCAT Dashboard</h1>
        <ul>
          <li>
            <Link to="/assessment/new">new assessment</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
