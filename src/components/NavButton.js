import React from "react";
import { Button } from "semantic-ui-react";

const NavButton = ({ buttonName }) => (
  <div>
    <Button primary>{buttonName}</Button>
  </div>
);

export default NavButton;
