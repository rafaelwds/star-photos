import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Creators as UserActions } from "../store/ducks/users";

function ModalUser({ show, handleClose }) {
  const dispatch = useDispatch();

  const { inputTextName, inputTextDate } = useSelector((state) => state.users);

  function onSubmit() {
    dispatch(UserActions.newUser(inputTextName, inputTextDate));
  }

  function setInputName(value) {
    dispatch(UserActions.inputTextName(value));
  }

  function setInputDate(value) {
    dispatch(UserActions.inputTextDate(value));
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de Novo Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
          <FormControl
            value={inputTextName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Idade</InputGroup.Text>
          <FormControl
            value={inputTextDate}
            onChange={(e) => setInputDate(e.target.value)}
            placeholder="Idade"
            aria-label="Idade"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <div className="d-grid gap-2">
          <Button onClick={onSubmit} variant="primary" size="lg">
            Cadastrar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;
