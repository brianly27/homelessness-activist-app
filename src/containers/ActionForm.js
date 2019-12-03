import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Action from "../components/Action";

class ActionForm extends Component {
  renderResources = () => {
    //map over array of resources and render each resource
    //call renderActions for each resource
  };

  renderActions = () => {
    //map over array of actions and render an action
  };

  render() {
    return (
      <Container>
        <ul>
          <Action />
        </ul>
      </Container>
    );
  }
}

export default ActionForm;
