import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";

class WorkDatePen extends Component {
  state = {
    date: "",
  };

  handleWorkDateChange = (event, { name, value }) => {
    console.log(value);
  };
  render() {
    return (
      <DateInput
        name="date"
        inline
        placeholder="DATE"
        value={this.state.date}
        onChange={this.handleWorkDateChange}
      />
    );
  }
}

export default WorkDatePen;
