import React, { Component } from "react";
import logo from "../images/ro-fitness-logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

import "../App.css";

class HeaderNoMenu extends Component {
  render() {
    return (
      <header className="position-relative">
        <Router>
          <Navbar
            color="light"
            light
            expand="xs"
            className="border-bottom border-gray bg-white"
            style={{ height: 80 }}
          >
            <Container>
              <Row
                noGutters
                className="position-relative w-100 align-items-center"
              >
                {/* <Col className="d-xs-flex d-sm-flex justify-content-start text-center">
                  <Nav className="mrx-auto" navbar>
                    <UncontrolledDropdown
                      className="d-flex text-center"
                      nav
                      inNavbar
                    >
                      <DropdownToggle className="font-weight-bold" nav caret>
                        MENU
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </Nav>
                </Col> */}

                <Col className="text-center">
                  <NavbarBrand className=" p-0" href="/" style={{ width: 10 }}>
                    <img
                      src={logo}
                      alt="logo"
                      width="60"
                      height="60"
                      className="d-inline-block align-top"
                    />
                  </NavbarBrand>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </Router>
      </header>
    );
  }
}
export default HeaderNoMenu;
