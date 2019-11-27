import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Clients
  </a>
);

const UserCard = () => (
  <>
    <Card
      image="https://react.semantic-ui.com/images/avatar/large/elliot.png"
      header="Elliot Baker"
      meta="User"
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      extra={extra}
    />
  </>
);

export default UserCard;
