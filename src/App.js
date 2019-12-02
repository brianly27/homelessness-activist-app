import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./containers/NavBar";
import UserProfile from "./containers/UserProfile";
import ClientProfile from "./containers/ClientProfile";
import ClientsTable from "./containers/ClientsContainer";
import ActionContainer from "./containers/ActionStatus";
import CreateClient from "./containers/CreateClient";

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
        <Route
          path="/all_clients"
          render={props => (
            <ClientsTable {...props} clients={this.state.clients} />
          )}
        />
        <Route
          path="/clients/:id"
          render={props => (
            <ClientProfile {...props} clients={this.state.clients} />
          )}
        />
        <Route path="/user" render={props => <UserProfile {...props} />} />
        {/* create client */}
        <Route
          path="/create_client"
          render={props => <CreateClient {...props} />}
        />
        {/* <Resource Container /> */}
      </Router>
    );
  }
}

export default App;
