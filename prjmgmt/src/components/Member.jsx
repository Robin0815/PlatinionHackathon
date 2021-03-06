import React, { Component } from "react";
import avatar from "../media/avatar.png";
import { withRouter } from "react-router-dom";
import { Col, Row, Card, ProgressBar, Table } from "react-bootstrap";

const api = require("../api-service");

/**
 * Member component
 *
 * @class Member
 * @extends {Component}
 */
class Member extends Component {
  /**
   * Creates an instance of Member.
   * @param {Object} props
   * @memberof Navigation
   */
  constructor(props) {
    super(props);
    this.state = {
      member: {},
    };
  }

  getMember(id) {
    api
      .getMember(id)
      .then((member) => this.setState({ member }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getMember(this.props.match.params.memberId);
  }

  render() {
    let skills = [];

    if (this.state.member.skills) {
      skills = this.state.member.skills.map((skill) => {
        let level = (skill.level / 5) * 100;
        return (
          <tr>
            <td>{skill.name}</td>
            <td>
              <ProgressBar now={level} />
            </td>
            <td>{skill.level}/5</td>
          </tr>
        );
      });
    }

    return (
      <React.Fragment>
        <div class="clear"></div>
        <Row>
          <Col>
            <Card className="element">
              <Card.Img variant="top" src={avatar}/>
              <Card.Body>
                <Card.Title>{this.state.member.name}</Card.Title>
                <Card.Text>{this.state.member.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="element">
              <Card.Body>
                <Card.Text>
                  <Table hover>
                    <thead>
                      <tr>
                        <td>Skill</td>
                        <td>Proficiency Level</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                    {skills}
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(Member);
