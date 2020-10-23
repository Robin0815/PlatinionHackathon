import React, { Component } from "react";
import Table from "react-bootstrap/Table";

const api = require("../api-service");

/**
 * Members bar component
 *
 * @class Members
 * @extends {Component}
 */
class Members extends Component {
  /**
   * Creates an instance of Members.
   * @param {Object} props
   * @memberof Navigation
   */
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }


  componentDidMount() {
    api
      .getMembers()
      .then((members) => this.setState({ members }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.members.map((member) => {
            return (
              <tr>
                <td>{member.id}</td>
                <td>{member.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Members;