import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function ImagenList() {
  const data = useSelector((state) => state.images.data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Imagem</th>
          <th>Usuario</th>
        </tr>
      </thead>
      {data.map((item) => (
        <tbody key={item.id}>
          <tr>
            <td>{item.id}</td>
            <td>{JSON.stringify(item.url)}</td>
            <td>{item.user_id}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}

export default ImagenList;
