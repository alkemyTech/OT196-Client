import { Container, Dropdown, DropdownButton } from "react-bootstrap"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import logo from "../img/logoSomosMas.png"
import { useNavigate, useLocation } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { signOff } from "../app/slice";



export default function Header(props) {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector(state => state.USER_LOGIN)
    const isLogged = userData.isUserLogged || false
    const roleId = userData.roleId || 1

    const handleUserLogout = () => {
        // Remove data from store
        dispatch(signOff())
        // Remove data from localstorage
        localStorage.removeItem('userData')
        // Redirect to index
        window.location.replace('/')
    }

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
                            <Nav.Link eventKey="/" onClick={()=> navigate("/")}>Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/about-us" onClick={()=> navigate("/about-us")} className="mx-1">Nosotros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/news" onClick={()=> navigate("/news")} className="mx-1">Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/testimonials" onClick={()=> navigate("/testimonials")} className="mx-1">Testimoniales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/contact-us" onClick={()=> navigate("/contact-us")} className="mx-1">Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/donations" onClick={()=> navigate("/donations")} className="mx-1">Contribuye</Nav.Link>
                        </Nav.Item>
                        <DropdownButton className="ms-3" variant="info" align="end" title="Cuenta" id="dropdown-menu-align-end">
                            {!isLogged ? 
                                <>
                                <Dropdown.Item onClick={() => navigate('/login')}>Ingresar</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/signup')}>Registrarse</Dropdown.Item>
                                </>
                                :
                                <>
                                <Dropdown.Item onClick={() => navigate('/perfil')}>Mi perfil</Dropdown.Item>
                                {roleId === 1 ? <Dropdown.Item onClick={() => navigate('/backoffice')}>Backoffice</Dropdown.Item> : null}
                                <Dropdown.Item onClick={handleUserLogout}>Salir</Dropdown.Item>
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