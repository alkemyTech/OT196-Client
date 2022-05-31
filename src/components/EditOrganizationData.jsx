import React from 'react'
import { useFormik } from "formik"
import { Button } from "react-bootstrap"

export default function EditOrganizationData(){

    const handleSubmitData = (data)=> {       
        console.log(data)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            imagen: '',  

        }, 
        validate: values=> {
            const errors = {}

            if(!values.name) errors.name="El nuevo nombre es requerido"
            if(!values.imagen) errors.imagen= "La nueva imagen es requerida"

            return errors

        },
        onSubmit: values=> handleSubmitData(values)
    })

    return(
        <section> 
            <h1> A continuacion puedes editar el nombre y el logo de la organización: </h1>
            <form onSubmit={formik.handleSubmit} 
            style={{border: 'solid 1px black'}}
            >
               
                <input name="name"
                placeholder='Nombre de la organización'
                type='text'
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
                value= {formik.values.name}   
                key={1}      
                style={{width: '80%'}} 
                /> <br/> 
                {formik.errors.name ? <div style={{color: 'red'}}> {formik.errors.name} </div> : null}
                <label>  </label>                
                <input name="imagen"
                placeholder='Imagen'
                type='text'
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
                value= {formik.values.imagen} 
                key={2}  
                style={{width: '80%'}}         
                /> <br/>
                {formik.errors.imagen ? <div style={{color: 'red'}}> {formik.errors.imagen} </div> : null}
                <Button  
                 onBlur={formik.handleBlur} 
               //disabled={!formik.name || !formik.imagen}
                type='submit'> Enviar </Button>
            </form>
        </section>
    )
}