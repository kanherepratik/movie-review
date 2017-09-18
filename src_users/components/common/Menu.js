import React from "react";
import {Navbar, FormGroup, FormControl, Glyphicon, Button} from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Navbar className="menu fixedTop">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">MovieFlix</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup className="search-text">
              <FormControl type="text" placeholder="Search" onChange={this.props.handleSearch}/>
            </FormGroup>
            {' '}
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
