import React from 'react'
import { useFormik } from "formik"
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { isMyUserLogged, submitUserData } from '../app/slice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import hands  from "../img/hands.jpg"

export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const res =  useSelector(submitUserData)

    const handleSubmitUserData =  (user)=> {
        dispatch(isMyUserLogged(user))
        console.log(111, res)
        const apiResponse = res.payload.USER_LOGIN.isUserLogged
        if(apiResponse){
            navigate('/')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Datos Incorrectos',
                text: 'Email o contraseña incorrectos',
              })
        }
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
        onSubmit: values => handleSubmitUserData(values)
    })

    return(
        <div className='login'> 
     
            <section className='section-1-login'> 
            <h6 style={{marginLeft: '-50%'}}> Bienvenido </h6>
            <h1> Inicia sesión en tu cuenta! </h1>
            <form onSubmit={formik.handleSubmit} style={{display: 'grid', 
            maxWidth: '60%', marginLeft: '20%', 
            
        }}>
            <label>  </label>
            <input name='email' type='email' className='input'
            placeholder='Email' 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            value={formik.values.name}
            
            /> 
             {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}> {formik.errors.email} </div> : null }
             <label>  </label>
            <input name='password' type='password' className='input'
            placeholder='Contraseña'
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            value={formik.values.password} 
      
            /> 
            {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}> {formik.errors.password} </div> : null }

            <Button type='submit' className='btn-login'> Inicia Sesión </Button>
        </form>
        <div  className='span-login'> 
        <span >
            No tienes cuenta?  </span>
             <Link className='registro-login' to='#'> 
             Registrate </Link> </div>
        </section>
        <section>
            <img src={hands} alt='somos mas' className='img-hands'/>
        </section>
        
        </div>
    )

}