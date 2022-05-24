import React from 'react'
import { useFormik } from "formik"
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { submitUserData } from '../app/actions'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Login(){
    const dispatch = useDispatch()
    const res =  useSelector(state=> state.rootreducer)


    // const handleSubmitUserData = (user)=> {
    //     dispatch(submitUserData(user))
       
    //    console.log(res)
        
    // }

    const REACT_APP_BACKEND = `http://localhost3001`

    const handleSubmitUserData = async (user)=> {
       const res = await axios.post(`${REACT_APP_BACKEND}/auth/login`, user)
       
       console.log(res)
        
    }
    
    const formik = useFormik({
        initialValues: {
            email: '', 
            password: '',
        },
        validate: values=> {
            const errors = {}
            if(!values.email){
                errors.email = 'El email es requerido'
            } 
            if(!values.password){
                errors.password = 'El password es requerido'
            } else if(values.password.length < 6){
                errors.password = 'El password es muy corto'
            }

            return errors
        },
        //onSubmit: values => console.log(values) //aqui capturo los datos del formulario
        onSubmit: values => handleSubmitUserData(values)
    })

    return(
        <div> 
            <h1> Bienvenido a Somos Mas </h1>
            <h4> Por favor digita tus credenciales para continuar </h4>
        <form onSubmit={formik.handleSubmit} style={{display: 'grid', 
            maxWidth: '60%', marginLeft: '20%', 
            
        }}>
            <label> Email </label>
            <input name='email' type='email' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            value={formik.values.name}
            
            /> 
             {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}> {formik.errors.email} </div> : null }
             <label> Password </label>
            <input name='password' type='password'
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            value={formik.values.password} 
      
            /> 
            {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}> {formik.errors.password} </div> : null }

            <Button type='submit'> Entrar </Button>
        </form>
        </div>
    )

}