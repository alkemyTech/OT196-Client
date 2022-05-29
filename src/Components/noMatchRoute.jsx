import React from 'react';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function NoMatchRoute(){

    const navigate = useNavigate()
    

    return(
        <div> 
            <h1> La ruta que estas buscando no existe en nuestra app </h1>

            <h6> Para volver a home da click en el botón </h6>
            <Button variant="primary" size="lg" onClick={()=> navigate('/')}>
                Volver al Inicio
            </Button>

        </div>
    )
}