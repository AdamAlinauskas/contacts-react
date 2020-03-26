import React, { Component } from "react";
import Header from "./Header";
import PeopleList from "./PeopleList";
import AddContact from "./AddContact";

class Form extends Component {
  state = {
    people: []
  };

  handleAddPerson = person => {
    const people = [...this.state.people]; //[]
    people.push(person);
    this.setState({ people: people });
  };

  render() {
    return (
      <div>
        <Header title="Contacts" />
        <AddContact onAddPerson={this.handleAddPerson} />
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default Form;
