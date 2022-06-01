import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/logo.png";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    const hrStyle = {
        maxWidth: "100%",
        height: "4px",
        color: "white",
    };

    return (
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <Container className="bg" fluid>
                <Row className="align-items-center justify-content-center">
                    <Col xs="4" className="p-0">
                        <hr style={hrStyle} />
                    </Col>
                    <Col xs="4" className='text-center'>
                        <img src={Logo} alt="Logo" className="imgWidth" />
                    </Col>
                    <Col xs="4" className="p-0">
                        <hr style={hrStyle} />
                    </Col>
                </Row>
                <Row>
                    <ul className="d-flex flex-column flex-sm-row gap-4 align-items-center justify-content-center noneListStyle mb-5">
                        <Link to='#home'><li>Inicio</li></Link>
                        <Link to='#us'><li>Nosotros</li></Link>
                        <Link to='#news'><li>Novedades</li></Link>
                        <Link to='#testimonials'><li>Testimonios</li></Link>
                        <Link to='#contact'><li>Contacto</li></Link>
                        <Link to='#contributes'><li>Contribuye</li></Link>
                    </ul>
                </Row>
                <Row md="12" className="mt-3 mb-3">
                    <hr style={hrStyle} />
                </Row>
                <Row className="justify-content-center text-center ">
                    <Col xs="1">
                        <a href="https://www.facebook.com/Somos_Más" target="_blank" rel="noopener noreferrer">
                            <BsFacebook />
                        </a>
                    </Col>
                    <Col xs="1">
                        <a href="https://www.instagram.com/SomosMás" target="_blank" rel="noopener noreferrer">
                            <BsInstagram />
                        </a>
                    </Col>
                    <Col xs="1">
                        <a href="https://api.whatsapp.com/send?phone=5491160112988" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp />
                        </a>
                    </Col>
                    <Col xs="1">
                        <a href="https://www.twitter.com/Somos_Más" target="_blank" rel="noopener noreferrer">
                            <BsTwitter />
                        </a>
                    </Col>
                    <Col xs="12" className="mt-4 mb-5">
                        <p className="text-center">2022 by Alkemy. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </IconContext.Provider>
    );
};

export default Footer;