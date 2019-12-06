import React, { Component } from "react";
import { Table, Button, Icon, Header } from "semantic-ui-react";

class ClientsTable extends Component {
  renderClientRows = (clients, resourcesData) => {
    console.log(clients);
    const { renderIcon } = this;
    const { navigateToClient } = this.props;
    const clientRows = clients.map(client => {
      const resources = client.clients_resources;
      // if (resources) {
      // const id = resources.find(resource => resource.resource_id === 1);
      // }
      const id = resources.find(resource => resource.resource_id === 1);
      const billingAddress = resources.find(
        resource => resource.resource_id === 3
      );
      const foodStamps = resources.find(resource => resource.resource_id === 4);
      const busPass = resources.find(resource => resource.resource_id === 5);
      const healthCare = resources.find(resource => resource.resource_id === 6);
      const bankAccount = resources.find(
        resource => resource.resource_id === 7
      );
      const employmentServices = resources.find(
        resource => resource.resource_id === 8
      );
      const shelter = resources.find(resource => resource.resource_id === 9);
      const housingServices = resources.find(
        resource => resource.resource_id === 10
      );
      return (
        <Table.Row
          onClick={() => this.props.history.push(`/clients/${client.id}`)}
        >
          <Table.Cell>
            {client.first_name} {client.last_name}
          </Table.Cell>
          <Table.Cell>{client.created_at}</Table.Cell>
          <Table.Cell>{client.updated_at}</Table.Cell>

          <Table.Cell>{renderIcon(id)}</Table.Cell>
          <Table.Cell>{renderIcon(billingAddress)}</Table.Cell>
          <Table.Cell>{renderIcon(foodStamps)}</Table.Cell>
          <Table.Cell>{renderIcon(busPass)}</Table.Cell>
          <Table.Cell>{renderIcon(healthCare)}</Table.Cell>
          <Table.Cell>{renderIcon(bankAccount)}</Table.Cell>
          <Table.Cell>{renderIcon(employmentServices)}</Table.Cell>
          <Table.Cell>{renderIcon(shelter)}</Table.Cell>
          <Table.Cell>{renderIcon(housingServices)}</Table.Cell>

          <Table.Cell>{renderIcon(!client.alive, "like")}</Table.Cell>
        </Table.Row>
      );
    });
    return clientRows;
  };

  renderIcon = (resource, icon = "compass") => {
    return resource ? <Header icon={icon}></Header> : null;
  };
  render() {
    const { clients, resourcesData } = this.props;
    // {client && resourcesData && isSurveyForm
    //   ? this.renderSurveyEdit(client, resourcesData)
    //   : null}
    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date Joined</Table.HeaderCell>
            <Table.HeaderCell>Last Updated</Table.HeaderCell>

            <Table.HeaderCell>Identification</Table.HeaderCell>
            <Table.HeaderCell>Billing Addres</Table.HeaderCell>
            <Table.HeaderCell>Food Stamps</Table.HeaderCell>
            <Table.HeaderCell>Bus Pass</Table.HeaderCell>
            <Table.HeaderCell>Health Care</Table.HeaderCell>
            <Table.HeaderCell>Bank Account</Table.HeaderCell>
            <Table.HeaderCell>Employment Services</Table.HeaderCell>
            <Table.HeaderCell>Shelter</Table.HeaderCell>
            <Table.HeaderCell>Housing Services</Table.HeaderCell>

            <Table.HeaderCell>Alive</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {clients && resourcesData
            ? this.renderClientRows(clients, resourcesData)
            : null}
        </Table.Body>
      </Table>
    );
  }
}

export default ClientsTable;

//   <Table.Row>
// <Table.Cell>John Lilki</Table.Cell>
// <Table.Cell>September 14, 2013</Table.Cell>
// <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
// <Table.Cell>
//   <Button>+</Button>
// </Table.Cell>
{
  /* <Table.Cell>
  <Header icon="compass"></Header>
</Table.Cell> */
}
// </Table.Row>
