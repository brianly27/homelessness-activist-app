import React from "react";
import { Header, Image } from "semantic-ui-react";

const ClientListItem = ({ id, firstName, lastName, alias, handleClick }) => (
  <Header as="h3" onClick={() => handleClick(id)}>
    <Image
      circular
      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
    />
    <Header.Content>{`${firstName} ${lastName} aka ${alias}`}</Header.Content>
  </Header>
);

export default ClientListItem;
