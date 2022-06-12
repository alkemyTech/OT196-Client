import axios from "axios";
import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import NewsEdit from "./NewsEdit";
import "./NewsTable.css";

const NewsTable = () => {
  const [list, setList] = React.useState([]);

  const getAllNews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/news");
      setList(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  React.useEffect(() => {
    getAllNews();
  }, []);

  return (
    <Table borderless hover responsive="md" className="mt-3">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Fecha de cración</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((news) => (
          <tr key={news.id}>
            <td>
              <Image fluid thumbnail src={news.image} className="custom-size" />
            </td>
            <td>{news.name}</td>
            <td>{news.createdAt.substring(0, 10)}</td>
            <td>
              <NewsEdit newsId={news.id} />
            </td>
            <td>
              <Button variant="danger">
                <FaTrashAlt /> Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default NewsTable;
