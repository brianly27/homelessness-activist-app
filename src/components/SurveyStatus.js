import React from "react";
import { Header, Image } from "semantic-ui-react";

const SurveyStatus = ({ resource }) => (
  <Header as="h3">
    {/* <Image
      circular
      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
    /> */}
    survey status
    {console.log(resource)}
    {/* <Header.Content>{`resource: ${resource.id} | wants: ${resource.wants_resource} | has: ${resource.has_resource}`}</Header.Content> */}
  </Header>
);

export default SurveyStatus;
