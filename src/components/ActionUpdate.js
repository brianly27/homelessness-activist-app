import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";

class ActionUpdate extends Component {
  state = {
    submitDate: "",
    completeDate: "",
    status: ""
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = e => {
    const body = this.state;
    this.props.handleUpdateAction(this.props.clientActionId, body);
    this.props.setActionStatus();
  };

  render() {
    const { submitDate, completeDate, status } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field as="h4">
          <label>{this.props.name}</label>
        </Form.Field>
        <Form.Field>
          <label>Submit Date</label>
          <input
            placeholder={this.props.submitDate}
            name="submitDate"
            value={submitDate}
            defaultValue={this.props.submitDate}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Complete Date</label>
          <input
            placeholder={this.props.completeDate}
            name="completeDate"
            value={completeDate}
            defaultValue={this.props.completeDate}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <input
            placeholder={this.props.status}
            name="status"
            value={status}
            defaultValue={this.props.status}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default ActionUpdate;
