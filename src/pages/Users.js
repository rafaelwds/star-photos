import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import { Creators as UserActions } from "../store/ducks/users";
import UserList from "../components/UserList";
import ModalUser from "../components/ModalUser";

function User() {
  const dispatch = useDispatch();

  const { modalStatus } = useSelector((state) => state.users);

  function setModal(status) {
    dispatch(UserActions.setModalStatus(status));
  }

  return (
    <Container>
      <Row>
        <h1>Users</h1>
        <Button
          onClick={() => setModal(true)}
          style={{ marginBottom: 50 }}
          variant="outline-primary"
        >
          Novo Usuário
        </Button>
        <UserList />
        <ModalUser show={modalStatus} handleClose={() => setModal(false)} />
      </Row>
    </Container>
  );
}

export default User;
