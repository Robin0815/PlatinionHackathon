import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { TrashFill } from "react-bootstrap-icons";

const api = require("../api-service");

/**
 * Tasks bar component
 *
 * @class Tasks
 * @extends {Component}
 */
class Tasks extends Component {
  /**
   * Creates an instance of Tasks.
   * @param {Object} props
   * @memberof Navigation
   */
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }


  componentDidMount() {
    api
      .getTasks()
      .then((tasks) => this.setState({ tasks }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tasks.map((task) => {
            return (
              <tr>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td><Button variant="primary"><TrashFill /> Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Tasks;
