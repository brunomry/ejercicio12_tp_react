import { Form, Row, Col } from "react-bootstrap";
import ListadoNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  return (
    <>
      <section className="sectionForm mx-auto px-2 rounded-3 bg-white ">
        <Form className="form pt-5">
          <Form.Group
            as={Row}
            className="mb-2 mb-md-3 d-flex justify-content-center h-100"
          >
            <Form.Label column sm="4">
              Buscar por categoría:
            </Form.Label>
            <Col md="5">
              <Form.Select required>
                <option>seleccione</option>
                <option value="Entretenimiento">Entrenimiento</option>
                <option value="Tecnologia">Tecnología</option>
                <option value="Negocio">Negocio</option>
                <option value="Política">Política</option>
                <option value="Deportes">Deportes</option>
                <option value="Salud">Salud</option>
                <option value="Delito">Delito</option>
                <option value="Domestico">Doméstico</option>
                <option value="Educación">Educación</option>
                <option value="Ambiente">Ambiente</option>
                <option value="Comida">Comida</option>
                <option value="Estilo de vida">Estilo de vida</option>
                <option value="Ciencia">Ciencia</option>
                <option value="Turismo">Turismo</option>
                <option value="Mundo">Mundo</option>
                <option value="Arriba">Arriba</option>
                <option value="Otro">Otro</option>
              </Form.Select>
            </Col>
          </Form.Group>
          {/* <div className="text-center">
        <Button
          className="btnEnviar border-0 px-5 mt-2 fs-5 py-sm-3 mb-4"
          type="submit"
        >
          Buscar
        </Button>
      </div> */}
        </Form>
      </section>
      <ListadoNoticias></ListadoNoticias>
    </>
  );
};

export default FormularioNoticias;
