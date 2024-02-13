import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Noticia = () => {
  return (
    <Card className="cardNews pb-3 rounded-2">
      <img src="" alt="" className="imgNews rounded-top-2"/>
      <div className="px-2 mb-4 mt-3">
      <h5>diario z</h5>
      <h4 className=" pt-3">Título noticia</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste dolorum sit voluptas amet quo veniam fuga ad modi numquam! Enim aliquam ex cumque veritatis nihil nobis vel voluptates ab?</p>
      </div>
      
      <Button className="btnSeeNews border-0 px-2 py-3 mx-2">Ver noticia completa</Button>
    </Card>
  );
};

export default Noticia;