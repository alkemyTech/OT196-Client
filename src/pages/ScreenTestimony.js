import React from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";

const ScreenTestimonials = () => {
    /* THE FOLLOWING COMMENTED LINES ARE THE CALLBACK FOR TESTIMONIALS, UNCOMMENT AND COMPLETE ONCE THE ENDPOINT IS CREATED */

    // const url = "http://localhost:3000/";
    // const [testimonials, setTestimonials] = useState();
    // const fetchApi = async () => {
    //   const response = await fetch(url);
    //   const responseJSON = await response.json();
    //   setTestimonials(responseJSON);
    // };

    // useEffect(() => {
    //     fetchApi().catch(null);
    // }, [testimonials]);

    //This array simulate the database, dont forget delete it later...
    let testimonials = [
         "Testimonio 1",
          "Testimonio 2",
           "Testimonio 3",
            "Testimonio 4",
             "Testimonio 5"
    ];

    return(
        <div className="container mb-5">
            <h1 className="sr-only m-5">
                Lista de Testimonios
            </h1>
            <div className="list-group">
                {!testimonials? 
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
                : 
                testimonials
                    .map((testimony, index) => {
                        return (
                            <div className="list-group-item d-flex justify-content-between">
                                <button className="btn btn-dark">
                                    Editar <FaRegEdit/> 
                                </button>
                                <div
                                key={index}
                                className='sr-only mt-2'
                                >
                                    {testimony} 
                                </div>
                                <button className="btn btn-danger">
                                    <FaTimes/> Borrar 
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ScreenTestimonials;