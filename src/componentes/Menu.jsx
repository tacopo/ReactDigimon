import {Container, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";

function Menu(){
    return(
        <Navbar expand="lg">
            <Container>
                <NavbarBrand href='#'>
                    <img
                    src="../../public/assets/digimon-logo-digital-digimon-monsters-logo-png-clipart.jpg"
                    width="80"
                    height="80"
                    className="align-top"/>
                </NavbarBrand>
                <NavbarToggle aria-control="menuCollapse"></NavbarToggle>
                <NavbarCollapse id="menuCollapse">
                    <Nav>
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Episodios</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>

        </Navbar>
    )
}
export default Menu;