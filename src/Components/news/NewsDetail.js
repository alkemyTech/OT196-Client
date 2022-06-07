import React, { useState, useEffect } from "react";
import {Card, Col, Placeholder, Row, Figure} from "react-bootstrap";
import Holder from 'holderjs'

export default function NewsDetail(props) {
    const [newsData, setNewsData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        Holder.run({
            images:".holderclass" 
        })
    }, [])

    useEffect(() => {
        if (props?.data && Object.keys(props?.data).length > 0){
            setNewsData(props.data)
            setIsLoading(false)
        }
    }, [props])

    return (
        <>
            <Row xs={1} md={1} className="g-4 my-4">
            {!isLoading ?
                <Col className="d-flex justify-content-center mb-3"> 
                    <Card className="w-75 border-0 d-flex justify-content-center">
                        <Card.Img variant="top" className="mx-auto" style={{objectFit: "cover", maxHeight: "50%", maxWidth: "50%"}} src={newsData.image}/>
                        <Card.Body>
                        <Card.Title className="my-5"><h2>{newsData.name}</h2></Card.Title>
                        <Card.Text className="text-start fs-6 mx-auto lh-lg">
                            {newsData.content}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 
                :
                <Col className="d-flex justify-content-center mb-3"> 
                <Card className="w-75 border-0 d-flex justify-content-center">
                <Figure>
                    <Figure.Image
                        className="holderclass"
                        src="holder.js/500x300"
                    />
                </Figure>
                    <Card.Body>
                    <Card.Title className="my-5">
                        <Placeholder animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                    </Card.Title>
                    <Card.Text className="text-start fs-6 w-75 mx-auto lh-lg">
                        <Placeholder animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={5} /> <Placeholder xs={8} />
                        </Placeholder>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                }
            </Row>
        </>
    );
}


