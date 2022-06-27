import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../app/contactSlice";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

export default function ContactList() {
  //FOR USE THE HOOK USEDISPATCH IN THE BELOW
  const dispatch = useDispatch();
  //GET THE CONTACTS BY THE GLOBAL STATE
  const contacts = useSelector((state) => state.contacts.contacts);
  //UPDATE THE GLOBAL STATE GETTING DATA BY ENDPOINT
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1>A continuación los Contactos realizados a Somos Más </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {/* TO RENDER THE CONTACT AND PREVENT IT FROM CRASHING IN CASE THE 
            CONTACTS VARIABLE IS UNDEFINED AND DISPLAY A MESSAGE 
            */}
        {contacts && contacts.length ? (
          contacts.map((x) => {
            return (
              <Card
                style={{
                  width: "90%",
                  margin: "1em",
                  marginLeft: "5%",
                  border: "solid 1px black",
                  boxShadow: "1px 2px 5px rgb(0, 0 , 0, 0.3)",
                  borderRadius: "15px",
                }}
              >
                <h1> {x.name} </h1>
                <h3> {x.phone} </h3>
                <h3> {x.email} </h3>
                <span> {x.message} </span>
              </Card>
            );
          })
        ) : (
          <h6 style={{}}>
            {" "}
            No tienes contactos por ahora, en cuanto los tengas podras
            encontrarlos en esta lista
          </h6>
        )}
      </div>
    </motion.div>
  );
}
