import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function ModalUser({ showMU, handleCloseMU }) {
  const data = useSelector((state) => state.users.data);

  return (
    <Modal show={showMU} onHide={handleCloseMU}>
      <Modal.Header closeButton>
        <Modal.Title>Usuáruio | minhas Imagens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;
