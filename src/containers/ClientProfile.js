import React from "react";
import { Container } from "semantic-ui-react";
import ClientCard from "../components/ClientCard";
import SurveyForm from "../components/SurveyForm";

const ClientProfile = () => (
  <Container>
    <ClientCard />
    <SurveyForm />
  </Container>
);

export default ClientProfile;
