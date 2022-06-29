import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { editTestimonialForm, submitTestimonialForm } from "../../app/slice";
import Swal from "sweetalert2";
import ImageInput from "../ImageInput"

export default function TestimonialForm({ existingTestimony, axiosApi }){
    //FOR USING THE HOOK USEDISPATCH IN THE BELOW 
    const dispatch = useDispatch()

    //WITH THIS STATES YOU CAN CAPTURE THE DATA OF THE NAME OF THE TESTIMONIAL AUTHOR, THE CONTENT AND IMAGE
    const [name, setName] = useState(existingTestimony ? existingTestimony.name : '');
    const [content, setContent] = useState(existingTestimony ? existingTestimony.content : '');
    const [image, setImage] = useState(existingTestimony ? existingTestimony.image : 'https://alkemy196.s3.sa-east-1.amazonaws.com/images/np7-whj-2x4x-image-placeholder.jpg')

    //FUNCTION FOR CAPTURE THE NAME IN THE LOCAL STATE 
    const handleName = (e) => {
        const target = e.target.value       
        setName(target);
    }
    
    //FUNTION FOR CAPTURE THE CONTENT IN THE LOCAL STATE 
    const handleCkeditorState = (event, editor) =>{
        const data = editor.getData();
        setContent(data);
    }

    //FUNCTION FOR CAPTURE THE IMAGE IN THE LOCAL STATE 
    const handleImg = (e) => {
        const target = e.target.value       
        setImage(target);
    }

    //FUNCTION FOR CALLING THE ACTION FOR CONNECT WITH THE BACKEND 
    //THIS FUNCTION CALL ONE OR OTHER ENDPOINT IF THE CASE IS EDIT AN 
    //EXISTING TESTIMONIAL OR IS NEW 
    const handleSubmitCreate = e=> {
        e.preventDefault()      
            dispatch(submitTestimonialForm({ name, content, image }))
            .then(()=> {
                Swal.fire({
                    icon: 'success',
                    text: `Has creado con éxito un nuevo testimonio`,
                })
            }).catch(()=> {
                 Swal.fire({
                icon: 'error',
                text: `Error en la petición HTTP`,
                })
            }
            )
            axiosApi()
        }
    const handleSubmitEdit = e=> {
        e.preventDefault() 
        dispatch(editTestimonialForm( { name, content, image, id: existingTestimony.id } ))         
            .then(()=> {
                Swal.fire({
                    icon: 'success',
                    text: `Has modificado con éxito el testimonio`,
                })
            }).catch(()=> {
                 Swal.fire({
                icon: 'error',
                text: `Error en la petición HTTP`,
                })
            })  
            axiosApi()    
    }

    return(
        <div className="d-flex justify-content-center">
            {
                existingTestimony ? 
                <form className='container mt-3 mb-3'>
                        <label>Nombre</label>
                        <br/>
                        <input
                            className='form-control'
                            type='text'                        
                            id='name'
                            onChange={handleName}
                            value={name}                    
                        />
                    <br/> 
                    <label>Contenido</label>
                    <br/> 
                    <CKEditor
                        className='form-control'
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}                     
                    />
                    <br/>
                    <label>Imagen</label>
                    <ImageInput image={image} setImage={setImage}/>
                    <br/>
                    <button 
                        onClick={handleSubmitEdit} 
                        className="btn btn-success" 
                        type="submit"
                        style={{ width: '100%' }}
                    >Enviar</button>
                </form> 
                :            
                <form className='container justify-content-center'>
                        <label>Nombre</label>
                        <br/>
                        <input
                            className='form-control'
                            type='text'                        
                            id='name'
                            onChange={handleName}
                            value={name}
                            placeholder='Escribe el nombre del testimonio'
                        />
                    <br/>
                    <label>Contenido</label>
                    <br/>
                    <CKEditor
                        className='form-control'
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        placeholder='Escribe su contenido'
                        onChange={handleCkeditorState}
                    />
                    <br/>
                    <label>Imagen</label>
                    <ImageInput image={image} setImage={setImage}/>
                    <br/>
                    <button 
                    onClick={handleSubmitCreate} 
                    className="btn btn-success" 
                    type="submit"
                    style={{ width: '100%' }}
                    >Enviar</button> 
                </form>
                }
        </div>
    )    
}