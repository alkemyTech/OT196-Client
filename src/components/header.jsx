import { Button } from "react-bootstrap"
import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../img/logoSomosMas.png"
import { useNavigate, useLocation } from "react-router-dom"

export default function Header(props) {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    return (
        <>
            <Navbar bg="light" variant="ligth" style={{ boxShadow: '1px 2px 5px rgb(0, 0 , 0, 0.3)', color: 'black' }}>
                <div className='container-fluid d-flex justify-content-between'>
                    <Navbar.Brand href="/">
                    <img src={logo}
                        alt="logo"
                        style={{ maxHeight: '6em', marginRight: '2rem' }}
                    />
                    </Navbar.Brand>
                    <Nav fill variant="pills" activeKey={location.pathname}>
                        <Nav.Item>
                            <Nav.Link href="/">Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about-us" className="mx-1" style={{ color: 'black' }}>Nosotros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/news" className="mx-1" style={{ color: 'black' }}>Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/testimonials" className="mx-1" style={{ color: 'black' }}>Testimoniales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact-us" className="mx-1" style={{ color: 'black' }}>Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/donations" className="mx-1" style={{ color: 'black' }}>Contribuye</Nav.Link>
                        </Nav.Item>
                        <Button style={{
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
                        > Registrarse </Button>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}