import React, { useState, useEffect } from "react";
import TestimonyItem from "../components/backoffice/itemTestimonials";
import CreateTestimony from "../components/testimonials/TestimonyModal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import customTransition from "../components/utils/CustomTransition";
import { getRequest } from "../services/RequestService";

const BackofficeTestimonials = () => {
  const { REACT_APP_BACKEND_TESTIMONIALS } = process.env;
  const [testimonials, setTestimonials] = useState();

  //Callback for testimonials data
  const axiosApi = async () => {
    setTestimonials(await getRequest(REACT_APP_BACKEND_TESTIMONIALS));
  };

  //React hook for update page data
  useEffect(() => {
    axiosApi();
  }, []);

  return (
    <motion.div
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
      <CreateTestimony axiosApi={axiosApi}/>
      <div 
      className="list-group container justify-content-center rounded mb-5"
      style={{paddingRight: '0'}}>
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
