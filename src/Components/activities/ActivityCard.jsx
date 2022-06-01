import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
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

    const [newActivity, setNewActivity] = useState({
        id, 
        imagen, 
        tittle, 
        start, 
        end, 
        participants
    })  

    const handleUpdateActivity = (e)=> {
      setNewActivity({
          ...newActivity, 
          [e.target.name]: e.target.value
      })
    }

    const handleSubmitNewActivity = (x)=> {
         Swal.fire({
            title: 'Estas a punto de modificar una actividad de la base de datos ',
            icon: 'question',
            iconHtml: '?',
            confirmButtonText: 'Si, modificar',
            cancelButtonText: 'No, Cancelar',
            showCancelButton: true,
            showCloseButton: true
           }).then(result=> {
               if(result.isConfirmed){
                   //WRITE HERE THE FUNCTION TO CONNECT THE ACTION FOR UPDATE THE ACTIVITY
                   Swal.fire({
                       tittle: 'Actividad actualizada con exito',
                       icon: 'success',
                       confirmButtonText: 'Actividad actualizada con exito',
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
            <Card> 
                        <Button variant='danger' className='card_main_btn_error' onClick={()=> handleDeleteActivity(id)}> X </Button>
                        <input type='text' placeholder='cambiar imagen' defaultValue={imagen} name='imagen' onChange={(e)=> handleUpdateActivity(e)}/> 
                        <input type='text' placeholder='cambiar nombre de actividad' defaultValue={tittle} name='tittle' onChange={(e)=> handleUpdateActivity(e)}/> 
                        <input type='date' placeholder='cambiar fecha de inicio' defaultValue={start} name='start' onChange={(e)=> handleUpdateActivity(e)}/> 
                        <input type='date' placeholder='cambiar fecha de fin' defaultValue={end} name='end' onChange={(e)=> handleUpdateActivity(e)}/>                         
                        <input type='number' placeholder='cambiar numero de participantes' defaultValue={participants} min={0} name='participants' onChange={(e)=> handleUpdateActivity(e)}/> 
                        <Button onClick={()=> handleSubmitNewActivity(newActivity)}> Guardar cambios </Button>
                        
            </Card>
            } 
                
        </div>
    )
}