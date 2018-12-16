import * as React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component {

    state = {isOpen: false};

    constructor(props) {

        super(props);

        this.state = {isOpen: false};

        this.toggle = this.toggle.bind(this);

    }

    toggle() {

        this.state.isOpen = !this.state.isOpen;

    }

render() {
        return <Navbar color="dark" dark={true} expand="md">
                  <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav className="ml-auto" navbar={true}>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com">Linkedin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.facebook.com">Facebook</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                  </Navbar>;

    }

}
export default AppNavbar;
