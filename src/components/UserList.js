import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import ModalUserImagen from "../components/ModalUserImagen";
import { Creators as UserActions } from "../store/ducks/users";

function UserList() {
  const dispatch = useDispatch();
  const  data  = useSelector((state) => {
    const users = state.users.data.map((user) => {
      const images = state.images.data.filter(
        (image) => Number(image.user_id) === Number(user.id)
      );

      return { ...user, images };
    });

    return users;
  });
  const { modalStatus } = useSelector((state) => state.users);
  console.log(data)

  function setModal(status) {
    dispatch(UserActions.setModalStatus(status));
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Imagens</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.birth_date}</td>
              <td>
                <Button>Ver Imagens</Button>
                <ModalUserImagen
                   showMU={modalStatus}
                   handleClose={() => setModal(false)}
                />
              </td>
              {/* <td>{JSON.stringify(item.images)}</td> */}
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}

export default UserList;
