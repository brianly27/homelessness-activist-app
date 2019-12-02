import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ClientCard from "../components/ClientCard";
import SurveyForm from "../components/SurveyForm";
import SurveyStatus from "../components/SurveyStatus";
import ActionForm from "./ActionForm";
import ActionStatus from "./ActionStatus";

class ClientProfile extends Component {
  getGlasses = () => {
    const id = this.props.match.params.id;
    let foundGlasses = { image: "", style: "", maker: "" };

    for (let glasses of this.props.glasses) {
      if (glasses.id == id) {
        foundGlasses = glasses;
      }
    }
    return foundGlasses;
  };
  render() {
    return (
      <>
        <ClientCard />
        <SurveyForm />
        <SurveyStatus />
        {/* maybe i will need to render action form and status inside a container */}
        <ActionForm />
        <ActionStatus />
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
