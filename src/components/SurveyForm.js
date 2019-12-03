import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class SurveyForm extends Component {
  state = {
    identification: false,
    address: false,
    foodStamps: false,
    busPass: false,
    cellphone: false,
    healthCare: false,
    employmentServices: false,
    housingServices: false,
    notes: ""
  };
  // this.setState(prevState => ({ identification: !prevState.identification }));
  // change[e.target.name] = !this.state[e.target.name];
  toggle = e => {
    console.log(e);
    let change = {};
    this.setState(prevState => ({ identification: !prevState.identification }));
    this.setState(change);
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = e => {
    this.createResourceNeeds();
  };
  // POST   /clients_resources(.:format)        clients_resources#create
  createResourceNeeds = () => {
    this.fetchClientResources("http://localhost:3000/clients_resources")
      .then
      //render survey status page
      //render Action Status
      ();
  };

  fetchClientResources = url => {
    const {
      identification,
      address,
      foodStamps,
      busPass,
      cellphone,
      healthCare,
      employmentServices,
      notes
    } = this.state;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        identification,
        address,
        foodStamps,
        busPass,
        cellphone,
        healthCare,
        employmentServices,
        notes
      })
    }).then(resp => resp.json());
  };
  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group inline>
          <label>Situation</label>
          <Form.Radio
            label="I am satisfied with my current situation"
            value="false"
            checked={value === "false"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="I want to get out of my current situation"
            value="true"
            checked={value === "true"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Checkbox
          label="Currently needs proof of identification"
          name="identification"
          value={this.state.identification}
          checked={this.state.identification}
          onChange={this.toggle}
        />
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
