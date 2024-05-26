import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import { navLinks } from '../index'
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        }else {
            setChangeColor(false);
        }
    };

    useEffect(() =>{
        changeBackroundColor();
        
        window.addEventListener('scroll',changeBackroundColor);
    })

  return (
    <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold" style={{ color: '#212529' }} >Ready Top Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
                return (
                <div className="nav-link" key={link.id}>
                    <NavLink to={link.path}className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : ""} end>
                    {link.text}</NavLink>
                </div>
                );
                })}
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent