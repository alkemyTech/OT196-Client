import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { editTestimonialForm, submitTestimonialForm } from "../../app/slice";
import Swal from "sweetalert2";

export default function TestimonialForm({ existingTestimony }){
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleName = (e) => {
        const target = e.target.value       
        setName(target);
    }
    
    const handleCkeditorState = (event, editor) =>{
        const data = editor.getData();
        setContent(data);
    }

    const handleSubmit = e=> {
        e.preventDefault()
        try {
            !existingTestimony ? 
            dispatch(submitTestimonialForm({name, content}))
            : 
            dispatch(editTestimonialForm( {name, content, id: existingTestimony.id} ))
            .then(x=> {
                Swal.fire({
                    icon: 'sucess',
                    text: `${x} too cool`,
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='d-flex justify-content-center'>
                <form className='form-inline col-6'>
                    <label className="sr-only">Nombre</label>
                    <input
                        type='text'
                        className="form-control"
                        id='name'
                        onChange={handleName}
                        value={name}
                    />
                    <label className="sr-only">Contenido</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}
                    />
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">Enviar</button>
                    
                </form>
        </div>
    )    
}