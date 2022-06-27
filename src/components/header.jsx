import { Container } from "react-bootstrap";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logoSomosMas.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './Header.css'
import HeaderAvatar from "./HeaderAvatar"


export default function Header(props) {
    const location = useLocation()
    const navigate = useNavigate()

  return (
    <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" style={{ boxShadow: '1px 2px 5px rgb(0, 0 , 0, 0.3)', color: 'black' }}>
                <Container className="px-5 justify-content-around" fluid>
                    <Navbar.Brand onClick={()=> navigate('/')}>
                    <img src={logo}
                        alt="logo"
                        className="ms-5"
                        style={{ maxHeight: '5em', marginRight: '2rem' }}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"><FaBars/></Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end"  id="responsive-navbar-nav">
                    <Nav className="align-items-center" style={{rowGap: "8px"}} fill variant="pills" activeKey={location.pathname}>
                        <Nav.Item>
                            <Nav.Link eventKey="/" onClick={()=> navigate("/")}>Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/about-us" onClick={()=> navigate("/about-us")} className="mx-1">Nosotros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/news" onClick={()=> navigate("/news")} className="mx-1">Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/testimonials" onClick={()=> navigate("/testimonials")} className="mx-1">Testimonios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/contact-us" onClick={()=> navigate("/contact-us")} className="mx-1">Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/donations" onClick={()=> navigate("/donations")} className="mx-1">Contribuye</Nav.Link>
                        </Nav.Item>
                        <HeaderAvatar/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
