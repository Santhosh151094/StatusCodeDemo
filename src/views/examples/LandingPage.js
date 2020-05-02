import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      allValues: {},
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((resData) => {
        console.log("resData", resData);
        //console.log(JSON.stringify(resData))
        //do your logic here
        //let person = resData.results
        this.setState({ list: resData.data, allValues: resData.ad }); //this is an asynchronous function
      });
  }

  userClick = (data) => {
    console.log("data", data);
    this.props.history.push({
      pathname: "/profile-page",
      state: data,
    });
  };

  render() {
    const { list, allValues } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <LandingPageHeader value={allValues} />
        <div className="main">
          <div className="section section-dark text-center">
            <Container>
              <h2 className="title">Let's talk about us</h2>
              <Row>
                {list &&
                  list.map((item, i) => (
                    <Col md="4" key={i}>
                      <Card className="card-profile card-plain">
                        <div
                          className="card-avatar"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            alt="..."
                            src={item.avatar}
                            onClick={() => this.userClick(item)}
                          />
                        </div>
                        <CardBody>
                          <div
                            className="author"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.userClick(item)}
                          >
                            <CardTitle tag="h4">
                              {item.first_name + " " + item.last_name}
                            </CardTitle>
                            <h6
                              className="card-category"
                              style={{ textTransform: "lowercase" }}
                            >
                              <a
                                style={{ color: "#FFFFFF", fontWeight: "bold" }}
                                href={"mailto:" + item.email}
                              >
                                {item.email}
                              </a>
                            </h6>
                          </div>

                          <p className="card-description text-center">
                            Teamwork is so important that it is virtually
                            impossible for you to reach the heights of your
                            capabilities or make the money that you want without
                            becoming very good at it.
                          </p>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="https://twitter.com/"
                            target="_blank"
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="https://www.googleplus.com/"
                            target="_blank"
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
          <div className="section landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="text-center">Keep in touch?</h2>
                  <Form className="contact-form">
                    <Row>
                      <Col md="6">
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default LandingPage;
