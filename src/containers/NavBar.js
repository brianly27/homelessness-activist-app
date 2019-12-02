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
    <NavLink to="/actions">
      <NavButton buttonName="New Client" />
    </NavLink>
    <NavLink to="/all_clients">
      <NavButton buttonName="All Clients" />
    </NavLink>
    {/* probably dont need to client here */}
    <NavLink to="/client" nameProp="">
      <NavButton buttonName="Client" />
    </NavLink>
  </>
);

export default NavBar;
