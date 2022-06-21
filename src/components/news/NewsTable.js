import axios from "axios";
import React from "react";
import { Table, Image } from "react-bootstrap";
import NewsEdit from "./NewsEdit";
import BtnDeleteNews from "./BtnDeleteNews";
import "./NewsTable.css";

const NewsTable = () => {
  const [list, setList] = React.useState([]);
  const [updateList, setUpdateList] = React.useState(true);

  const getAllNews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/news");
      setList(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  // Trying to re-render list
  const handleUpdate = (updateCheck) => {
    setUpdateList(updateCheck);
  };

  React.useEffect(() => {
    if (updateList) {
      getAllNews();
    }
  }, [updateList]);

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
              <NewsEdit
                newsId={news.id}
                onClose={(updateCheck) => handleUpdate(updateCheck)}
              />
            </td>
            <td>
              <BtnDeleteNews newsId={news.id} arrFunc={[getAllNews]} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default NewsTable;
