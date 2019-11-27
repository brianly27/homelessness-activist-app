import React from "react";
import { Header, Image } from "semantic-ui-react";

const ClientListItem = () => (
  <Header as="h3">
    <Image
      circular
      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
    />{" "}
    Patrick
  </Header>
);

export default ClientListItem;
