
import { useState } from "react";

export default function Validation(state,setState,event){

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setState(true);
  }
