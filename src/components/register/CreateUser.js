import React from 'react';
import UserForm from './UserForm';
import logo from "../../img/logoSomosMas.png"

export default function CreateUser() {

  return (
    <>
      <header>
        <img className="mx-auto d-block img-fluid" src={logo} alt="Logo Somos Mas" />
        <h1 className="text-center mb-4">Sign Up</h1>
      </header>
      <div className="d-flex">
        <UserForm />
      </div>
    </>
  )
}