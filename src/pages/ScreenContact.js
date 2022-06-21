import React from "react";
import Formcontact from "../components/contact/formContact";
import {motion} from 'framer-motion'
import Listmembers from "../components/members/MembersList";

function ScreenContact(){
    return(
      <motion.div className="container-fluid mt-5"
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       exit={{opacity: 0}}
      >
            <div className="row justify-content-around ">
                <div 
                className="col-11 col-md-5 col-xl-4 mb-5 border border-dark rounded px-0"
                >
                <h2 className="p-2 bg-dark text-white">
                        Miembros
                    </h2>
                    <div>
                        <Listmembers/>
                    </div>
                </div>
                <div className="col-11 col-md-5 col-xl-4 mb-5 border border-dark rounded px-0">
                    <h2 className="p-2 bg-dark text-white">
                        ¡Contactáte con nosotros!
                    </h2>
                    <div className="px-3">
                        <Formcontact/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ScreenContact;