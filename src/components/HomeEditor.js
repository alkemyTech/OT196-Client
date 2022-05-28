import React from "react";
import { Formik, Form as FormikForm, useField } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, Alert, Container, Form, FloatingLabel } from 'react-bootstrap'
import Swal from 'sweetalert2'

const getBase64 = function (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
const slideImageRequest = Yup.mixed()
.required('Debes completar este campo.')
.test(
  'fileFormat',
  'Tipo de archivo no permitido.',
  (value) => value === null || (value && IMAGE_FORMATS.includes(value.type))
)

const slideRequest = Yup.string()
.min(10, 'El texto del slide debe tener al menos 10 caracteres.')
.max(500, 'El texto del slide es muy largo. (Max 500)')
.required('Debes completar este campo.')

const HomeSchema = Yup.object().shape({
    welcomeText: Yup.string()
        .min(20, 'El texto de bienvenida debe tener al menos 20 caracteres.')
        .max(2000, 'El texto de bienvenida es muy largo. (Max 2000)')
        .required('Debes completar este campo.'),
    slide1Text: slideRequest,
    slide2Text: slideRequest,
    slide3Text: slideRequest,
    slide1Data: slideImageRequest,
    slide2Data: slideImageRequest,
    slide3Data: slideImageRequest,
})

const initialHomeValues = {
    welcomeText: "Welcome text for home.",
    slide1Text: "Slide 1 default text.",
    slide2Text: "Slide 2 default text.",
    slide3Text: "Slide 3 default text.",
    slide1Data: "",
    slide2Data: "",
    slide3Data: ""}

const TextAreaEdit = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <Form.Group controlId={props.id || props.name} className="mt-5">
            <FloatingLabel controlId={props.id || props.name} label={label}>
                <FormControl {...field} {...props} id={props.id} isValid={meta.error === undefined} isInvalid={meta.error} as="textarea" style={{height: '100px'}}/>
            </FloatingLabel>
                {meta.error ? (
                <Alert variant="danger">{meta.error}</Alert>
                ) : null}
        </Form.Group>
     </>
   );
};
const InputEdit = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <Form.Group controlId={props.id || props.name} className="mt-5">
            <FloatingLabel controlId={props.id || props.name} label={label}>
                <FormControl {...field} {...props} id={props.id} isValid={meta.error === undefined} isInvalid={meta.error}/>
            </FloatingLabel>
                {meta.error ? (
                <Alert variant="danger">{meta.error}</Alert>
                ) : null}
        </Form.Group>
     </>
   );
};

export function HomeEditor(){
    return(
        <Formik
        initialValues={initialHomeValues}
        validationSchema={HomeSchema}
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting }) => {
          var { welcomeText, slide1Text, slide2Text, slide3Text } = values
          var slide1Image = await getBase64(values.slide1Data)
          var slide2Image = await getBase64(values.slide2Data)
          var slide3Image = await getBase64(values.slide3Data)
          // eslint-disable-next-line no-unused-vars
          const submitData = {welcomeText, slide1Text, slide2Text, slide3Text, slide1Image, slide2Image, slide3Image} 
          // submitData could be used to make http request
          try{
            Swal.fire({
              title: 'Guardado!',
              html: 'La pagina de inicio ha sido editada.<br/>',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            
          }
          catch(e){
            Swal.fire({
              title: 'Error!',
              text: "Error al enviar el formulario!",
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
          setSubmitting(false);
        }}
        >
        {({
        handleSubmit,
        setFieldValue,
        touched,
        errors
        }) => (
        <Container className="mt-2"> 
            <h2>Editar: Página de inicio</h2>
            <FormikForm noValidate onSubmit={handleSubmit}>
                <TextAreaEdit
                label="Texto de bienvenida"
                name="welcomeText"
                />

                <InputEdit
                label="Texto del 1er slide"
                name="slide1Text"
                />
                <input type="file" className="form-control mt-2" accept="image/*" onChange={(e) => {setFieldValue("slide1Data", e.currentTarget.files[0])}}/>
                {errors.slide1Data && touched.slide1Data ? <Alert variant="danger">{errors.slide1Data}</Alert> : null}
                
                <InputEdit
                label="Texto del 2do slide"
                name="slide2Text"
                />
                <input type="file" className="form-control mt-2" accept="image/*" onChange={(e) => {setFieldValue("slide2Data", e.currentTarget.files[0])}}/>
                {errors.slide2Data && touched.slide2Data? <Alert variant="danger">{errors.slide2Data}</Alert> : null}

                <InputEdit
                label="Texto del 3er slide"
                name="slide3Text"
                />
                <input type="file" className="form-control mt-2" accept="image/*" onChange={(e) => {setFieldValue("slide3Data", e.currentTarget.files[0])}}/>
                {errors.slide3Data && touched.slide3Data? <Alert variant="danger">{errors.slide3Data}</Alert> : null}

                <div className="d-grid gap-2">
                <Button className="mt-5" variant="outline-primary" size="lg" type="submit">Guardar cambios</Button>
                </div>
            </FormikForm>
        </Container>
        )}
        </Formik>
    );
}