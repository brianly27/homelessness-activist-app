import React from "react";
import { Container } from "semantic-ui-react";
import ClientListItem from "../components/ClientListItem";

const ClientsList = () => (
  <Container>
    <ul>
      <ClientListItem />
      <ClientListItem />
      <ClientListItem />
      <ClientListItem />
    </ul>
  </Container>
);

export default ClientsList;
