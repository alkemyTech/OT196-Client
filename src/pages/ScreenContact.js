import React from "react";
import Formcontact from "../components/contact/formContact";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

<<<<<<< HEAD
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
=======
function ScreenContact(){
    return(
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
          <div className="d-flex mt-4 justify-content-center">
            <h1>Contacto</h1>
          </div>
        <div className="container-fluid d-flex mt-3">
            <div className="row justify-content-around">
                <div className="col-11 col-md-5 col-xl-4 shadow bg-light mb-5 border rounded px-0">
                    <p className="p-2 fs-2 bg-primary rounded text-white">
                        Nuestra visión
                    </p>
                    <p className='fs-6 m-2 px-3'>
                        Mejorar la calidad de vida de niños y
                        familias en situación de vulnerabilidad
                        en el barrio La Cava, otorgando un cambio
                        de rumbo en cada individuo a través de la
                        educación, salud, trabajo, deporte,
                        responsabilidad y compromiso.
                    </p>
                    <p className="p-2 fs-2 bg-primary rounded text-white">
                        Nuestra misión
                    </p>
                    <p className='fs-6 m-2 px-3'>
                        Trabajar articuladamente con los distintos aspectos de la vida de las
                        familias, generando espacios de desarrollo personal y familiar,
                        brindando herramientas que logren mejorar la calidad de vida a
                        través de su propio esfuerzo.
                    </p>
                </div>
                <div className="col-11 col-md-5 col-xl-4 bg-light shadow mb-5 border rounded px-0">
                    <p className="p-2 fs-2 bg-primary rounded text-white">
                        ¡Contactáte con nosotros!
                    </p>
                    <div className="px-3">
                    <Formcontact/>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
>>>>>>> 7751e2b389e36938b12831685b3fe1134c034dea
}

export default ScreenContact;
