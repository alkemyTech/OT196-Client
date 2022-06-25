import React from "react";
import Formcontact from "../components/contact/formContact";
import Listmembers from "../components/members/MembersList";
import customTransition from "../components/utils/CustomTransition";

function ScreenContact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <div className="d-flex mt-4 justify-content-center">
        <h1>Contacto</h1>
      </div>
      <div className="container-fluid d-flex mt-3">
        <div className="row justify-content-around">
          <div className="col-11 col-md-5 col-xl-4 shadow bg-light mb-5 border rounded px-0">
            <p className="p-2 fs-2 bg-primary rounded text-white">
                        Miembros
                    </p>
                    <div>
                        <Listmembers/>
                    </div>
          </div>
          <div className="col-11 col-md-5 col-xl-4 bg-light shadow mb-5 border rounded px-0">
            <p className="p-2 fs-2 bg-primary rounded text-white">
              ¡Contactáte con nosotros!
            </p>
            <div className="px-3">
              <Formcontact />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ScreenContact;
