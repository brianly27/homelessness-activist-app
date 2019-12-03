import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class CreateClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    alias: "",
    email: "",
    cellphone: "",
    location: "",
    income: ""
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = e => {
    this.createClient();
  };

  createClient = () => {
    console.log("before post");
    this.postClient("http://localhost:3000/clients").then(client => {
      this.props.addNewClientToState(client);
      this.props.history.push(`/clients/${client.clientId}`);
    });
  };

  postClient = url => {
    const {
      firstName,
      lastName,
      alias,
      email,
      cellphone,
      location,
      income
    } = this.state;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        alias,
        email,
        cellphone,
        location,
        income
      })
    }).then(resp => resp.json());
  };

  render() {
    const {
      firstName,
      lastName,
      alias,
      email,
      cellphone,
      location,
      income
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* require first name or alias
        require valid email
        other fields can be optional 
        
        post to clients/create */}
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Alias</label>
          <input
            placeholder="Alias"
            name="alias"
            value={alias}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Cell Phone</label>
          <input
            placeholder="Cell Phone"
            name="cellphone"
            value={cellphone}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input
            placeholder="General Location"
            name="locaiton"
            value={location}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Income"
            name="income"
            value={income}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default CreateClient;
// first_name	last_name	alias	email	location	cellphone	picture	alive?	start	income
