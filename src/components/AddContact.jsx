import React, { Component } from "react";

class AddContact extends Component {
  state = { name: "", phoneNumber: "" };

  isAddDisabled = () => {
    if (this.state.name.length <= 0 || this.state.phoneNumber.length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  handleValueChangeForName = event => {
    const newName = event.target.value;
    this.setState({ name: newName }); //adama
  };
  handleValueChangeForPhone = event => {
    const newPhone = event.target.value;
    this.setState({ phoneNumber: newPhone });
  };

  handleAddPerson = () => {
    const { name, phoneNumber } = this.state;
    const person = { name, phoneNumber };
    this.props.onAddPerson(person);
    this.setState({ name: "", phoneNumber: "" });
  };

  render() {
    const { handleValueChangeForName, handleValueChangeForPhone } = this;
    const { name, phoneNumber } = this.state;

    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              onChange={handleValueChangeForName}
            />
          </div>
          <div className="col-auto">
            <input
              className="form-control mb-2"
              placeholder="phone"
              value={phoneNumber}
              onChange={handleValueChangeForPhone}
            />
          </div>

          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary mb-2"
              onClick={this.handleAddPerson}
              disabled={this.isAddDisabled()}
            >
              add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddContact;
