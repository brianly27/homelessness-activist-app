import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "semantic-ui-react";
import NavButton from "../components/NavButton";

const NavBar = () => (
  <>
    <Header icon="compass" content="Homelessness-Activist-App" />
    <NavLink to="/">
      <NavButton />
    </NavLink>
    <NavLink to="/user">
      <NavButton />
    </NavLink>
    <NavLink to="/all_clients">
      <NavButton />
    </NavLink>
  </>
);

export default NavBar;
