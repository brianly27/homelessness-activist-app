import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    Being helped by 16 app users
  </a>
);

const ClientCard = () => (
  <Card
    image="/images/avatar/large/elliot.jpg"
    header="Patrick"
    meta="Client"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
);

export default ClientCard;
