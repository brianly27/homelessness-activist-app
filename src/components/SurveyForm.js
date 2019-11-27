import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class SurveyForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="I am satisfied with my current situation"
            value="sm"
            checked={value === "sm"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="I want to get out of my current situation"
            value="md"
            checked={value === "md"}
            onChange={this.handleChange}
          />
          />
        </Form.Group>
        <Form.Checkbox label="Currently needs proof of identification" />
        <Form.Checkbox label="Currently needs an address to apply for a service" />
        <Form.Checkbox label="Currently needs food stamps" />
        <Form.Checkbox label="Currently needs shelter" />
        <Form.Checkbox label="Currently needs health care" />
        <Form.Checkbox label="Currently needs employment services" />
        <Form.Checkbox label="Currently needs housing services" />
        <Form.TextArea label="Notes" placeholder="Write some notes here" />

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default SurveyForm;
