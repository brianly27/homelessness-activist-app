import React, { Component } from "react";
import { Container, Button, Grid, Segment } from "semantic-ui-react";
import ClientCard from "../components/ClientCard";
import SurveyForm from "../components/SurveyForm";
import SurveyStatus from "../components/SurveyStatus";
import SurveyAddResource from "../components/SurveyAddResource";
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

  state = {
    isSurveyStatus: true,
    isSurveyForm: false,
    isActionStatus: true,
    isActionAdd: false,
    isActionUpdate: false
  };

  setSurveyForm = () => {
    this.setState({
      isSurveyStatus: false,
      isSurveyForm: true
    });
  };

  setSurveyStatus = () => {
    this.setState({
      isSurveyStatus: true,
      isSurveyForm: false
    });
  };

  setActionAdd = () => {
    this.setState({
      isActionStatus: false,
      isActionAdd: true,
      isActionUpdate: false
    });
  };

  setActionStatus = () => {
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

  //survey form
  renderSurveyEdit = (client, resourcesData) => {
    const surveyComponents = resourcesData.map(resource => {
      return (
        <SurveyAddResource
          clientId={client.id}
          resourceId={resource.id}
          name={resource.name}
          description={resource.description}
          handleAddResource={this.props.handleAddResource}
          setSurveyStatus={this.setSurveyStatus}
        />
      );
    });
    return surveyComponents;
  };

  renderSurveyDisplay = (client, resourcesData) => {
    // return SurveyStatus, pass props, change state
    console.log(client);
    console.log(resourcesData);

    const clientResources = client.clients_resources.map(clientResource => {
      const matchingResource = resourcesData.find(resource => {
        return resource.id === clientResource.resource_id;
      });
      return matchingResource;
    });
    const surveyComponents = clientResources.map(resource => {
      return (
        <SurveyStatus
          name={resource.name}
          // description={resource.description}
          // handleAddResource={this.props.handleAddResource}
          // setSurveyStatus={this.setSurveyStatus}
        />
      );
    });
    return (
      <>
        {surveyComponents}
        <Button onClick={this.setSurveyForm}>
          Add a resource to list of needs
        </Button>
      </>
    );
    // let clientResources = [];
    // client.clients_resources.forEach(clientsResource => {
    //   const matchingResource = resourcesData.filter(resource => {
    //     return resource.id === clientsResource.id;
    //   });
    //   matchingResource.forEach(resource => {
    //     clientResources.push(resource);
    //   });
    // });
    // const surveyComponents = clientResources.map(resource => {
    //   return (
    //     <SurveyStatus
    //       name={resource.name}
    //       // description={resource.description}
    //       // handleAddResource={this.props.handleAddResource}
    //       // setSurveyStatus={this.setSurveyStatus}
    //     />
    //   );
    // });
    // return (
    //   <>
    //     {surveyComponents}
    //     <Button onClick={this.setSurveyForm}>
    //       Add a resource to list of needs
    //     </Button>
    //   </>
    // );
  };

  renderActionAdd = (client, resourcesData) => {
    // console.log(resourcesData); //[{…}, {…}, {…}, {…}]
    // console.log(client.clients_resources); //[{…}, {…}, {…}, {…}]
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.resource_id;
      });
      // console.log(resource.name);
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
    // console.log(resourcesData); //[{…}, {…}, {…}, {…}]
    // console.log(client.clients_resources); //[{…}, {…}, {…}, {…}]
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.resource_id;
      });
      // console.log(resource);
      return resource ? (
        <>
          <ResourceDetails
            name={resource.name}
            description={resource.description}
          />
          <Button onClick={() => this.setActionAdd()}>add action</Button>
          {this.renderActionsStatus(resource.actions, client)}
        </>
      ) : null;
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
      // console.log(clientAction);
      return (
        <Segment attached>
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
        </Segment>
      );
    });

    return actionComponents;
  };

  renderActionUpdate = (client, resourcesData) => {
    const actionAdd = client.clients_resources.map(clientsResource => {
      const resource = resourcesData.find(resourceData => {
        return resourceData.id === clientsResource.resource_id;
      });
      // console.log(resource.name);
      return (
        <>
          <br></br>
          <br></br>
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
        <Segment>
          <ActionUpdate
            clientActionId={clientAction.id}
            name={matchingAction.name}
            submitDate={clientAction.submit_date}
            completeDate={clientAction.complete_date}
            status={clientAction.status}
            handleUpdateAction={handleUpdateAction}
            setActionStatus={this.setActionStatus}
          />
        </Segment>
      );
    });

    return actionComponents;
  };

  render() {
    const {
      isSurveyForm,
      isSurveyStatus,
      isActionStatus,
      isActionAdd,
      isActionUpdate
    } = this.state;
    const { clients, resourcesData } = this.props;
    const client = clients ? this.findClient() : null;
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <ClientCard client={client} />{" "}
          </Grid.Column>
          <Grid.Column>
            {client && resourcesData && isSurveyForm
              ? this.renderSurveyEdit(client, resourcesData)
              : null}
            {client && resourcesData && isSurveyStatus
              ? this.renderSurveyDisplay(client, resourcesData)
              : null}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            {client && resourcesData && isActionAdd
              ? this.renderActionAdd(client, resourcesData)
              : null}
            {client && resourcesData && isActionStatus
              ? this.renderActionStatus(client, resourcesData)
              : null}
            {client && resourcesData && isActionUpdate
              ? this.renderActionUpdate(client, resourcesData)
              : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ClientProfile;
