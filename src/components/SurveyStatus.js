import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

const SurveyStatus = ({ name }) => (
  <Container text>
    <Header as="h2">{name}</Header>
  </Container>
);

export default SurveyStatus;
