import { Button } from "react-bootstrap"
import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../img/logoSomosMas.png"

export default function Header(){


    return(
        <> 
               
               <Navbar bg="light" variant="ligth" style={{ boxShadow: '1px 2px 5px rgb(0, 0 , 0, 0.3)', color: 'black'}}>
                    <Container>
                        <img src={logo}
                    alt="logo" 
                    style={{maxHeight: '6em', marginRight: '2rem'}}
                    />
                   <Navbar.Brand href="/" style={{
                       marginLeft: '30%', 
                       color: 'black'
                   }}
                   
                   >Inicio </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#" style={{color: 'black'}}>Nosotros </Nav.Link>
                    <Nav.Link href="#" style={{color: 'black'}}>Novedades  </Nav.Link>
                    <Nav.Link href="#" style={{color: 'black'}}>Testimoniales  </Nav.Link>
                    <Nav.Link href="#" style={{color: 'black'}}>Contacto </Nav.Link>
                    <Nav.Link href="#" style={{color: 'black'}}>Contribuye </Nav.Link>
                    <Button style={{
                        borderRadius: '15px', 
                        backgroundColor: 'white',
                        color: 'black', 
                        marginLeft: '2em'
                    }}> Log in </Button>
                    <Button style={{
                        borderRadius: '15px', 
                        backgroundColor: 'red',
                        color: 'white',
                        marginLeft: '2em'
                    }}                    
                    > Registrarse </Button>
                    </Nav>
                    </Container>
                </Navbar>
        </>
    )
}