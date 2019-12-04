import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ResourceDetails from "../components/ResourceDetails";

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
    const resources = this.props.resources ? this.props.resources : "";
    return (
      <Container>
        {resources ? this.renderResource() : null}
        <p>action status</p>
      </Container>
    );
  }
}
export default ActionStatus;
