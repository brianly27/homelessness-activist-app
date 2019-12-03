import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const UserCard = ({
  firstName,
  lastName,
  email,
  cellphone,
  numberOfClients
}) => {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
        <Card.Meta>Joined in 2019</Card.Meta>
        <Card.Description>{`Cellphone: ${cellphone}`}</Card.Description>
        <Card.Description>{`Email: ${email}`}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {`${numberOfClients} Clients`}
        </a>
      </Card.Content>
    </Card>
  );
};
export default UserCard;

// <Card
//       image="https://react.semantic-ui.com/images/avatar/large/elliot.png"
//       header={`${firstName} ${lastName}`}
//       meta="User"
//       description={`Cellphone: ${cellphone}`}
//       content={`Email: `}
//       extra={extra}
//     />
