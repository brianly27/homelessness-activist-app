import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ClientCard = ({ client }) => {
  const firstName = client ? client.first_name : "";
  const lastName = client ? client.last_name : "";
  const alias = client ? client.alias : "";
  const location = client ? client.location : "";
  const email = client ? client.email : "";
  const cellphone = client ? client.cellphone : "";
  const alive = client ? client.alive : "";
  const income = client ? client.income : "";
  const numberOfUsers = client ? client.users.length : "";
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
        <Card.Meta>{`${alias}`}</Card.Meta>
        <Card.Description>{`Cellphone: ${cellphone}`}</Card.Description>
        <Card.Description>{`Email: ${email}`}</Card.Description>
        <Card.Description>{`Location: ${location}`}</Card.Description>
        <Card.Description>{`Income: ${income}`}</Card.Description>
        <Card.Description>{`Alive: ${alive}`}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {`Helped by ${numberOfUsers} Users`}
        </a>
      </Card.Content>
    </Card>
  );
};
export default ClientCard;
