import { useState } from "react";
import { Container, Row, Col, Button, Card , Modal } from "react-bootstrap";

const seccionHero = () => {
  const [showModal, setShowModal] = useState(false);
  const [colorBoton, setColorBoton] = useState("rgb(81, 57, 124)");

  return (
   <>
     <section  className="py-5 bg-light" id="inicio">
       <Container>
         <Row className="aLign-items-center g-4">

           {/* Columna Izquierda */}
           <Col md={6}>
            <h1 className="display-5 fw-bold"> Pilar Tecno</h1>
            <p className="lead text-secondary">
              Bienvenido al curso de React. Aca vas a encontrar los cursos y recursos para seguir aprendiendo.
            </p>
            <Button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: colorBoton, borderColor: colorBoton }}
              onClick={() => setShowModal(true)}
           >
              Cambiar color 
            </Button>
           </Col>

          {/* Columna Derecha (Tarjeta/Card) */}
           <Col md={6}>
            <Card className="border-0 shadow-sm p-5 text-center">
             <Card.Body >
             <p className="text-muted" m-0 fs-6>"Proximamente: Cursos"</p>
            </Card.Body>
           </Card>
          </Col>
        </Row>
       </Container>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
       <Modal.Header closeButton>
        <Modal.Title>Cambiar Color</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <p>¿Desea cambiar el color del botón?</p>
        <input
          type="color"
          value={colorBoton}
          onChange={(e) => setColorBoton(e.target.value)}
        />
        <Modal.Footer>
         <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cancelar
         </Button>
         <Button variant="primary" onClick={() => setShowModal(false)}>
          Confirmar
         </Button>
        </Modal.Footer>
        </Modal.Body>
      </Modal>
   </> 

  );
 }

export default seccionHero;