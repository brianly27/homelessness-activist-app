import React from "react";
import { List } from "semantic-ui-react";

const Action = ({
  clientId,
  actionId,
  name,
  form,
  readme,
  submitAddress,
  description,
  locationName,
  contactName,
  contactEmail,
  contactPhone,
  setActionStatus,
  handleAddAction
}) => (
  <List
    onClick={() => {
      setActionStatus();
      handleAddAction(actionId, clientId);
    }}
  >
    <List.Item>
      <List.Icon name="compass" />
      <List.Content>{name}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="linkify" />
      <List.Content>
        <a href={form}>Link to form</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="wordpress forms" />
      <List.Content>Description: {description}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="marker" />
      <List.Content>Submit at {submitAddress} </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="marker" />
      <List.Content>Location Name: {locationName} </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="users" />
      <List.Content>Contact: {contactName}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="users" />
      <List.Content>Contact Email: {contactEmail}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="users" />
      <List.Content>Contact Phone: {contactPhone}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="mail" />
      <List.Content>
        <a href={`mailto:${contactEmail}`}>Contact Email: {contactEmail}</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="wordpress forms" />
      <List.Content>readme: {readme}</List.Content>
    </List.Item>
  </List>
);

export default Action;
