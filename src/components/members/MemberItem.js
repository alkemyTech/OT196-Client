import React from "react";
import {  Card, Row, Col } from "react-bootstrap";
import imgDefault from './img/DefaultImage.png';

export const MemberItem = ({ member }) => {
    return(
        <Card  style={{ width: '100%', marginTop: '0' }} >
            <Row className="d-flex flex-nowrap align-items-center" >
                <Col xs={4}>
                    <img 
                    className="ms-4 img-circle ratio ratio-1x1" 
                    src={member.image || imgDefault } 
                    style={{ borderRadius:'50%' ,maxHeight: '100px', maxWidth: '100px' }}
                    />
                </Col>
                <Col xs={8}>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="fs-5">{member.name}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}