import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { editTestimonialForm, submitTestimonialForm } from "../../app/slice";
import Swal from "sweetalert2";

export default function TestimonialForm({ existingTestimony }){
    //FOR USING THE HOOK USEDISPATCH IN THE BELOW 
    const dispatch = useDispatch()

    //WITH THIS STATES YOU CAN CAPTURE THE DATA OF THE NAME OF THE TESTIMONIAL AUTHOR, THE CONTENT AND IMAGE
    const [name, setName] = useState(existingTestimony ? existingTestimony.name : '');
    const [content, setContent] = useState(existingTestimony ? existingTestimony.content : '');
    const [img, setImg] = useState(existingTestimony ? existingTestimony.img : '')

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
        setImg(target);
    }

    //FUNCTION FOR CALLING THE ACTION FOR CONNECT WITH THE BACKEND 
    //THIS FUNCTION CALL ONE OR OTHER ENDPOINT IF THE CASE IS EDIT AN 
    //EXISTING TESTIMONIAL OR IS NEW 
    const handleSubmit = e=> {
        e.preventDefault()      
            !existingTestimony ? 
            dispatch(submitTestimonialForm({ name, content, img }))
            .then(()=> {
                Swal.fire({
                    icon: 'sucess',
                    text: `Has modificado con éxito la base de datos`,
                })
            }).catch(()=> {
                 Swal.fire({
                icon: 'error',
                text: `Error en la petición HTTP`,
                })
            })
            : 
           dispatch(editTestimonialForm( { name, content, img, id: existingTestimony.id } ))         
            .then(()=> {
                Swal.fire({
                    icon: 'sucess',
                    text: `Has modificado con éxito la base de datos`,
                })
            }).catch(()=> {
                 Swal.fire({
                icon: 'error',
                text: `Error en la petición HTTP`,
                })
            })      
    }

    return(
        <div className='d-flex justify-content-center'>
            {
                existingTestimony ? 
                <form className='form-inline col-6'>
                    <label className="sr-only">Nombre</label>
                    <input
                        type='text'                        
                        id='name'
                        onChange={handleName}
                        value={name}                    
                    />
                    <label className="sr-only">Contenido</label>
                    <br/> 
                    <CKEditor
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}                     
                    />
                    <input
                    type='text'                  
                        id='img'
                        onChange={handleImg}
                        value={img}                      
                       // placeholder={existingTestimony.img}
                        />
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">Enviar</button>
                    
                </form> 
                :            
                <form className='form-inline col-6'>
                    <label className="sr-only">Nombre</label>
                    <input
                        type='text'                        
                        id='name'
                        onChange={handleName}
                        value={name}
                        placeholder='Escribe tu nombre'
                    />
                    <label className="sr-only">Contenido</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}
                    />
                    <input
                    type='text'                  
                        id='img'
                        onChange={handleImg}
                        value={img}
                        placeholder='Escribe la URL de tu imagen'
                        />
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">Enviar</button>
                    
                </form>
                }
        </div>
    )    
}