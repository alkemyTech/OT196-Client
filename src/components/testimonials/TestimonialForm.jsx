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
        <div className="d-flex justify-content-center">
            {
                existingTestimony ? 
                <form className='form-inline container mt-3 mb-3'>
                    <div className="d-flex justify-content-center">
                        <label>Nombre</label>
                        <input
                            className='form-control'
                            type='text'                        
                            id='name'
                            onChange={handleName}
                            value={name}                    
                        />
                    </div>
                    <label>Contenido</label>
                    <br/> 

                    <CKEditor
                        editorConfig= {(config) =>{
                            config.enterMode = `<br />`;
                        }}
                        className='form-control'
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}                     
                    />
                    <input
                        className='form-control'  
                        type='text'                  
                        id='img'
                        onChange={handleImg}
                        value={img}                      
                       // placeholder={existingTestimony.img}
                        />
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">Enviar</button>
                    
                </form> 
                :            
                <form className='form-inline container justify-content-center'>
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
                        editorConfig= {(config) =>{
                            config.enterMode =`<br />`;
                        }}
                        className='form-control'
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        placeholder='Escribe su contenido'
                        onChange={handleCkeditorState}
                    />
                    <br/>
                    <label>Imagen</label>
                    <input
                        className='form-control'
                        type='text'                  
                        id='img'
                        onChange={handleImg}
                        value={img}
                        placeholder='Añade la URL de tu imagen'
                    />
                    <br/>
                    <button 
                    onClick={handleSubmit} 
                    className="btn btn-success" 
                    type="submit"
                    style={{ width: '100%' }}
                    >Enviar</button> 
                </form>
                }
        </div>
    )    
}