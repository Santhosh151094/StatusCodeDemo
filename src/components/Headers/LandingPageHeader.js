import React from "react";
import { Container } from "reactstrap";

export class LandingPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1571126817476-92bf7da319c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
              ")",
          }}
          className="page-header"
          data-parallax={true}
        >
          <div className="filter" />
          <Container>
            <div className="motto text-center">
              <h1 style={{ fontWeight: "bold" }}>{this.props.value.company}</h1>
              <h3>{this.props.value.text}</h3>
              <br />
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default LandingPageHeader;
