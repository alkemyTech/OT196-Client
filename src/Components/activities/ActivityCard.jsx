import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import ActForm from '../../components/ActivitiesForm'
import './ActivityList.css'

export default function ActivityCard({ id, imagen, tittle, start, end, participants }){

    const [edit, setEdit] = useState(false)

    const handleDeleteActivity = (id)=> {
       Swal.fire({
        title: 'Estas a punto de eliminar una actividad de la base de datos ',
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        showCancelButton: true,
        showCloseButton: true
       }).then(result=> {
           if(result.isConfirmed){
               //WRITE HERE THE FUNCTION TO CONNECT THE ACTION FOR DELETE THE ACTIVITY 
               Swal.fire({
                   tittle: 'Actividad eliminada con exito',
                   icon: 'success',
                   confirmButtonText: 'Actividad eliminada con exito',
               }).then(result=> {
                   if(result.isConfirmed) window.location.reload()
               })
           }
       })      
    }
    
    return(
        <div> 
             {
            !edit ? 
            <Card className='card_main'>
                        <Button variant='danger' className='card_main_btn_error' onClick={()=> handleDeleteActivity(id)}> X </Button>
                        <img src={ imagen } alt={ tittle } className='card_main_img' />
                        <h2> { tittle } </h2>
                        <h3> Inicia: {start}</h3>
                        <h3> Termina: {end} </h3>
                        <h6> Participantes inscritos: {participants} </h6> 
                        { !edit ? <Button onClick={()=> setEdit(!edit)}>   Editar Información </Button> : null } 
                        
            </Card> : 
            <ActForm
            activitiesObject= { {id, imagen, content: tittle, start, end, participants} }
            />
            } 
                
        </div>
    )
}