import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./containers/NavBar";
import UserProfile from "./containers/UserProfile";
import ClientProfile from "./containers/ClientProfile";
import ClientsTable from "./containers/ClientsContainer";
import CreateClient from "./containers/CreateClient";

class App extends Component {
  state = {
    userId: 1,
    userData: {},
    clients: [],
    client: {}
  };

  componentDidMount() {
    this.fetchClients();
    this.fetchUser();
  }

  fetchClients = () => {
    fetch("http://localhost:3000/clients")
      .then(res => res.json())
      .then(clients => {
        this.setState({
          clients
        });
      });
  };

  fetchUser = () => {
    const { userId } = this.state;
    fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          userData
        });
      });
  };

  navigateToClient = id => {
    this.findClient(id);
    return <Redirect to={`/clients/${id}`} />;
  };

  findClient = id => {
    const client = this.state.clients.find(client => client.id === id);
    this.setState({
      client
    });
  };

  render() {
    const { clients, client, userData } = this.state;
    const { navigateToClient } = this;
    return (
      <Router>
        <NavBar />
        <Route
          path="/all_clients"
          render={props => (
            <ClientsTable
              {...props}
              clients={clients}
              navigateToClient={navigateToClient}
            />
          )}
        />
        <Route
          path="/clients/:id"
          render={props => <ClientProfile {...props} clients={client} />}
        />
        <Route
          path="/user"
          render={props => (
            <UserProfile
              {...props}
              navigateToClient={navigateToClient}
              userData={userData}
            />
          )}
        />
        {/* create client */}
        <Route
          path="/create_client"
          render={props => (
            <CreateClient {...props} navigateToClient={navigateToClient} />
          )}
        />
        {/* <Resource Container /> */}
      </Router>
    );
  }
}

export default App;
