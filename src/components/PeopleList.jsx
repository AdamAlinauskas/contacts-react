import React, { Component } from "react";

class PeopleList extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Names</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.props.people.map((person, index) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PeopleList;
