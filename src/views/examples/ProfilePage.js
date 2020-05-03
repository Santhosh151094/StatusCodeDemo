import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

import MainNavbar from "components/Navbars/MainNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export class ProfilePage extends React.Component {
  render() {
    const userValue = this.props.location.state;
    return (
      <>
        <MainNavbar />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={userValue ? userValue.avatar : ""}
                />
              </div>
              <div className="name">
                <h4 className="title">
                  {userValue
                    ? userValue.first_name + " " + userValue.last_name
                    : ""}{" "}
                  <br />
                </h4>
                <h6 className="description">
                  {userValue ? userValue.email : ""}
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  An artist of considerable range, Jane Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.
                </p>
                <br />
                <Button className="btn-round" color="default" href="/" outline>
                  <i className="fa fa-arrow-left" /> Go Back
                </Button>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default ProfilePage;
