import React from 'react'
import { Row, Button, Col, Badge } from 'react-bootstrap';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'

function CategoriesListItem(props){
    const {name, id} = props.itemData 
    return(
        <Row className='border border-1 rounded-2 border-dark justify-content-center align-items-center py-2 mb-3 mx-auto w-75'> 
            <Col xs={8} className="flex-grow-1">
                <div><span className='fs-4 '>{name}</span> <Badge bg="info" className="h5 ms-2">ID {id}</Badge></div>
            </Col>
            <Col xs={4}>
                <Button variant="primary" className='me-4'><FaEdit/></Button>
                <Button variant="danger" className='me-4'><FaRegTrashAlt/></Button>
            </Col>
        </Row>
    );
}
export default CategoriesListItem