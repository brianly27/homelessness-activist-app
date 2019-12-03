import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "semantic-ui-react";
import NavButton from "../components/NavButton";

const NavBar = () => (
  <>
    <Header icon="compass" content="Homelessness-Activist-App" />
    <NavLink to="/user">
      <NavButton buttonName="My Profile" />
    </NavLink>
    <NavLink to="/create_client">
      <NavButton buttonName="New Client" />
    </NavLink>
    <NavLink to="/all_clients">
      <NavButton buttonName="All Clients" />
    </NavLink>
    {/* probably dont need to client here */}
    <NavLink to="/login">
      <NavButton buttonName="Log Out" />
    </NavLink>
  </>
);

export default NavBar;
