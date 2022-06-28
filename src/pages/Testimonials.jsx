import axios from "axios";
import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { Card, Col } from "react-bootstrap";
import "./testimonials.css";
import { motion } from "framer-motion";

export default function Testimonials() {
  //Get testimonials information
  const { REACT_APP_BACKEND_TESTIMONIALS } = process.env;
  const [testimonials, setTestimonials] = useState([]);
  const jwtExample =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjF9.MhiM6mndt0mBUmjGWiEcAW_oDNIsr5dyN9pwUT9HK8o";
  const url = `${REACT_APP_BACKEND_TESTIMONIALS}`;
  const axiosApi = async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + jwtExample,
      },
    });
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
      <div className="testimonials_container" style={{ backgrondColor: "red" }}>
        {testimonials && testimonials.length ? (
          testimonials.map((x) => {
            return (
              <div>
                <Card
                  style={{
                    width: "14rem",
                    backgroundColor: "rgb(236, 245, 66)",
                  }}
                  className="card"
                >
                  <Avatar src={x.image} round={true} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>{x.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <h1 className="testimonials_message">
            {" "}
            Aun no hay testimonios cargados{" "}
          </h1>
        )}
      </div>
    </motion.div>
  );
}
