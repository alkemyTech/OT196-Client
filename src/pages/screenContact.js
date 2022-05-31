import React from "react";
import Formcontact from "../components/formContact";
import 'bootstrap/dist/css/bootstrap.css';

function ScreenContact(){
    return(
        <div className="d-flex">
            <div className="row justify-content-evenly">
                <div className="col-4 border border-dark rounded">
                    <h3 className="p-2 bg-dark text-white">
                        Nuestra visión
                    </h3>
                    <p>
                    Mejorar la calidad de vida de niños y
                    familias en situación de vulnerabilidad
                    en el barrio La Cava, otorgando un cambio
                    de rumbo en cada individuo a través de la
                    educación, salud, trabajo, deporte,
                    responsabilidad y compromiso.
                    </p>
                    <h3 className="p-2 bg-dark text-white">
                        Nuestra misión
                    </h3>
                    <p>
                    Trabajar articuladamente con los distintos aspectos de la vida de las
                    familias, generando espacios de desarrollo personal y familiar,
                    brindando herramientas que logren mejorar la calidad de vida a
                    través de su propio esfuerzo.
                    </p>
                </div>
                <div className="col-4 border border-dark rounded">
                    <h3 className="p-2 bg-dark text-white">
                        ¡Contactáte con nosotros!
                    </h3>
                    <Formcontact/>
                </div>
            </div>
        </div>
    )
}

export default ScreenContact;