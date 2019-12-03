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
    resources: []
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
    console.log(id);
    return <Redirect to={`/clients/${id}`} />;
  };

  //create new client methods

  addNewClientToState = client => {
    console.log("before setstate", client);
    this.setState(
      {
        clients: [...this.state.clients, client] //check if this is right
      },
      console.log("after post", this.state.clients)
    );
  };

  //propbably have to fetch resrouce name and description based on array of resource ids | find unique ids
  fetchResources = () => {
    fetch("http://localhost:3000/resources")
      .then(res => res.json())
      .then(resources => {
        this.setState({
          resources
        });
      });
  };

  // fetchClientResources = url => {
  //   return fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       identification,
  //       address,
  //       foodStamps,
  //       busPass,
  //       cellphone,
  //       healthCare,
  //       employmentServices,
  //       notes
  //     })
  //   }).then(resp => resp.json());
  // };

  //also retreive actions related to each resource
  //

  render() {
    const { clients, userData } = this.state;
    const { navigateToClient, addNewClientToState } = this;
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
          render={props => <ClientProfile {...props} clients={clients} />}
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
            <CreateClient
              {...props}
              addNewClientToState={addNewClientToState}
              navigateToClient={navigateToClient}
            />
          )}
        />
        {/* <Resource Container /> */}
      </Router>
    );
  }
}

export default App;
