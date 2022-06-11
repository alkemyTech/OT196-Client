import React from 'react'
import {Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegClock, FaList } from "react-icons/fa";

const fixImageFit = {objectFit: "cover"}
const fitTextStyle = {display: "-webkit-box", webkitLineClamp: "5", webkitBoxOrient: "vertical", overflow: "hidden"} // Allow to correct fit the text and add ellipsis
const formatDate = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
const firstToUpper = (str) => {return str.charAt(0).toUpperCase() + str.slice(1)}
const dateFormat = (str) => {var date = new Date(str).toLocaleDateString('es-AR', formatDate);return firstToUpper(date)}

export default function NewsCard(props){
    const {id, image, name, createdAt} = props.newData
    return(
        <Col className="mb-3">
            <Link to={`/novedades/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card border="primary" className="h-100">
                    <Row className="g-0 flex-fill flex-nowrap overflow-hidden" style={{maxHeight: "150px"}}>
                    <Col xs={5}>
                        <div className="h-100 ratio ratio-1x1"><Card.Img variant="top" src={image} style={fixImageFit}/></div>
                    </Col>
                    <Col xs={7}>
                        <Card.Body className="d-flex flex-column">
                        <Card.Title style={fitTextStyle}>{(name)}</Card.Title>
                        </Card.Body> 
                    </Col>
                    </Row>
                    <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted"><span className="align-top me-2"><FaRegClock/></span> {dateFormat(createdAt)}</small>
                    <small className="text-muted"><span className="align-top me-2"><FaList/></span>News</small>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    );
}