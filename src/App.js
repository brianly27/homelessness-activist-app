import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./containers/NavBar";
import UserProfile from "./containers/UserProfile";
import ClientProfile from "./containers/ClientProfile";
import ClientsTable from "./containers/ClientsContainer";

class App extends Component {
  state = {
    user_id: null,
    clients: []
  };
  componentDidMount() {
    fetch("http://localhost:3000/clients")
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/all_clients" render={() => <ClientsTable />} />
        <Route path="/client" render={() => <ClientProfile />} />
        <Route path="/user" render={() => <UserProfile />} />
        {/* <Resources />
      <Actions /> */}
      </Router>
    );
  }
}

export default App;
