import axios from "axios";
import React, { useState, useEffect} from "react";
import TestimonyItem from "../components/itemTestimonials";

const ScreenTestimonials = () => {
    const url = "http://localhost:3000/testimonials";
    const [testimonials, setTestimonials] = useState();
    const jwtExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjF9.MhiM6mndt0mBUmjGWiEcAW_oDNIsr5dyN9pwUT9HK8o';
  
    //Callback for testimonials data
    const axiosApi = async () => {
        const response = await axios.get(url,{ headers: {
            Authorization: "Bearer " + jwtExample,
        }});
        setTestimonials(response.data);
    };
  
    //React hook for update page data
    useEffect(() => {
        axiosApi()
    }, []);

  return (
    <div className="container-fluid mb-5">
      <h1 className="sr-only m-4">Lista de Testimonios</h1>
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
              <TestimonyItem axiosApi={axiosApi} key={testimony.id} testimony={testimony} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ScreenTestimonials;
