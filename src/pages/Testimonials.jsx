import axios from "axios";
import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { Card, Image } from "react-bootstrap";
import "./testimonials.css";
import { motion } from "framer-motion";

export default function Testimonials(){

    //Get testimonials information 
    const { REACT_APP_BACKEND_TESTIMONIALS } = process.env
    const [testimonials, setTestimonials] = useState([])
    const axiosApi = async () => {
        const response = await axios.get(REACT_APP_BACKEND_TESTIMONIALS);
        setTestimonials(response.data);
      };

  useEffect(() => {
    axiosApi();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 0.5 },
      }}
      >
        <h1> Testimonios </h1>
        <div className="testimonials_container mx-auto">
            { testimonials && testimonials.length ? 
            testimonials.map(x=> {
                return     <div>
                <Card style={{ width: '14rem', backgroundColor: 'rgb(181 217 255)' }} className='card h-75 shadow-lg p-3 mb-5 rounded'>
                          <Image className="mx-auto my-2" src={x.image} roundedCircle style={{height: '100px', width: '100px', objectFit: 'cover'}}/>
                          <Card.Body>
                            <Card.Title>{x.name}</Card.Title>
                            <Card.Text>
                              <p dangerouslySetInnerHTML={{ __html: x.content }}/>
                            </Card.Text>
                          </Card.Body>
                        </Card> 
                     </div>                  
            }) : (
              <h1 className="testimonials_message">
                {" "}
                Aun no hay testimonios cargados{" "}
              </h1>
            )}
        </div>
      </motion.div>
    )
}
