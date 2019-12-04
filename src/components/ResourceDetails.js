import React from "react";
import { Header, Segment } from "semantic-ui-react";

const ResourceDetails = ({ name, description }) => (
  <div>
    <Header as="h2" attached="top">
      {name}
    </Header>
    <Segment attached>{description}</Segment>
  </div>
);

export default ResourceDetails;
