import React from 'react'
import { useFormik } from "formik"
import { Button } from "react-bootstrap"
import './EditOrganizationData.css'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { submitUpdateDataOrganization } from '../../app/slice'
import axios, { AxiosError } from 'axios'

export default function EditOrganizationData(){
    const dispatch = useDispatch()

    const handleSubmitData =  (data)=> {    
        dispatch(submitUpdateDataOrganization(data))
       .then(()=> {          
            Swal.fire({
            icon: 'success',
            text: 'la base de datos se ha actualizado con éxito'
        })
       }).catch(()=> {
             Swal.fire({
                icon: 'error',
                text: 'Error en la peticion HTTP'
               }) 
       })
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
        <section className='editOrganizationData_main'> 
            <h1> A continuacion puedes editar el nombre y el logo de la organización: </h1>
            <form onSubmit={formik.handleSubmit} 
            className='editOrganizationData_container'            
            >
               
                <input name="name"
                placeholder='Nombre de la organización'
                type='text'
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
                value= {formik.values.name}   
                key={1}
                className='editOrganizationData_input'            
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
                className='editOrganizationData_input'           
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