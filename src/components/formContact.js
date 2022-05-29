import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';


export default function Formcontact() {
  const [wasSent, setWasSent] = useState(false);
  const contactSchema = yup.object().shape({
    name: yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres!')
      .max(50, 'El nombre no puede tener más de 50 caracteres')
      .required('Nombre es un campo obligatorio.'),
    email: yup.string()
      .email('Este email no es válido')
      .required('Email es un campo obligatorio.')
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'El Email solo puede contener letras, numeros, puntos, guiones y guion bajo'),
    message: yup.string()
      .min(20, 'El mensaje debe contener al menos 20 caracteres')
      .max(300, 'El mensaje no puede contener más de 300 caracteres')
      .required('Mensaje es un campo obligatorio.')
    });
  return(
    <div>
      <Formik
    
        initialValues={{
          name: '',
          email:'',
          message: ''
        }}

        //Validación del schema creado con yup
        validationSchema= {contactSchema}

        //Función para enviar los valores al endpoint(cuando este exista)
        onSubmit={(values, actions) => {
          setWasSent(true)
          setTimeout(() => setWasSent(false), 5000)
          actions.resetForm({
            values: {
              name: '',
              email:'',
              message: ''
            }},
          )
        }}
        >
        {( {errors} ) => (
			    <Form>
				    <div className='form-inline'>
					    <label className="sr-only" htmlFor="name">Nombre</label>
					    <Field
                className="form-control"
					    	type="text"
					     	name="name"
					    	placeholder="Ej: Samuel Jackson"
					    	id="name"
					    />
              <ErrorMessage name='name' component={() => (
                <div className="alert alert-danger">{errors.name}</div>
              )}/>
				    </div>
				    <div className='form-group'>
					    <label className="sr-only" htmlFor="email">Email de contacto</label>
					    <Field
                className="form-control"
					    	type="text"
					    	name="email"
					    	placeholder="Ej: Samuel_Jackson@gmail.com"
					    	id="email"
				  	  />
              <ErrorMessage name='email' component={() => (
                <div className="alert alert-danger">{errors.email}</div>
              )}/>
			  	  </div>
            <div className='form-group'>
              <label className="sr-only">Mensaje</label>
              <Field
                className="form-control"
                as='textarea'
                name="message"
                placeholder="Escribe tu mensaje aqui"
                id="message"
              />
              <ErrorMessage name='message' component={() => (
                <div className="alert alert-danger">{errors.message}</div>
              )}/>
            </div>
            <br/>
				    <button className="btn btn-outline-dark" type="submit">Enviar</button>
            {wasSent ? <div>Enviado con éxito</div> : ''}
			    </Form>
        )}
      </Formik>
    </div>
  );
}
