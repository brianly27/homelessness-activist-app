import React from "react";
import { Container } from "semantic-ui-react";
import UserCard from "../components/UserCard";
import ClientsList from "./ClientsList";

const UserProfile = () => (
  <Container>
    <UserCard />
    <ClientsList />
  </Container>
);

export default UserProfile;
