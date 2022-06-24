import React from "react";
import Formcontact from "../components/contact/formContact";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

function ScreenContact() {
  return (
    <motion.div
      className="container-fluid d-flex mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <div className="row justify-content-around">
        <div className="col-11 col-md-5 col-xl-4 mb-3 border border-dark rounded px-0">
          <h2 className="p-2 bg-dark text-white">Nuestra visión</h2>

          <p className="fs-6 m-2 px-3">
            Mejorar la calidad de vida de niños y familias en situación de
            vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en
            cada individuo a través de la educación, salud, trabajo, deporte,
            responsabilidad y compromiso.
          </p>
          <h2 className="p-2 bg-dark text-white">Nuestra misión</h2>
          <p className="fs-6 m-2 px-3">
            Trabajar articuladamente con los distintos aspectos de la vida de
            las familias, generando espacios de desarrollo personal y familiar,
            brindando herramientas que logren mejorar la calidad de vida a
            través de su propio esfuerzo.
          </p>
        </div>
        <div className="col-11 col-md-5 col-xl-4 mb-3 border border-dark rounded px-0">
          <h2 className="p-2 bg-dark text-white">¡Contactáte con nosotros!</h2>
          <div className="px-3">
            <Formcontact />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ScreenContact;
