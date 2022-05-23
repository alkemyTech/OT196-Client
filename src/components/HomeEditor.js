import React from "react";
import { Formik, Form as FormikForm, useField } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, Alert, Container, Form, FloatingLabel } from 'react-bootstrap'
import Swal from 'sweetalert2'

const IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
const slideImageRequest = Yup.mixed()
.required('Slide image is required.')
.test(
  'fileFormat',
  'Unsupported file type',
  (value) => value === null || (value && IMAGE_FORMATS.includes(value.type))
)

const slideRequest = Yup.string()
.min(20, 'Must have 20 characters.')
.max(500, 'Slide text is too long. (Max 500)')
.required('Slide text is required.')

const HomeSchema = Yup.object().shape({
    welcomeText: Yup.string()
        .min(20, 'Must have 20 characters.')
        .max(2000, 'Welcome text is too long. (Max 2000)')
        .required('Welcome text is required.'),
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
          await new Promise(r => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2))
          Swal.fire({
            title: 'Saved!',
            text: 'Home page has been edited successfully.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
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
            <h2>Edit: Home page</h2>
            <FormikForm noValidate onSubmit={handleSubmit}>
                <TextAreaEdit
                label="Welcome text"
                name="welcomeText"
                />
                <InputEdit
                label="Text for 1st slide."
                name="slide1Text"
                />

                <input type="file" className="form-control mt-2" onChange={(e) => {setFieldValue("slide1Data", e.currentTarget.files[0])}}/>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
                {errors.slide1Data && touched.slide1Data ? <p className="text-danger">{errors.slide1Data}</p> : null}
                <InputEdit
                label="Text for 2nd slide."
                name="slide2Text"
                />

                <input type="file" className="form-control mt-2" onChange={(e) => {setFieldValue("slide2Data", e.currentTarget.files[0])}}/>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
                {errors.slide2Data && touched.slide2Data? <p className="text-danger">{errors.slide2Data}</p> : null}

                <InputEdit
                label="Text for 3st slide."
                name="slide3Text"
                />

                <input type="file" className="form-control mt-2" onChange={(e) => {setFieldValue("slide3Data", e.currentTarget.files[0])}}/>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
                {errors.slide3Data && touched.slide3Data? <p className="text-danger">{errors.slide3Data}</p> : null}

                <div className="d-grid gap-2">
                <Button className="mt-5" variant="outline-primary" size="lg" type="submit">Submit form</Button>
                </div>
            </FormikForm>
        </Container>
        )}
        </Formik>
    );
}