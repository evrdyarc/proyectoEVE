import { Container, Row, Col, Button, Card } from "react-bootstrap";

const seccionHero = () => {
  return (
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
         style={{ backgroundColor:"rgb(111, 66, 193)", borderColor: "rgb(111, 66, 193" }}
         >
          Cambiar color 
          </Button>
          </Col>

          {/* Columna Derecha (Tarjeta/Card) */}
          <Col md={6}>
          <Card className="border-0 shadow-sm p-5 text-center">
            <Card.Body >
           <p className="text-muted" m-0 fs-6>"Hola mi nombre es flavia"</p>
            </Card.Body>
          </Card>
          </Col>

         </Row>
      </Container>
    </section>
   );
  };

export default seccionHero;