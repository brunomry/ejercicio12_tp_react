import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Noticia = () => {
  return (
    <Card className="cardNews pb-3 rounded-2">
      <img
        src=""
        alt=""
        className="imgNews rounded-top-2"
      />
      <div className="d-flex flex-column justify-content-between">
        <div className="px-2 mb-3 mt-2 containerDescription">
          <h6>creador</h6>
          <h5>titulo de noticia</h5>
          <p>descripción de noticia</p>
        </div>
        <Button className="btnSeeNews border-0 px-2 py-3 mx-2">
          Ver noticia completa
        </Button>
      </div>
    </Card>
  );
};

export default Noticia;
