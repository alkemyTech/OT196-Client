import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../img/logoSomosMas.png"

export default function Header(){


    return(
        <React.Fragment> 
               
               <Navbar bg="light" variant="secondary">
                    <Container>
                        <img src={logo}
                    alt="logo" 
                    style={{maxHeight: '6em', marginRight: '2rem'}}
                    />
                   <Navbar.Brand href="/">Inicio </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#">Sobre Nosotros </Nav.Link>
                    <Nav.Link href="#">Nuestro equipo  </Nav.Link>
                    <Nav.Link href="#">Novedades  </Nav.Link>
                    <Nav.Link href="#">Contacto </Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </React.Fragment>
    )
}