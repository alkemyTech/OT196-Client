import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import logo from "../img/logoSomosMas.png"
import { useNavigate, useLocation } from "react-router-dom"
import { FaBars } from "react-icons/fa";

export default function Header(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const isLogged = false // Fake data to fetch if user is logged

    return (
        <>
            <style type="text/css">
                {`
                .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
                color: #fff;
                }
                .nav-pills .nav-link{
                    color: #000
                }
                `}
            </style>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" style={{ boxShadow: '1px 2px 5px rgb(0, 0 , 0, 0.3)', color: 'black' }}>
                <Container className="px-5 justify-content-around" fluid>
                    <Navbar.Brand href="/">
                    <img src={logo}
                        alt="logo"
                        className="ms-5"
                        style={{ maxHeight: '5em', marginRight: '2rem' }}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"><FaBars/></Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end"  id="responsive-navbar-nav">
                    <Nav style={{rowGap: "8px"}} fill variant="pills" activeKey={location.pathname}>
                        <Nav.Item>
                            <Nav.Link href="/">Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about-us">Nosotros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/novedades">Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/testimonials">Testimoniales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/donations">Contribuye</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/donations">Contribuye</Nav.Link>
                        </Nav.Item>
                        <DropdownButton className="ms-3" variant="info" align="end" title="Cuenta" id="dropdown-menu-align-end">
                            {!isLogged ? 
                                <>
                                <Dropdown.Item onClick={() => navigate('/login')}>Ingresar</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/signup')}>Registrarse</Dropdown.Item>
                                </>
                                :
                                <>
                                <Dropdown.Item eventKey="1">Mi Perfil</Dropdown.Item>
                                <Dropdown.Item eventKey="1">Salir</Dropdown.Item>
                                </>
                            } 
                            
                        </DropdownButton>
                        {/* <Button className="btn-block" style={{
                            borderRadius: '15px',
                            backgroundColor: 'white',
                            color: 'black',
                            marginLeft: '1em'
                        }}
                            onClick={() => navigate('/login')}
                        > Log in </Button>
                        <Button variant="info" style={{
                            borderRadius: '15px',
                            color: 'white',
                            marginLeft: '1em'
                        }}
                            onClick={() => navigate('/signup')}
                        > Registrarse </Button> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}