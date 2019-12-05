import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
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
    resourcesData: null
  };

  componentDidMount() {
    this.fetchClients();
    this.fetchUser();
    this.fetchResources();
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
    this.setState({
      clients: [...this.state.clients, client] //check if this is right
    });
  };

  //propbably have to fetch resrouce name and description based on array of resource ids | find unique ids
  fetchResources = () => {
    fetch("http://localhost:3000/resources")
      .then(res => res.json())
      .then(resourcesData => {
        this.setState({
          resourcesData
        });
      });
  };

  handleAddResource = (clientId, resourceId) => {
    this.fetchClientResource(clientId, resourceId).then(updatedClient => {
      console.log(updatedClient);
      this.setState(prevState => ({
        clients: prevState.clients.map(client =>
          client.id === updatedClient.id ? updatedClient : client
        ) //check if this is right
      }));
    });
  };

  fetchClientResource = (clientId, resourceId) => {
    return fetch("http://localhost:3000/clients_resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        clientId,
        resourceId
      })
    }).then(resp => resp.json());
  };

  handleAddAction = (actionId, clientId) => {
    this.fetchClientAction(actionId, clientId).then(updatedClient => {
      this.setState(prevState => ({
        clients: prevState.clients.map(client =>
          client.id === updatedClient.id ? updatedClient : client
        ) //check if this is right
      }));
    });
  };

  fetchClientAction = (actionId, clientId) => {
    return fetch("http://localhost:3000/clients_actions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        actionId,
        clientId
      })
    }).then(resp => resp.json());
  };

  handleUpdateAction = (clientActionId, body) => {
    console.log(body);
    this.fetchClientActionUpdate(clientActionId, body).then(updatedClient => {
      this.setState(prevState => ({
        clients: prevState.clients.map(client =>
          client.id === updatedClient.id ? updatedClient : client
        ) //check if this is right
      }));
    });
  };

  fetchClientActionUpdate = (clientActionId, body) => {
    return fetch(`http://localhost:3000/clients_actions/${clientActionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        clientActionId,
        body
      })
    }).then(resp => resp.json());
  };
  //also retreive actions related to each resource
  //

  render() {
    const { clients, userData, resourcesData } = this.state;
    const {
      navigateToClient,
      addNewClientToState,
      fetchClients,
      handleAddAction,
      handleUpdateAction,
      handleAddResource
    } = this;
    return (
      <Router>
        <Grid divided="vertically">
          <Grid.Row>
            <NavBar />
          </Grid.Row>

          <Grid.Row centered>
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
              render={props => (
                <ClientProfile
                  {...props}
                  clients={clients}
                  fetchClients={fetchClients}
                  resourcesData={resourcesData}
                  handleAddAction={handleAddAction}
                  handleUpdateAction={handleUpdateAction}
                  handleAddResource={handleAddResource}
                />
              )}
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
          </Grid.Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
