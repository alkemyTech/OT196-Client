import React from 'react'
import {Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegClock, FaScroll } from "react-icons/fa";

const fixImageFit = {objectFit: "cover"}
const formatDate = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
const formatTitle = (str) => {return str.length > 50 ? str.slice(0,50)+"..." : str}
const firstToUpper = (str) => {return str.charAt(0).toUpperCase() + str.slice(1)}
const dateFormat = (str) => {var date = new Date(str).toLocaleDateString('es-AR', formatDate);return firstToUpper(date)}

export default function NewCard(props){
    const {id, image, name, createdAt, type} = props.newData
    return(
        <Col>
            <Link to={`/news/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card border="primary" className="h-100">
                    <Row className="g-0 flex-fill">
                    <Col xs={5}>
                        <div className="h-100 ratio ratio-1x1"><Card.Img className="img-fluid rounded-start" variant="top" src={image} style={fixImageFit}/></div>
                    </Col>
                    <Col xs={7}>
                        <Card.Body className="d-flex flex-column">
                        <Card.Title>{formatTitle(name)}</Card.Title>
                        </Card.Body> 
                    </Col>
                    </Row>
                    <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted"><span className="align-top me-2"><FaRegClock/></span> {dateFormat(createdAt)}</small>
                    <small className="text-muted"><span className="align-top me-2"><FaScroll/></span>{firstToUpper(type)}</small>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    );
}