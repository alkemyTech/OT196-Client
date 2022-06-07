import { Breadcrumb, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import ShowNews from '../components/news/ShowNews'

function ListNews() {
 
    return (
    <>
        <Breadcrumb className="mt-3 ms-3">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/news" }}>Novedades</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="my-5">
            <ShowNews/>
        </Container>
    </>
    );
}

export default ListNews;
