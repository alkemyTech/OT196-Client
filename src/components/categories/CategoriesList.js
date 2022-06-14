import React, { useEffect, useState } from 'react'
import { Container, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { getRequest } from '../../services/RequestService';
import { FaPlus } from 'react-icons/fa'
import CategoriesListItem from './CategoriesListItem';


function CategoriesList(){
    const {REACT_APP_BACKEND_URL} = process.env
    const [isLoading, setIsLoading] = useState({})
    const [categoriesList, setCategoriesList] = useState({})
    
    useEffect(() => {
      async function fetchCategories(){
        try{
          setIsLoading({status: true, message: ''})
          const res = await getRequest(`${REACT_APP_BACKEND_URL}/categories/`)
          setCategoriesList(res.result)

          // Set message if response is empty
          const loadingMessage = (res.result).length > 0 ? '' : 'No hay ninguna categoria guardada, comience creando una.'

          setIsLoading({status: false, message: loadingMessage})
        }
        catch(e){
          setIsLoading({status: false, message: `Error al obtener las categorias.`})
        }
      }
      fetchCategories()
    }, [REACT_APP_BACKEND_URL])
    
    return(
        <Container className="my-5">
            <h2 className='mb-4'>Lista de categorias</h2> 
            <Row className='justify-content-center align-items-center mb-3 mx-auto w-75'> 
                <Button variant="outline-success lg"><FaPlus className='me-2'/>Agregar nueva categoria</Button>
            </Row>
            {(!isLoading.status && categoriesList.length > 0) ?
            categoriesList.map((cat) => (
            <CategoriesListItem key={cat.id} itemData={cat} />
            ))
            :
            isLoading.message === '' ? 
            <Spinner animation="border" variant="primary" />
            :
            <Alert className='w-75 mx-auto' variant="warning">{isLoading.message}</Alert>
            }
        </Container>
    );
}

export default CategoriesList