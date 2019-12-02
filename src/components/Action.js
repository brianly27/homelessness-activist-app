import React from "react";
import { List } from "semantic-ui-react";

const Action = () => (
  <List>
    <List.Item>
      <List.Icon name="compass" />
      <List.Content>Action Name</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="linkify" />
      <List.Content>
        <a href="http://www.semantic-ui.com">Link to form</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="marker" />
      <List.Content>1411 4th Ave 13th Floor, Seattle, WA 98101</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="users" />
      <List.Content>contact name: Jack</List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name="mail" />
      <List.Content>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </List.Content>
    </List.Item>
  </List>
);

export default Action;
