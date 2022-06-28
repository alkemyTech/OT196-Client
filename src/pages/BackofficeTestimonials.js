import axios from "axios";
import React, { useState, useEffect } from "react";
import TestimonyItem from "../components/backoffice/itemTestimonials";
import CreateTestimony from "../components/testimonials/TestimonyModal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import customTransition from "../components/utils/CustomTransition";

const BackofficeTestimonials = () => {
  const url = "http://localhost:3000/testimonials";
  const [testimonials, setTestimonials] = useState();
  const jwtExample =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjF9.MhiM6mndt0mBUmjGWiEcAW_oDNIsr5dyN9pwUT9HK8o"
  ;
  //Callback for testimonials data
  const axiosApi = async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + jwtExample,
      },
    });
    setTestimonials(response.data);
  };

  //React hook for update page data
  useEffect(() => {
    axiosApi();
  }, []);

  return (
    <motion.div
      className="container rounded mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1>Lista de Testimonios</h1>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>
          Backoffice
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Testimonios</Breadcrumb.Item>
      </Breadcrumb>
      <CreateTestimony />
      <div className="list-group">
        {!testimonials ? (
          <div className="d-flex justify-content-center">
            <strong className="">Loading...</strong>
            <div
              className="d-flex ms-3 spinner-border"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        ) : (
          testimonials.map((testimony) => {
            return (
              <TestimonyItem
              axiosApi={axiosApi}
                key={testimony.id}
                testimony={testimony}
              />
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default BackofficeTestimonials;
