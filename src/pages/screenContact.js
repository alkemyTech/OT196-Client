import React from "react";
import Formcontact from "../Components/formContact";
import 'bootstrap/dist/css/bootstrap.css';

function ScreenContact(){
    return(
        <div className="container-fluid d-flex mt-3">
            <div className="row justify-content-around">
                <div className="col-11 col-sm-5 mb-3 border border-dark rounded">
                    <h2 className="p-2 bg-dark text-white">
                        Nuestra visión
                    </h2>
                    <p className='fs-6 m-2'>
                        Mejorar la calidad de vida de niños y
                        familias en situación de vulnerabilidad
                        en el barrio La Cava, otorgando un cambio
                        de rumbo en cada individuo a través de la
                        educación, salud, trabajo, deporte,
                        responsabilidad y compromiso.
                    </p>
                    <h2 className="p-2 bg-dark text-white">
                        Nuestra misión
                    </h2>
                    <p className='fs-6 m-2'>
                        Trabajar articuladamente con los distintos aspectos de la vida de las
                        familias, generando espacios de desarrollo personal y familiar,
                        brindando herramientas que logren mejorar la calidad de vida a
                        través de su propio esfuerzo.
                    </p>
                </div>
                <div className="col-11 col-sm-5 mb-3 border border-dark rounded">
                    <h2 className="p-2 bg-dark text-white">
                        ¡Contactáte con nosotros!
                    </h2>
                    <Formcontact/>
                </div>
            </div>
        </div>
    )
}

export default ScreenContact;