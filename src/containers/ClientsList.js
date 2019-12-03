import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ClientListItem from "../components/ClientListItem";

class ClientsList extends Component {
  render() {
    return (
      <Container>
        <ul>
          <ClientListItem />
          <ClientListItem />
          <ClientListItem />
          <ClientListItem />
        </ul>
      </Container>
    );
  }
}

export default ClientsList;
