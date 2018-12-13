import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge} from 'reactstrap';
import '../stylesheets/navigationBar.css';
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
}
    render() {

      return (

        <div>
          <Navbar style={{opacity:0.8, backgroundColor: "#aedd94"}} light expand="md">
            <Link to="/"><NavbarBrand><img style={{marginLeft: "20px"}} className="logoNavBar" src={require('../images/logo_blanc_Be_Proud_of_You.png')}  /></NavbarBrand></Link>
            <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav">
              <NavItem className="navLink">
                <Link to="/ProjectGallery" style={{color:'#413c58', fontFamily: 'Helvetica', fontWeight: "bold"}}>Contribuer à un projet</Link>
              </NavItem>
              <NavItem className="navLink">
                <Link to="/Gallery" style={{color:'#413c58', fontFamily: 'Helvetica', fontWeight: "bold"}}>Galerie</Link>
              </NavItem>
              <NavItem className="navLink">
                <Link to="/Blog" style={{color:'#413c58', fontFamily: 'Helvetica', fontWeight: "bold"}}>Actu du jour</Link>
              </NavItem>
              <NavItem className="navLink">
                <Link to="/About" style={{color:'#413c58', fontFamily: 'Helvetica', fontWeight: "bold"}}>+ D'infos</Link>
              </NavItem>
              <NavItem className="navLink">
                <Link to="/Chat" style={{color:'#413c58', fontFamily: 'Helvetica'}}> <Badge id="chatBadge">Chat</Badge></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
