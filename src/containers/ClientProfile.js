import React, { Component } from "react";
import { Container, Button } from "semantic-ui-react";
import ClientCard from "../components/ClientCard";
import SurveyForm from "../components/SurveyForm";
import SurveyStatus from "../components/SurveyStatus";
import ActionUpdate from "../components/ActionUpdate";
import ResourceDetails from "../components/ResourceDetails";
import ActionAdd from "../components/ActionAdd";
import ActionShow from "../components/ActionShow";

class ClientProfile extends Component {
  //if there are no c/r relationships, render survey form
  //if there are c/r relationships, render survey status or survey update

  findClient = () => {
    const href = this.props.location.pathname;
    const id = href.split("/").pop(-1);
    const client = this.props.clients.find(
      client => client.id === parseInt(id)
    );
    return client;
  };

  componentDidMount() {
    // const client = this.findClient();
  }
  state = {
    isSurveyStatus: false,
    isSurveyUpdate: false,
    isSurveyForm: false,
    isActionStatus: true,
    isActionAdd: false,
    isActionUpdate: false
  };

  renderSurveyForm = () => {
    const { client } = this.props;
    const clientResources = client ? client.client_resources : "";
    return <SurveyForm resources={clientResources} />;
  };

  renderSurveyUpdate = () => {
    // return SurveyUpdate, pass props, change state
  };

  renderSurveyStatus = () => {
    // return SurveyStatus, pass props, change state
    const { client } = this.props;
    const clientResources = client ? client.client_resources : "";
    console.log(clientResources);
    //async is causing errors

    // const resourceComponents = clientResources.map(resource => {
    //   return <SurveyStatus resource={resource} />;
    // });
    // return resourceComponents;
  };

  setActionAdd = () => {
    console.log("render add action");
    this.setState({
      isActionStatus: false,
      isActionAdd: true,
      isActionUpdate: false
    });
  };

  setActionStatus = () => {
    console.log("setting action state");
    this.setState({
      isActionStatus: true,
      isActionAdd: false,
      isActionUpdate: false
    });
  };

  setActionEdit = () => {
    this.setState({
      isActionStatus: false,
      isActionAdd: false,
      isActionUpdate: true
    });
  };
  renderActionAdd = (client, resourcesData) => {
    console.log(resourcesData); //[{…}, {…}, {…}, {…}]
    console.log(client.clients_resources); //[{…}, {…}, {…}, {…}]
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.id;
      });
      console.log(resource.name);
      return (
        <>
          <ResourceDetails
            name={resource.name}
            description={resource.description}
          />
          {this.renderAddActions(resource.actions, client.id)}
        </>
      );
    });
    return actionAdd;
  };

  renderAddActions = (actions, clientId) => {
    //post to c/a onClick, and render ActionShow
    const actionComponents = actions.map(action => {
      return (
        <ActionAdd
          clientId={clientId}
          actionId={action.id}
          name={action.name}
          form={action.form}
          readme={action.readme}
          submitAddress={action.submit_address}
          description={action.description}
          locationName={action.location_name}
          contactName={action.contact_name}
          contactEmail={action.contact_email}
          contactPhone={action.contact_phone}
          startDate={""}
          completeDate={""}
          status={""}
          setActionStatus={this.setActionStatus}
          handleAddAction={this.props.handleAddAction}
        />
      );
    });
    return actionComponents;
  };

  handleAddActionClick = () => {
    this.setActionStatus();
    this.props.handleAddAction();
  };

  renderActionStatus = (client, resourcesData) => {
    console.log(resourcesData); //[{…}, {…}, {…}, {…}]
    console.log(client.clients_resources); //[{…}, {…}, {…}, {…}]
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.id;
      });
      console.log(resource.name);
      return (
        <>
          <ResourceDetails
            name={resource.name}
            description={resource.description}
          />
          <Button onClick={() => this.setActionAdd()}>add action</Button>
          {this.renderActionsStatus(resource.actions, client)}
        </>
      );
    });
    return actionAdd;
  };
  renderActionsStatus = (resourceActions, client) => {
    let clientActions = [];
    resourceActions.forEach(resourceAction => {
      const clientActionMatches = client.clients_actions.filter(
        clientAction => {
          return clientAction.id === resourceAction.id;
        }
      );
      clientActionMatches.forEach(clientAction => {
        clientActions.push(clientAction);
      });
    });

    const actionComponents = clientActions.map(clientAction => {
      const matchingAction = resourceActions.find(resourceAction => {
        return resourceAction.id === clientAction.id;
      });
      console.log(clientAction);
      return (
        <ActionShow
          clientId={clientAction.client_id}
          actionId={clientAction.action_id}
          name={matchingAction.name}
          form={matchingAction.form}
          readme={matchingAction.readme}
          submitAddress={matchingAction.submit_address}
          description={matchingAction.description}
          locationName={matchingAction.location_name}
          contactName={matchingAction.contact_name}
          contactEmail={matchingAction.contact_email}
          contactPhone={matchingAction.contact_phone}
          submitDate={clientAction.submit_date}
          completeDate={clientAction.complete_date}
          status={clientAction.status}
          setActionEdit={this.setActionEdit}
        />
      );
    });

    return actionComponents;
  };

  renderActionUpdate = (client, resourcesData) => {
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.id;
      });
      console.log(resource.name);
      return (
        <>
          <ResourceDetails
            name={resource.name}
            description={resource.description}
          />
          {this.renderActionsUpdate(resource.actions, client)}
        </>
      );
    });
    return actionAdd;
  };

  renderActionsUpdate = (resourceActions, client) => {
    const { handleUpdateAction } = this.props;
    let clientActions = [];
    resourceActions.forEach(resourceAction => {
      const clientActionMatches = client.clients_actions.filter(
        clientAction => {
          return clientAction.id === resourceAction.id;
        }
      );
      clientActionMatches.forEach(clientAction => {
        clientActions.push(clientAction);
      });
    });

    const actionComponents = clientActions.map(clientAction => {
      const matchingAction = resourceActions.find(resourceAction => {
        return resourceAction.id === clientAction.id;
      });
      return (
        <ActionUpdate
          clientActionId={clientAction.id}
          name={matchingAction.name}
          submitDate={clientAction.submit_date}
          completeDate={clientAction.complete_date}
          status={clientAction.status}
          handleUpdateAction={handleUpdateAction}
          setActionStatus={this.setActionStatus}
        />
      );
    });

    return actionComponents;
  };

  render() {
    const { isActionStatus, isActionAdd, isActionUpdate } = this.state;
    const { clients, resourcesData } = this.props;

    const client = clients ? this.findClient() : null;

    const clientResources = client ? client.client_resources : "";
    return (
      <>
        {client ? client.first_name : null}
        <ClientCard client={client} />
        <SurveyForm resources={clientResources} />
        {client ? this.renderSurveyStatus() : null}
        {client && resourcesData && isActionAdd
          ? this.renderActionAdd(client, resourcesData)
          : null}
        {client && resourcesData && isActionStatus
          ? this.renderActionStatus(client, resourcesData)
          : null}
        {client && resourcesData && isActionUpdate
          ? this.renderActionUpdate(client, resourcesData)
          : null}
      </>
    );
  }
}

export default ClientProfile;
