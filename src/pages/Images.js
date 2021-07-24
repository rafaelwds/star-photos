import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImagenList from "../components/ImagenList";
import Button from "react-bootstrap/Button";
import ModalImagem from "../components/ModalImagem";
import { useDispatch, useSelector } from "react-redux";
import { Creators as ImagensActions } from "../store/ducks/images";

function Images() {
  const dispatch = useDispatch();

  const { modalStatusImagens } = useSelector((state) => state.images);

  function setModal(status) {
    dispatch(ImagensActions.setModalStatus(status));
  }
  return (
    <Container>
      <Row>
        <h1>Imagens</h1>

        <Button
          onClick={() => setModal(true)}
          style={{ marginBottom: 50 }}
          variant="outline-primary"
        >
          Nova imagem
        </Button>
        <ImagenList />
        <ModalImagem
          showM={modalStatusImagens}
          handleCloseM={() => setModal(false)}
        />
      </Row>
    </Container>
  );
}

export default Images;
