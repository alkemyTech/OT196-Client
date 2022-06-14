import React from 'react'
import CategoriesList from '../components/categories/CategoriesList';
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BackofficeCategories(props) {

  return(

    <>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>Backoffice</Breadcrumb.Item>
        <Breadcrumb.Item active>Categorias</Breadcrumb.Item>
      </Breadcrumb>
      <CategoriesList/>
    </>

    );

}

export default BackofficeCategories;