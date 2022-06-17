import { Container, Dropdown, DropdownButton } from "react-bootstrap"
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
                    <Navbar.Brand onClick={()=> navigate('/')}>
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
                            <Nav.Link onClick={()=> navigate("/")}>Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=> navigate("/about-us")} className="mx-1" style={{ color: 'black' }}>Nosotros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=> navigate("/news")} className="mx-1" style={{ color: 'black' }}>Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=> navigate("/testimonials")} className="mx-1" style={{ color: 'black' }}>Testimoniales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=> navigate("/contact-us")} className="mx-1" style={{ color: 'black' }}>Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=> navigate("/donations")} className="mx-1" style={{ color: 'black' }}>Contribuye</Nav.Link>
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
                                <Dropdown.Item>Mi Perfil</Dropdown.Item>
                                <Dropdown.Item>Salir</Dropdown.Item>
                                </>
                            } 
                            
                        </DropdownButton>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}