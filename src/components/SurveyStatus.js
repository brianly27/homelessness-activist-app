import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    Being helped by 16 app users
  </a>
);

const SurveyStatus = () => (
  <Card
    image="/images/avatar/large/elliot.jpg"
    header="Patrick"
    meta="Client"
    description="Survey Status."
    extra={extra}
  />
);

export default SurveyStatus;
