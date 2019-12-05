import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

const SurveyAddResource = ({
  clientId,
  resourceId,
  name,
  description,
  handleAddResource,
  setSurveyStatus
}) => (
  <Container>
    <Header as="h3">{name}</Header>
    <p>{description}</p>
    <Button
      onClick={() => {
        handleAddResource(clientId, resourceId);
        setSurveyStatus();
      }}
    >{`Add ${name} to list of resources needed`}</Button>
  </Container>
);

export default SurveyAddResource;
