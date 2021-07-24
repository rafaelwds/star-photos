import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Creators as ImageActions } from "../store/ducks/images";
import { useDispatch, useSelector } from "react-redux";

function ModalUser({ showM, handleCloseM }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.users.data);
  const { inputUrl, inputUser } = useSelector((state) => state.images);

  function onSubmit() {
    dispatch(ImageActions.newImage(inputUrl, inputUser));
  }
  function setInputUrl(value) {
    dispatch(ImageActions.inputUrl(value));
  }
  function setInputUser(value) {
    dispatch(ImageActions.inputUser(value));
  }

  return (
    <Modal show={showM} onHide={handleCloseM}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro Imagem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Imagem Url</InputGroup.Text>
          <FormControl
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <select
            onChange={(e) => setInputUser(e.target.value)}
            name="cars"
            className="form-control"
            id="cars"
          >
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
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
