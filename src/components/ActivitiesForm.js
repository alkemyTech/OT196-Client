import { useEffect, useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CKEditor } from "@ckeditor/ckeditor5-react";
 import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { errorAlert } from "../setupAlerts";

const ActForm = ({activitiesObject}) => {

    //Set variables
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const [wasSent, setWasSent] = useState(false);
    const [method, setMethod] = useState('Post');
    const [url, setUrl] = useState(`http://localhost:3000/activities`)

    //This conditional defines method, url, id and past arguments
    useEffect( () => {
        if(activitiesObject !== undefined){
            setName(activitiesObject.name)
            setContent(activitiesObject.content)
            setMethod('Patch');
            setUrl(`http://localhost:3000/activities/${activitiesObject.id}`)
        }}, [activitiesObject]
    )

    //Function for extract the name 
    const handleChange = (event) => {
        const target = event.target;
        const { value } = target;
        setName(value);
    }

    //Function for extract the content 
    const handleCkeditorState = (event, editor) =>{
        const data = editor.getData();
        setContent(data);
    }

    //onSubmit this function can Post or Patch
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                await fetch( url , {
                method: method,
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    content: content,
                })
                })
                .then(res => {
                    if (!res.ok) {
                        const error = (res && res.message) || res.status;
                        return Promise.reject(error);
                    }
                })
            } catch (error) {
                const iconError = 'error';
                const titleError='There was an error!';
                const msgError = error;
                errorAlert(iconError, titleError, msgError);
            }
            setWasSent(true);
            setTimeout(() => setWasSent(false), 5000)
        }
    return(
        <div className='d-flex justify-content-center'>
                <form className='form-inline col-6'>
                    <label className="sr-only">Nombre</label>
                    <input
                        type='text'
                        className="form-control"
                        id='name'
                        onChange={handleChange}
                        value={name}
                    />
                    <label className="sr-only">Contenido</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={content}
                        id='content'
                        onChange={handleCkeditorState}
                    />
                    <button onClick={handleSubmit} className="btn btn-dark" type="submit">Enviar</button>
                    {wasSent ? <div>Enviado con éxito</div> : ''}
                </form>
        </div>
    )    
}

 export default ActForm;