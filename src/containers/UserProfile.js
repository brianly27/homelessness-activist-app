import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import UserCard from "../components/UserCard";
import ClientsList from "./ClientsList";
import { NavLink } from "react-router-dom";

import ClientListItem from "../components/ClientListItem";

class UserProfile extends Component {
  //props include user.user: {}  and user.clients: [{},{}]

  //write a method to map over
  // componentDidMount() {
  //   this.renderClients();
  // }

  renderClients = () => {
    const clientComponents = this.props.userData.clients.map(client => {
      return (
        <NavLink to={`/clients/${client.id}`}>
          <ClientListItem
            id={client.id}
            firstName={client.first_name}
            lastName={client.last_name}
            alias={client.last_name}
            handleClick={this.props.navigateToClient}
          />
        </NavLink>
      );
    });
    return clientComponents;
  };
  render() {
    const { clients, user } = this.props.userData;

    //send an empty string if any of these values are null
    const firstName = user ? user.first_name : "";
    const lastName = user ? user.last_name : "";
    const email = user ? user.email : "";
    const cellphone = user ? user.cellphone : "";
    const numberOfClients = clients ? clients.length : "";
    return (
      <Container>
        <UserCard
          firstName={firstName}
          lastName={lastName}
          email={email}
          cellphone={cellphone}
          numberOfClients={numberOfClients}
        />
        {clients ? this.renderClients() : null}
        {/* <ClientsList
          clients={clientsList}
          navigateToClient={navigateToClient}
        /> */}
      </Container>
    );
  }
}
export default UserProfile;

//write a method that maps over clients array and renders ClientListItem
//add an onClick event that calls navigateToClient
//call this method in componentDidMount

// componentDidMount() {
//   this.renderClients();
// }

// renderClients = () => {
//   console.log(this.props.clients);
// };
