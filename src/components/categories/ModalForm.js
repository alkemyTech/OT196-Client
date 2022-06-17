import React from 'react'
import * as Yup from 'yup';
import { Formik, Form as FormikForm, useField } from 'formik';
import { FormControl, Alert, Container, Form, FloatingLabel } from 'react-bootstrap'
import {errorAlert,successAlert} from '../../setupAlerts'
import {putRequest, postRequest} from '../../services/RequestService'

const categorieSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres!")
    .max(20, "El nombre no puede tener más de 20 caracteres")
    .required("Nombre es un campo obligatorio."),
  description: Yup.string()
    .max(75, "El nombre no puede tener más de 75 caracteres"),
});
 
 function ModalForm({categoryData}){
    const formType = categoryData.name ? 'Edit' : 'Create'
    const initialValues = formType === 'Edit' ? categoryData : {name: '',description: ''}
    const saveFunction = {Edit: putRequest, Create: postRequest}
    const {REACT_APP_BACKEND_URL} = process.env

    const InputEdit = ({ label, ...props }) => {
      const [field, meta] = useField(props);
      return (
        <>
          <Form.Group controlId={props.id || props.name} className="mb-2">
            <FloatingLabel controlId={props.id || props.name} label={label}>
              <FormControl
                {...field}
                {...props}
                id={props.id}
                isValid={meta.error === undefined && meta.touched}
                isInvalid={meta.error}
              />
            </FloatingLabel>
            {meta.error ? <Alert variant="danger">{meta.error}</Alert> : null}
          </Form.Group>
        </>
      );
    };
    
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={categorieSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { name, description } = values
          const submitData = {name, description} 
          try{
            const res = await saveFunction[formType](`${REACT_APP_BACKEND_URL}/categories`, submitData)
            console.log(res)
            successAlert('success', '¡Todo correcto!', 'Se han guardado los cambios con exito.')
          }
          catch(e){
              errorAlert('error', '¡Lo siento!', 'No fue posible realizar los cambios.')
          }
          setSubmitting(false);
        }}
        >
        {({
        handleSubmit,
        }) => (
        <Container className="mt-2"> 
            <FormikForm noValidate id="categoryModal" onSubmit={handleSubmit}>
                <InputEdit
                label="Nombre"
                name="name"
                />
                <InputEdit
                label="Descripción"
                name="description"
                />
            </FormikForm>
        </Container>
        )}
        </Formik>
    );    
}

export default ModalForm