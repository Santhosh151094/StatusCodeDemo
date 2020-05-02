/*eslint-disable*/
import React from "react";
import { Row, Container } from "reactstrap";

export class DemoFooter extends React.Component {
  render() {
    return (
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}, made with by Santhosh
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default DemoFooter;
