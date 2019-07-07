import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class NavComp extends React.Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="container">
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Service</DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Service-1</DropdownItem>
              <DropdownItem>Service-2</DropdownItem>
              <DropdownItem>Service-3</DropdownItem>
              <DropdownItem>Service-4</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Testimonial</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> Profile</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavComp;