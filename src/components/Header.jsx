import React, { Component } from "react";

class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <div className="jumbotron">
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <p className="lead">White pages better than the internet!!!</p>
        <hr className="my-4" />
        <p>
          It's available offline and at your door step even if you dont' want it
        </p>
        <a className="btn btn-primary btn-lg" href="#test" role="button">
          Learn more
        </a>
      </div>
    );
  }
}
export default Header;
