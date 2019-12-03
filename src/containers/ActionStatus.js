import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ResourceDetails from "../components/ResourceDetails";
import Action from "../components/Action";

class ActionStatus extends Component {
  renderResources = () => {
    //map over array of resources and render each resource
    //call renderActions for each resource
    const { resources } = this.props;
    resources.map(resource => {
      this.renderResource(resource);
      const actions = this.filterActions(resource.id);
      this.renderActions(actions);
    });
  };

  renderResource = resource => {
    return (
      <ResourceDetails
        name={resource.name}
        desccription={resource.desccription}
      />
    );
  };

  filterActions = id => {
    // const actions = this.props.actions.filter(action => { action.
    // })
  };

  renderActions = actions => {
    //
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
export default ActionStatus;
