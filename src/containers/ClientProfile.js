import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ClientCard from "../components/ClientCard";
import SurveyForm from "../components/SurveyForm";
import SurveyStatus from "../components/SurveyStatus";
import ActionAdd from "./ActionAdd";
import ActionStatus from "./ActionStatus";
import ActionUpdate from "./ActionUpdate";
import ResourceDetails from "../components/ResourceDetails";
import Action from "../components/Action";
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
    isActionStatus: false,
    isActionForm: false,
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
          {this.renderActions(resource.actions, client.id)}
        </>
      );
    });
    return actionAdd;
  };

  renderActions = (actions, clientId) => {
    //post to c/a onClick, and render ActionShow
    const { handleAddAction } = this.props;
    const actionComponents = actions.map(action => {
      return (
        <Action
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
          handleAddAction={handleAddAction}
          setActionStatus={this.setActionStatus}
        />
      );
    });
    return actionComponents;
  };

  setActionStatus = () => {
    console.log("setting action state");
    this.setState({
      isActionStatus: true,
      isActionForm: false,
      isActionUpdate: false
    });
  };
  renderActionForm = () => {
    // return SurveyStatus, pass props, change state
  };

  renderActionUpdate = () => {
    // return SurveyStatus, pass props, change state
  };

  renderClients = () => {
    const clientComponents = this.props.userData.clients.map(client => {
      return "asdf";
      // <NavLink to={`/clients/${client.id}`}>
      //   <ClientListItem
      //     id={client.id}
      //     firstName={client.first_name}
      //     lastName={client.last_name}
      //     alias={client.last_name}
      //     handleClick={this.props.navigateToClient}
      //   />
      // </NavLink>
      // );
      // }
      return clientComponents;
    });
  };

  render() {
    const { isActionStatus, isActionForm, isActionUpdate } = this.state;
    const { clients, resourcesData } = this.props;

    const client = clients ? this.findClient() : null;

    const clientResources = client ? client.client_resources : "";
    const clientActions = client ? client.clients_actions : "";
    return (
      <>
        {client ? client.first_name : null}
        <ClientCard client={client} />
        <SurveyForm resources={clientResources} />
        {/* async problem */}
        {client ? this.renderSurveyStatus() : null}
        {client && resourcesData
          ? this.renderActionAdd(client, resourcesData)
          : null}
        {/* maybe i will need to render action form and status inside a container */}
        {/* <ActionAdd resources={clientResources} actions={clientActions} /> */}
        {/* <ActionStatus resources={clientResources} actions={clientActions} /> */}
        {/* <ActionUpdate /> */}
      </>
    );
  }
}

export default ClientProfile;

// the create new client button is clicked
// a create client form should be rendered

// when the form is submitted, we send a post to the server at clients#create
// *define accepted and required params; for now, server accepts anything to create a client and return its client_id
// *create client with user_id as well

// When a new client is created, the user will be routed to client's show page
// // *for now, lets just fetch the entire db; change this in the future
// #fetch resource and action data when client wants to add an action

// how do i trigger fetch request in App? ask for props from App

// submitting SurveyForm will update state in u/r
// any resource_id in u/r will be rendered in ActionShow
// in the beginning, ActionShow will render the resource name, empty list, and "add" button

// the user can click the add button, it will render a description of the resource and Action components
// Action displays a description and whether or not it has been recommended by others
// this should render an ActionStatus component

// ActionStatus displays current data from C/A and an edit button
// when "edit" is clicked, ActionFrom is rendered
// ActionForm displays a from to update start_date, completed_date, status

// the components need to be created
// this includes the forms: CreateClientForm, ActionForm
// write post requests for each form

// then write the components that will display data: ActionStatus, SurveyStatus, Action
// write the methods that will map over the data and send props to the components
//

// the structure of the fetch request needs to be designed
// the post requests need to be written
