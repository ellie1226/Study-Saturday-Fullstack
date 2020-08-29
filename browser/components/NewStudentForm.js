import React, { Component } from "react";
import axios from "Axios";

export default class NewStudentForm extends Component {
  //controlled input
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.handleSubmit = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await Axios.post("/api/student", this.state);
      console.log(response.data);
      console.log(this.state);
      this.setState = {
        firstName: "",
        lastName: "",
        email: "",
      };
    } catch (err) {
      console.log("Cant reach this post route", error);
    }
  }

  handleChange() {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="ex: Ellen"
          value={this.state.firstName}
          onChange={this.handleChange}
        ></input>

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="ex: Kwan"
          value={this.state.lastName}
          onChange={this.handleChange}
        ></input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="ex: hello@gmail.com"
          value={this.state.event}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}

//ampersands && works as well replacing null
//if this.state.showDisplay else nothing
